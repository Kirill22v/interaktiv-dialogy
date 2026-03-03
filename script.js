// Состояние игры
let gameState = {
    currentScenario: 'friendly',
    currentScene: 1,
    relationship: 50,
    isWaiting: false
};

// DOM элементы
const chatMessages = document.getElementById('chat-messages');
const choicesContainer = document.getElementById('choices-container');
const npcName = document.getElementById('npc-name');
const npcMood = document.getElementById('npc-mood');
const relationshipMeter = document.getElementById('relationship-meter');
const relationshipValue = document.getElementById('relationship-value');
const restartBtn = document.getElementById('restart-btn');
const scenarioBtn = document.getElementById('scenario-btn');
const scenarioSelector = document.getElementById('scenario-selector');
const scenarioOptions = document.querySelectorAll('.scenario-option');
const endingModal = document.getElementById('ending-modal');
const endingTitle = document.getElementById('ending-title');
const endingText = document.getElementById('ending-text');
const endingRelationship = document.getElementById('ending-relationship');
const endingRestartBtn = document.getElementById('ending-restart-btn');
const endingScenarioBtn = document.getElementById('ending-scenario-btn');
const npcAvatarContainer = document.getElementById('npc-avatar-container');

// Добавление сообщения в чат
function addMessage(text, sender, senderName) {
    const messageDiv = document.createElement('div');
    messageDiv.className = `message ${sender}`;

    const senderDiv = document.createElement('div');
    senderDiv.className = 'message-sender';
    senderDiv.textContent = senderName;

    const textDiv = document.createElement('div');
    textDiv.className = 'message-text';
    textDiv.textContent = text;

    messageDiv.appendChild(senderDiv);
    messageDiv.appendChild(textDiv);
    chatMessages.appendChild(messageDiv);

    // Прокрутка вниз
    chatMessages.scrollTop = chatMessages.scrollHeight;
}

// Очистка чата
function clearChat() {
    chatMessages.innerHTML = '';
}

// Отрисовка персонажа
function renderCharacter(container, avatarKey) {
    const svg = characterSVGs[avatarKey];
    if (svg) {
        container.innerHTML = svg;
    }
}

// Инициализация игры
function initGame(scenarioKey = 'friendly') {
    gameState.currentScenario = scenarioKey;
    gameState.currentScene = scenarios[scenarioKey].startScene;
    gameState.relationship = 50;
    gameState.isWaiting = false;

    const scenario = scenarios[scenarioKey];
    npcName.textContent = scenario.npcName;

    renderCharacter(npcAvatarContainer, scenario.npcAvatar);

    endingModal.classList.remove('active');
    scenarioSelector.classList.remove('active');

    clearChat();
    updateMood();
    updateRelationshipMeter();
    renderScene();
}

// Обновление настроения NPC
function updateMood() {
    const rel = gameState.relationship;
    let mood, emoji;

    if (rel >= 70) {
        mood = "Отлично";
        emoji = "😊";
    } else if (rel >= 50) {
        mood = "Хорошо";
        emoji = "🙂";
    } else if (rel >= 30) {
        mood = "Нейтрально";
        emoji = "😐";
    } else {
        mood = "Плохо";
        emoji = "😞";
    }

    npcMood.textContent = `${emoji} ${mood}`;
}

// Обновление индикатора отношений
function updateRelationshipMeter() {
    const clampedRel = Math.max(0, Math.min(100, gameState.relationship));
    relationshipMeter.style.width = `${clampedRel}%`;
    relationshipValue.textContent = `${clampedRel}%`;
}

// Рендер сцены
function renderScene() {
    const scenario = scenarios[gameState.currentScenario];
    const scene = scenario.scenes[gameState.currentScene];

    // Сообщение от NPC
    addMessage(scene.text, 'npc', scenario.npcName);

    // Создание кнопок выбора
    choicesContainer.innerHTML = '';

    if (scene.isEnding) {
        setTimeout(() => showEnding(scene), 1500);
    } else {
        gameState.isWaiting = false;
        scene.choices.forEach((choice, index) => {
            const btn = document.createElement('button');
            btn.className = 'choice-btn';
            btn.textContent = choice.text;
            btn.addEventListener('click', () => makeChoice(choice));
            btn.style.animationDelay = `${index * 0.1}s`;
            choicesContainer.appendChild(btn);
        });
    }

    updateMood();
    updateRelationshipMeter();
}

// Выбор ответа
function makeChoice(choice) {
    if (gameState.isWaiting) return;
    gameState.isWaiting = true;

    // Получаем текущую сцену для имени NPC
    const scenario = scenarios[gameState.currentScenario];

    // Добавляем сообщение игрока
    addMessage(choice.text, 'player', 'Вы');

    // Обновляем отношения
    gameState.relationship += choice.relationshipChange || 0;
    gameState.relationship = Math.max(0, Math.min(100, gameState.relationship));
    updateRelationshipMeter();

    // Переход к следующей сцене
    if (choice.nextScene) {
        setTimeout(() => {
            gameState.currentScene = choice.nextScene;
            choicesContainer.innerHTML = '';
            setTimeout(() => renderScene(), 1000);
        }, 800);
    }
}

// Показ концовки
function showEnding(scene) {
    choicesContainer.innerHTML = '';
    gameState.isWaiting = true;

    let title, color;
    switch(scene.endingType) {
        case 'good':
            title = "🎉 Отличная концовка!";
            color = "#48dbfb";
            break;
        case 'neutral':
            title = "😐 Нейтральная концовка";
            color = "#feca57";
            break;
        case 'bad':
            title = "😞 Неудачная концовка";
            color = "#ff6b6b";
            break;
    }

    endingTitle.textContent = title;
    endingTitle.style.color = color;
    endingText.textContent = scene.endingText;
    endingRelationship.textContent = `${gameState.relationship}%`;

    setTimeout(() => {
        endingModal.classList.add('active');
    }, 300);
}

// Переключение селектора сценариев
function toggleScenarioSelector() {
    scenarioSelector.classList.toggle('active');
}

// Обработчики кнопок
restartBtn.addEventListener('click', () => {
    initGame(gameState.currentScenario);
});

scenarioBtn.addEventListener('click', toggleScenarioSelector);

scenarioOptions.forEach(option => {
    option.addEventListener('click', () => {
        const scenarioKey = option.dataset.scenario;
        initGame(scenarioKey);
    });
});

endingRestartBtn.addEventListener('click', () => {
    initGame(gameState.currentScenario);
});

endingScenarioBtn.addEventListener('click', () => {
    endingModal.classList.remove('active');
    toggleScenarioSelector();
});

window.addEventListener('load', () => {
    initGame();
});
