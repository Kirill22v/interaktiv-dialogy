// Состояние игры
let gameState = {
    currentScenario: 'duration',
    currentScene: 1,
    score: 0,
    isWaiting: false
};

// DOM элементы (будут инициализированы после загрузки DOM)
let chatMessages, choicesContainer, npcName, npcMood, relationshipMeter, relationshipValue;
let restartBtn, scenarioBtn, scenarioSelector, scenarioOptions;
let endingModal, endingTitle, endingText, endingRelationship;
let endingRestartBtn, endingScenarioBtn, npcAvatarContainer, backstoryContainer;

// Инициализация DOM элементов
function initDOMElements() {
    chatMessages = document.getElementById('chat-messages');
    choicesContainer = document.getElementById('choices-container');
    npcName = document.getElementById('npc-name');
    npcMood = document.getElementById('npc-mood');
    relationshipMeter = document.getElementById('relationship-meter');
    relationshipValue = document.getElementById('relationship-value');
    restartBtn = document.getElementById('restart-btn');
    scenarioBtn = document.getElementById('scenario-btn');
    scenarioSelector = document.getElementById('scenario-selector');
    scenarioOptions = document.querySelectorAll('.scenario-option');
    endingModal = document.getElementById('ending-modal');
    endingTitle = document.getElementById('ending-title');
    endingText = document.getElementById('ending-text');
    endingRelationship = document.getElementById('ending-relationship');
    endingRestartBtn = document.getElementById('ending-restart-btn');
    endingScenarioBtn = document.getElementById('ending-scenario-btn');
    npcAvatarContainer = document.getElementById('npc-avatar-container');

    // Создаём контейнер для предыстории
    backstoryContainer = document.createElement('div');
    backstoryContainer.className = 'backstory-message';
    backstoryContainer.id = 'backstory-message';
}

// Добавление сообщения в чат
function addMessage(text, sender, senderName) {
    if (!chatMessages) {
        console.error('chatMessages не найден');
        return;
    }

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
    if (chatMessages) {
        chatMessages.innerHTML = '';
    }
}

// Отрисовка персонажа
function renderCharacter(container, avatarKey) {
    if (!container) {
        console.error('npcAvatarContainer не найден');
        return;
    }
    const svg = characterSVGs[avatarKey];
    if (svg) {
        container.innerHTML = svg;
    } else {
        console.error('SVG для аватара не найден:', avatarKey);
    }
}

// Инициализация игры
function initGame(scenarioKey = 'duration') {
    gameState.currentScenario = scenarioKey;
    gameState.currentScene = scenarios[scenarioKey].startScene;
    gameState.score = 0;
    gameState.isWaiting = false;

    const scenario = scenarios[scenarioKey];
    npcName.textContent = scenario.npcName;

    renderCharacter(npcAvatarContainer, scenario.npcAvatar);

    if (endingModal) endingModal.classList.remove('active');
    if (scenarioSelector) scenarioSelector.classList.remove('active');

    clearChat();

    // Добавляем предысторию
    showBackstory(scenario.backstory);

    updateMood();
    updateRelationshipMeter();
}

// Показ предыстории
function showBackstory(backstory) {
    if (!backstory) {
        renderScene();
        return;
    }

    const backstoryDiv = document.createElement('div');
    backstoryDiv.className = 'message backstory';
    backstoryDiv.innerHTML = `
        <div class="message-sender">📖 Предыстория</div>
        <div class="message-text">${backstory}</div>
    `;
    chatMessages.appendChild(backstoryDiv);
    chatMessages.scrollTop = chatMessages.scrollHeight;

    // Показываем сцену через небольшую задержку
    setTimeout(() => {
        renderScene();
    }, 1500);
}

// Обновление настроения NPC
function updateMood() {
    const score = gameState.score;
    let mood, emoji;

    if (score >= 35) {
        mood = "Отлично";
        emoji = "😊";
    } else if (score >= 15) {
        mood = "Хорошо";
        emoji = "🙂";
    } else if (score >= 0) {
        mood = "Нейтрально";
        emoji = "😐";
    } else {
        mood = "Плохо";
        emoji = "😞";
    }

    if (npcMood) {
        npcMood.textContent = `${emoji} ${mood}`;
    }
}

// Обновление индикатора (теперь показывает прогресс баллов)
function updateRelationshipMeter() {
    if (!relationshipMeter) return;

    // Максимальный возможный счёт примерно 60-70 баллов
    const maxScore = 60;
    const clampedScore = Math.max(0, Math.min(maxScore, gameState.score + 20));
    const percentage = (clampedScore / maxScore) * 100;
    relationshipMeter.style.width = `${percentage}%`;
    if (relationshipValue) {
        relationshipValue.textContent = `${gameState.score} баллов`;
    }
}

// Рендер сцены
function renderScene() {
    const scenario = scenarios[gameState.currentScenario];
    const scene = scenario.scenes[gameState.currentScene];

    // Сообщение от NPC
    addMessage(scene.text, 'npc', scenario.npcName);

    // Создание кнопок выбора
    if (choicesContainer) {
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

    // Обновляем счёт
    gameState.score += choice.relationshipChange || 0;
    updateRelationshipMeter();

    // Переход к следующей сцене
    if (choice.nextScene) {
        setTimeout(() => {
            gameState.currentScene = choice.nextScene;
            if (choicesContainer) choicesContainer.innerHTML = '';
            setTimeout(() => renderScene(), 1000);
        }, 800);
    }
}

// Показ концовки
function showEnding(scene) {
    if (choicesContainer) choicesContainer.innerHTML = '';
    gameState.isWaiting = true;

    let title, color, rating;
    const score = gameState.score;

    // Определение рейтинга по баллам
    if (score >= 35) {
        title = "🎉 Профессионал!";
        color = "#48dbfb";
        rating = "Конфликт исчерпан, клиент лоялен!";
    } else if (score >= 15) {
        title = "😊 Опытный специалист";
        color = "#feca57";
        rating = "Проблема устранена частично, клиент нейтрален.";
    } else if (score >= 0) {
        title = "😐 Начинающий мастер";
        color = "#ff9f43";
        rating = "Конфликт не решён, клиент недоволен.";
    } else {
        title = "😞 Критическая ошибка";
        color = "#ff6b6b";
        rating = "Клиент крайне недоволен, готов жаловаться!";
    }

    if (endingTitle) {
        endingTitle.textContent = title;
        endingTitle.style.color = color;
    }
    if (endingText) {
        endingText.innerHTML = `<strong>${scene.endingText}</strong><br><br><em>${rating}</em>`;
    }
    if (endingRelationship) {
        endingRelationship.textContent = `${gameState.score} баллов`;
    }

    setTimeout(() => {
        if (endingModal) endingModal.classList.add('active');
    }, 300);
}

// Переключение селектора сценариев
function toggleScenarioSelector() {
    if (scenarioSelector) {
        scenarioSelector.classList.toggle('active');
    }
}

// Обработчики кнопок
function initEventListeners() {
    if (restartBtn) {
        restartBtn.addEventListener('click', () => {
            initGame(gameState.currentScenario);
        });
    }

    if (scenarioBtn) {
        scenarioBtn.addEventListener('click', toggleScenarioSelector);
    }

    if (scenarioOptions) {
        scenarioOptions.forEach(option => {
            option.addEventListener('click', () => {
                const scenarioKey = option.dataset.scenario;
                initGame(scenarioKey);
            });
        });
    }

    if (endingRestartBtn) {
        endingRestartBtn.addEventListener('click', () => {
            initGame(gameState.currentScenario);
        });
    }

    if (endingScenarioBtn) {
        endingScenarioBtn.addEventListener('click', () => {
            if (endingModal) endingModal.classList.remove('active');
            toggleScenarioSelector();
        });
    }
}

// Инициализация при загрузке - вызываем сразу
function init() {
    initDOMElements();
    initEventListeners();
    initGame();
}

// Проверяем, готов ли DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

// Экспорт функции для внешнего вызова
window.initGame = initGame;
