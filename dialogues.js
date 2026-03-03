// SVG шаблоны персонажей
const characterSVGs = {
    male1: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg1" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#4a5568"/><stop offset="100%" style="stop-color:#2d3748"/></linearGradient></defs><rect width="200" height="280" fill="url(#bg1)" rx="15"/><ellipse cx="100" cy="240" rx="60" ry="35" fill="#2d3748"/><rect x="60" y="180" width="80" height="80" fill="#4a5568" rx="10"/><path d="M 60 180 L 100 220 L 140 180" fill="#e53e3e" opacity="0.8"/><rect x="70" y="190" width="60" height="70" fill="#e53e3e" rx="5"/><rect x="85" y="160" width="30" height="30" fill="#f6d5b7"/><ellipse cx="100" cy="130" rx="50" ry="55" fill="#f6d5b7"/><ellipse cx="100" cy="85" rx="52" ry="35" fill="#4a3728"/><rect x="48" y="70" width="15" height="50" fill="#4a3728" rx="5"/><rect x="137" y="70" width="15" height="50" fill="#4a3728" rx="5"/><ellipse cx="85" cy="125" rx="6" ry="5" fill="#2d3748"/><ellipse cx="115" cy="125" rx="6" ry="5" fill="#2d3748"/><ellipse cx="85" cy="123" rx="2" ry="2" fill="#fff"/><ellipse cx="115" cy="123" rx="2" ry="2" fill="#fff"/><path d="M 75 112 Q 85 108 95 112" stroke="#4a3728" stroke-width="3" fill="none"/><path d="M 105 112 Q 115 108 125 112" stroke="#4a3728" stroke-width="3" fill="none"/><path d="M 100 130 L 97 145 L 103 145 Z" fill="#e0b895"/><path d="M 90 155 Q 100 162 110 155" stroke="#c44569" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="52" cy="130" rx="8" ry="12" fill="#f6d5b7"/><ellipse cx="148" cy="130" rx="8" ry="12" fill="#f6d5b7"/></svg>`,
    male2: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg2" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#2c3e50"/><stop offset="100%" style="stop-color:#1a252f"/></linearGradient></defs><rect width="200" height="280" fill="url(#bg2)" rx="15"/><rect x="55" y="175" width="90" height="105" fill="#2c3e50" rx="10"/><rect x="70" y="185" width="60" height="95" fill="#34495e" rx="5"/><polygon points="100,190 92,220 100,280 108,220" fill="#e74c3c"/><rect x="75" y="185" width="50" height="40" fill="#ecf0f1"/><rect x="85" y="155" width="30" height="35" fill="#f5d0b0"/><ellipse cx="100" cy="125" rx="52" ry="58" fill="#f5d0b0"/><ellipse cx="100" cy="80" rx="54" ry="38" fill="#34495e"/><ellipse cx="100" cy="75" rx="40" ry="20" fill="#95a5a6"/><rect x="46" y="65" width="18" height="55" fill="#34495e" rx="7"/><rect x="136" y="65" width="18" height="55" fill="#34495e" rx="7"/><ellipse cx="83" cy="120" rx="7" ry="6" fill="#2c3e50"/><ellipse cx="117" cy="120" rx="7" ry="6" fill="#2c3e50"/><ellipse cx="83" cy="118" rx="2.5" ry="2.5" fill="#fff"/><ellipse cx="117" cy="118" rx="2.5" ry="2.5" fill="#fff"/><circle cx="83" cy="120" r="12" fill="none" stroke="#2c3e50" stroke-width="2"/><circle cx="117" cy="120" r="12" fill="none" stroke="#2c3e50" stroke-width="2"/><line x1="95" y1="120" x2="105" y2="120" stroke="#2c3e50" stroke-width="2"/><path d="M 73 107 Q 83 103 93 107" stroke="#34495e" stroke-width="3" fill="none"/><path d="M 107 107 Q 117 103 127 107" stroke="#34495e" stroke-width="3" fill="none"/><path d="M 100 125 L 96 142 L 104 142 Z" fill="#e0b895"/><path d="M 92 155 Q 100 158 108 155" stroke="#c44569" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="50" cy="125" rx="9" ry="14" fill="#f5d0b0"/><ellipse cx="150" cy="125" rx="9" ry="14" fill="#f5d0b0"/></svg>`,
    female1: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg3" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#e91e8c"/><stop offset="100%" style="stop-color:#c2185b"/></linearGradient></defs><rect width="200" height="280" fill="url(#bg3)" rx="15"/><ellipse cx="100" cy="250" rx="60" ry="35" fill="#c2185b"/><path d="M 70 190 L 100 260 L 130 190 Z" fill="#f06292"/><rect x="75" y="190" width="50" height="70" fill="#f48fb1" rx="5"/><rect x="88" y="160" width="24" height="30" fill="#ffe0bd"/><ellipse cx="100" cy="135" rx="42" ry="48" fill="#ffe0bd"/><ellipse cx="100" cy="80" rx="46" ry="30" fill="#ff6b9d"/><rect x="54" y="75" width="10" height="70" fill="#ff6b9d" rx="5"/><rect x="136" y="75" width="10" height="70" fill="#ff6b9d" rx="5"/><ellipse cx="85" cy="128" rx="5" ry="4" fill="#5d4037"/><ellipse cx="115" cy="128" rx="5" ry="4" fill="#5d4037"/><ellipse cx="85" cy="126" rx="2" ry="2" fill="#fff"/><ellipse cx="115" cy="126" rx="2" ry="2" fill="#fff"/><path d="M 78 120 Q 85 117 92 120" stroke="#ff6b9d" stroke-width="2" fill="none"/><path d="M 108 120 Q 115 117 122 120" stroke="#ff6b9d" stroke-width="2" fill="none"/><ellipse cx="75" cy="142" rx="5" ry="3" fill="#ffb6c1" opacity="0.5"/><ellipse cx="125" cy="142" rx="5" ry="3" fill="#ffb6c1" opacity="0.5"/><path d="M 100 135 L 98 145 L 102 145 Z" fill="#e8c4a8"/><path d="M 93 155 Q 100 160 107 155" fill="#e57373"/><ellipse cx="55" cy="135" rx="5" ry="9" fill="#ffe0bd"/><ellipse cx="145" cy="135" rx="5" ry="9" fill="#ffe0bd"/><circle cx="55" cy="148" r="3" fill="#f1c40f"/><circle cx="145" cy="148" r="3" fill="#f1c40f"/></svg>`,
    angry: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg4" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#c0392b"/><stop offset="100%" style="stop-color:#922b21"/></linearGradient></defs><rect width="200" height="280" fill="url(#bg4)" rx="15"/><rect x="58" y="178" width="84" height="90" fill="#2c3e50" rx="10"/><rect x="72" y="188" width="56" height="80" fill="#34495e" rx="5"/><rect x="86" y="158" width="28" height="30" fill="#e8c4a8"/><ellipse cx="100" cy="128" rx="50" ry="54" fill="#e8c4a8"/><ellipse cx="100" cy="83" rx="52" ry="36" fill="#1a1a1a"/><rect x="48" y="68" width="14" height="55" fill="#1a1a1a" rx="5"/><rect x="138" y="68" width="14" height="55" fill="#1a1a1a" rx="5"/><path d="M 75 108 L 95 115" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/><path d="M 125 108 L 105 115" stroke="#1a1a1a" stroke-width="4" stroke-linecap="round"/><ellipse cx="83" cy="122" rx="8" ry="6" fill="#fff"/><ellipse cx="117" cy="122" rx="8" ry="6" fill="#fff"/><ellipse cx="83" cy="122" rx="3" ry="5" fill="#1a1a1a"/><ellipse cx="117" cy="122" rx="3" ry="5" fill="#1a1a1a"/><path d="M 85 105 Q 90 100 95 105" stroke="#c0392b" stroke-width="2" fill="none"/><path d="M 105 105 Q 110 100 115 105" stroke="#c0392b" stroke-width="2" fill="none"/><path d="M 100 127 L 95 143 L 105 143 Z" fill="#d4a574"/><path d="M 90 160 Q 100 152 110 160" stroke="#c0392b" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="52" cy="128" rx="8" ry="13" fill="#e8c4a8"/><ellipse cx="148" cy="128" rx="8" ry="13" fill="#e8c4a8"/></svg>`,
    mage: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg5" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#8e44ad"/><stop offset="100%" style="stop-color:#4a235a"/></linearGradient><linearGradient id="robe" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#9b59b6"/><stop offset="100%" style="stop-color:#6c3483"/></linearGradient></defs><rect width="200" height="280" fill="url(#bg5)" rx="15"/><circle cx="30" cy="40" r="2" fill="#fff" opacity="0.6"/><circle cx="170" cy="50" r="2" fill="#fff" opacity="0.6"/><ellipse cx="100" cy="250" rx="65" ry="30" fill="#4a235a"/><path d="M 50 180 L 100 280 L 150 180 Z" fill="url(#robe)"/><path d="M 55 180 L 100 260 L 145 180 Z" fill="#7d3c98"/><polygon points="70,200 72,205 77,205 73,208 75,213 70,210 65,213 67,208 63,205 68,205" fill="#f1c40f"/><polygon points="130,220 132,225 137,225 133,228 135,233 130,230 125,233 127,228 123,225 128,225" fill="#f1c40f"/><rect x="88" y="155" width="24" height="30" fill="#f5cba7"/><ellipse cx="100" cy="128" rx="46" ry="50" fill="#f5cba7"/><polygon points="100,20 60,90 140,90" fill="#4a235a"/><ellipse cx="100" cy="90" rx="55" ry="12" fill="#6c3483"/><rect x="55" y="85" width="90" height="15" fill="#6c3483"/><ellipse cx="100" cy="165" rx="35" ry="40" fill="#ecf0f1"/><ellipse cx="100" cy="85" rx="48" ry="30" fill="#ecf0f1"/><ellipse cx="85" cy="118" rx="5" ry="4" fill="#5d4037"/><ellipse cx="115" cy="118" rx="5" ry="4" fill="#5d4037"/><ellipse cx="85" cy="116" rx="2" ry="2" fill="#fff"/><ellipse cx="115" cy="116" rx="2" ry="2" fill="#fff"/><path d="M 75 108 Q 85 105 95 108" stroke="#ecf0f1" stroke-width="3" fill="none"/><path d="M 105 108 Q 115 105 125 108" stroke="#ecf0f1" stroke-width="3" fill="none"/><path d="M 100 123 L 96 140 L 104 140 Z" fill="#e0b895"/><path d="M 90 152 Q 100 158 110 152" stroke="#c44569" stroke-width="2.5" fill="none" stroke-linecap="round"/><ellipse cx="56" cy="128" rx="7" ry="11" fill="#f5cba7"/><ellipse cx="144" cy="128" rx="7" ry="11" fill="#f5cba7"/></svg>`,
    detective: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bg6" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#34495e"/><stop offset="100%" style="stop-color:#1a252f"/></linearGradient></defs><rect width="200" height="280" fill="url(#bg6)" rx="15"/><rect x="52" y="175" width="96" height="105" fill="#2c3e50" rx="10"/><rect x="65" y="185" width="70" height="95" fill="#34495e" rx="5"/><polygon points="65,185 85,210 85,185" fill="#2c3e50"/><polygon points="135,185 115,210 115,185" fill="#2c3e50"/><polygon points="100,195 93,225 100,280 107,225" fill="#8b0000"/><rect x="75" y="190" width="50" height="35" fill="#d5dbdb"/><rect x="87" y="158" width="26" height="32" fill="#f0c8a8"/><ellipse cx="100" cy="125" rx="48" ry="52" fill="#f0c8a8"/><rect x="60" y="55" width="80" height="12" fill="#1a1a1a"/><rect x="50" y="67" width="100" height="8" fill="#2c3e50"/><rect x="55" y="40" width="90" height="25" fill="#1a1a1a" rx="3"/><ellipse cx="100" cy="82" rx="45" ry="30" fill="#4a3728"/><rect x="52" y="70" width="12" height="45" fill="#4a3728" rx="4"/><rect x="136" y="70" width="12" height="45" fill="#4a3728" rx="4"/><ellipse cx="83" cy="120" rx="6" ry="5" fill="#3e2723"/><ellipse cx="117" cy="120" rx="6" ry="5" fill="#3e2723"/><ellipse cx="83" cy="118" rx="2" ry="2" fill="#fff"/><ellipse cx="117" cy="118" rx="2" ry="2" fill="#fff"/><path d="M 75 110 Q 83 107 93 110" stroke="#4a3728" stroke-width="3" fill="none"/><path d="M 107 110 Q 117 107 125 110" stroke="#4a3728" stroke-width="3" fill="none"/><path d="M 100 125 L 96 142 L 104 142 Z" fill="#e0b084"/><line x1="93" y1="155" x2="107" y2="155" stroke="#8b4513" stroke-width="2.5" stroke-linecap="round"/><ellipse cx="54" cy="125" rx="8" ry="12" fill="#f0c8a8"/><ellipse cx="146" cy="125" rx="8" ry="12" fill="#f0c8a8"/></svg>`,
    playerMale: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bgPlayer" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#3498db"/><stop offset="100%" style="stop-color:#2980b9"/></linearGradient></defs><rect width="200" height="280" fill="url(#bgPlayer)" rx="15"/><ellipse cx="100" cy="245" rx="58" ry="32" fill="#2980b9"/><rect x="62" y="182" width="76" height="80" fill="#3498db" rx="10"/><rect x="72" y="192" width="56" height="70" fill="#27ae60" rx="5"/><rect x="87" y="160" width="26" height="28" fill="#f5d0a8"/><ellipse cx="100" cy="130" rx="48" ry="52" fill="#f5d0a8"/><ellipse cx="100" cy="85" rx="50" ry="34" fill="#2c1810"/><rect x="50" y="72" width="14" height="50" fill="#2c1810" rx="5"/><rect x="136" y="72" width="14" height="50" fill="#2c1810" rx="5"/><ellipse cx="83" cy="123" rx="6" ry="5" fill="#1a1a1a"/><ellipse cx="117" cy="123" rx="6" ry="5" fill="#1a1a1a"/><ellipse cx="83" cy="121" rx="2.5" ry="2.5" fill="#fff"/><ellipse cx="117" cy="121" rx="2.5" ry="2.5" fill="#fff"/><path d="M 75 113 Q 83 110 93 113" stroke="#2c1810" stroke-width="3" fill="none"/><path d="M 107 113 Q 117 110 125 113" stroke="#2c1810" stroke-width="3" fill="none"/><path d="M 100 128 L 97 143 L 103 143 Z" fill="#e0b890"/><path d="M 92 155 Q 100 162 108 155" stroke="#c44569" stroke-width="3" fill="none" stroke-linecap="round"/><ellipse cx="54" cy="130" rx="8" ry="12" fill="#f5d0a8"/><ellipse cx="146" cy="130" rx="8" ry="12" fill="#f5d0a8"/></svg>`,
    playerFemale: `<svg viewBox="0 0 200 280" xmlns="http://www.w3.org/2000/svg"><defs><linearGradient id="bgPlayerF" x1="0%" y1="0%" x2="0%" y2="100%"><stop offset="0%" style="stop-color:#e91e8c"/><stop offset="100%" style="stop-color:#c2185b"/></linearGradient></defs><rect width="200" height="280" fill="url(#bgPlayerF)" rx="15"/><ellipse cx="100" cy="245" rx="55" ry="32" fill="#c2185b"/><rect x="65" y="185" width="70" height="75" fill="#e91e8c" rx="10"/><rect x="75" y="195" width="50" height="65" fill="#f06292" rx="5"/><rect x="88" y="162" width="24" height="28" fill="#f5d5c0"/><ellipse cx="100" cy="132" rx="46" ry="50" fill="#f5d5c0"/><ellipse cx="100" cy="85" rx="48" ry="33" fill="#ffd700"/><rect x="52" y="75" width="14" height="70" fill="#ffd700" rx="5"/><rect x="134" y="75" width="14" height="70" fill="#ffd700" rx="5"/><ellipse cx="100" cy="165" rx="32" ry="22" fill="#ffd700"/><ellipse cx="83" cy="125" rx="6" ry="5" fill="#5d4037"/><ellipse cx="117" cy="125" rx="6" ry="5" fill="#5d4037"/><ellipse cx="83" cy="123" rx="2.5" ry="2.5" fill="#fff"/><ellipse cx="117" cy="123" rx="2.5" ry="2.5" fill="#fff"/><path d="M 75 117 Q 83 113 91 117" stroke="#5d4037" stroke-width="2" fill="none"/><path d="M 109 117 Q 117 113 125 117" stroke="#5d4037" stroke-width="2" fill="none"/><ellipse cx="73" cy="138" rx="7" ry="4" fill="#ffb6c1" opacity="0.5"/><ellipse cx="127" cy="138" rx="7" ry="4" fill="#ffb6c1" opacity="0.5"/><path d="M 100 130 L 97 143 L 103 143 Z" fill="#e8c4a8"/><path d="M 92 155 Q 100 162 108 155" fill="#e57373"/><ellipse cx="55" cy="132" rx="7" ry="10" fill="#f5d5c0"/><ellipse cx="145" cy="132" rx="7" ry="10" fill="#f5d5c0"/></svg>`
};

// Сценарии с большим количеством сцен и вариантов
const scenarios = {
    friendly: {
        name: "Дружеская беседа",
        npcName: "Алексей",
        npcAvatar: "male1",
        playerAvatar: "playerMale",
        startScene: 1,
        scenes: {
            1: { text: "Привет! Ого, какая неожиданная встреча! Давно не виделись. Как твои дела?", speaker: "npc", choices: [
                { text: "Отлично! Сам как? Давно хотел увидеться!", nextScene: 2, relationshipChange: 10 },
                { text: "Нормально, потихоньку... Работа, дом, рутина", nextScene: 3, relationshipChange: 0 },
                { text: "Не очень честно говоря... Были трудности", nextScene: 4, relationshipChange: 5 },
                { text: "Привет! Рад тебя видеть! Кофе выпьем?", nextScene: 5, relationshipChange: 8 }
            ]},
            2: { text: "Вот это здорово! Знаешь, я тут недавно подумал — мы слишком редко видимся. Может, встретимся на выходных?", speaker: "npc", choices: [
                { text: "Конечно! Давай в субботу днём!", nextScene: 6, relationshipChange: 15 },
                { text: "Звучит заманчиво, но мне нужно проверить график", nextScene: 7, relationshipChange: -5 },
                { text: "Не знаю, я сейчас не очень хочу выходить...", nextScene: 8, relationshipChange: -10 },
                { text: "А давай прямо сегодня вечером!", nextScene: 9, relationshipChange: 12 }
            ]},
            3: { text: "Понимаю, у всех бывает такая полоса. Главное — не унывай! Если что-то нужно — обращайся.", speaker: "npc", choices: [
                { text: "Спасибо, Алексей! Ты настоящий друг!", nextScene: 6, relationshipChange: 10 },
                { text: "Ладно, спасибо. Мне пора, давай созвонимся", nextScene: 10, relationshipChange: 0 },
                { text: "Знаешь, а ведь правда... Мне нужна поддержка", nextScene: 11, relationshipChange: 8 },
                { text: "Спасибо. А как ты сам? Как семья?", nextScene: 12, relationshipChange: 5 }
            ]},
            4: { text: "Мне очень жаль слышать... Хочешь рассказать, что случилось? Я готов выслушать.", speaker: "npc", choices: [
                { text: "Спасибо, но давай в другой раз...", nextScene: 7, relationshipChange: -5 },
                { text: "Спасибо, просто устал очень. Работа, дедлайны...", nextScene: 6, relationshipChange: 10 },
                { text: "Если честно, у меня проблемы на работе...", nextScene: 13, relationshipChange: 7 },
                { text: "Ты знаешь, я сейчас в депрессии...", nextScene: 14, relationshipChange: 6 }
            ]},
            5: { text: "С удовольствием! Там новый бариста — готовит потрясающий раф. И десерты обновили!", speaker: "npc", choices: [
                { text: "Звучит отлично! Когда встретимся?", nextScene: 9, relationshipChange: 10 },
                { text: "О, раф — моя слабость! Давай сегодня в семь?", nextScene: 9, relationshipChange: 12 },
                { text: "Круто! А помнишь, как мы раньше там сидели?", nextScene: 15, relationshipChange: 8 },
                { text: "Супер! Я сегодня без планов. Во сколько?", nextScene: 9, relationshipChange: 10 }
            ]},
            6: { text: "Знаешь, я искренне рад, что у нас есть такая дружба. Обязательно созвонимся! Береги себя!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Ваша дружба стала ещё крепче." },
            7: { text: "Понимаю... У всех бывают периоды. Если передумаешь — звони.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Общение осталось на прежнем уровне." },
            8: { text: "Жаль... Но я уважаю твоё решение. Береги себя!", speaker: "npc", isEnding: true, endingType: "bad", endingText: "Не самая лучшая концовка. Друг немного обиделся." },
            9: { text: "Отлично! Я забронировал столик у окна. И возьму фотографии с нашей поездки!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Встреча состоялась! Вы прекрасно провели вечер." },
            10: { text: "Всегда пожалуйста! Мы же друзья! Хорошего дня!", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Разговор прошёл спокойно." },
            11: { text: "Конечно, звони в любое время! У меня свободный вечер. Мы всё обсудим!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Хорошая концовка! Алексей поддержал вас." },
            12: { text: "У меня всё хорошо! Жена передавала привет! Может, на следующей неделе заглянете к нам?", speaker: "npc", choices: [
                { text: "С удовольствием! Обязательно зайду", nextScene: 6, relationshipChange: 10 },
                { text: "Обязательно! Давно не видел вашу семью", nextScene: 9, relationshipChange: 8 },
                { text: "Спасибо за приглашение! Я подумаю", nextScene: 10, relationshipChange: 0 }
            ]},
            13: { text: "Понимаю, это неприятно... Мой совет — поговори с ним начистоту. Или подумай о смене работы.", speaker: "npc", choices: [
                { text: "Спасибо за совет! Ты прав", nextScene: 6, relationshipChange: 8 },
                { text: "Думаю, ты прав... Может, стоит поискать новое", nextScene: 6, relationshipChange: 6 },
                { text: "Легко сказать... А если не найду лучше?", nextScene: 14, relationshipChange: 3 }
            ]},
            14: { text: "Послушай, я понимаю, что тяжело. Но поверь — всё наладится. Если нужно, помогу с резюме.", speaker: "npc", choices: [
                { text: "Спасибо... Ты настоящий друг", nextScene: 6, relationshipChange: 12 },
                { text: "Да, помоги с резюме. Я ценю", nextScene: 6, relationshipChange: 10 },
                { text: "Спасибо, но я пока сам разберусь", nextScene: 7, relationshipChange: -3 }
            ]},
            15: { text: "Как не помнить! Мы тогда до закрытия сидели! Ха-ха! Давай встретимся сегодня?", speaker: "npc", choices: [
                { text: "Давай! Я тоже скучаю", nextScene: 9, relationshipChange: 10 },
                { text: "Ты прав! Сегодня в семь?", nextScene: 9, relationshipChange: 8 },
                { text: "Ага, было здорово... Но сегодня не смогу", nextScene: 7, relationshipChange: -2 }
            ]}
        }
    },
    business: {
        name: "Деловые переговоры",
        npcName: "Г-н Петров",
        npcAvatar: "male2",
        playerAvatar: "playerMale",
        startScene: 1,
        scenes: {
            1: { text: "Добрый день! Я представляю компанию «Вектор». Заинтересованы в нашем предложении?", speaker: "npc", choices: [
                { text: "Да, безусловно! Расскажите подробнее", nextScene: 2, relationshipChange: 5 },
                { text: "Я слушаю, но времени мало. К сути", nextScene: 3, relationshipChange: -5 },
                { text: "Не особо... Но убедите меня", nextScene: 4, relationshipChange: 0 },
                { text: "Здравствуйте! Изучил материалы. Есть вопросы", nextScene: 5, relationshipChange: 3 }
            ]},
            2: { text: "Отлично! Мы предлагаем: интеграция, обучение, поддержка 24/7, гарантия за 3 месяца. Обсудим?", speaker: "npc", choices: [
                { text: "Да, давайте. Меня интересуют оплата и сроки", nextScene: 6, relationshipChange: 10 },
                { text: "Нужны конкретные цифры и расчёты ROI", nextScene: 7, relationshipChange: 0 },
                { text: "Мне нужно подумать и проконсультироваться", nextScene: 8, relationshipChange: -5 },
                { text: "А какие цены по сравнению с конкурентами?", nextScene: 9, relationshipChange: 2 }
            ]},
            3: { text: "Понимаю. Кратко: лучшие условия на рынке. Клиенты экономят 40% расходов в квартал. Вот кейсы.", speaker: "npc", choices: [
                { text: "Интересно. Продолжайте, хочу детали", nextScene: 6, relationshipChange: 10 },
                { text: "Спасибо. Изучу и свяжусь", nextScene: 10, relationshipChange: -10 },
                { text: "40% — впечатляет. Есть клиенты в отрасли?", nextScene: 11, relationshipChange: 5 },
                { text: "Хорошо, но нужны гарантии", nextScene: 12, relationshipChange: 0 }
            ]},
            4: { text: "Вызов принят! Преимущества: качество, сроки 2-4 недели, поддержка 24/7. Убедил?", speaker: "npc", choices: [
                { text: "Впечатляет! Обсудим контракт", nextScene: 6, relationshipChange: 15 },
                { text: "Нужны гарантии. Что если не совпадёт?", nextScene: 12, relationshipChange: 5 },
                { text: "Подумаю. Нужно сравнить", nextScene: 8, relationshipChange: -5 },
                { text: "Можно демо перед решением?", nextScene: 13, relationshipChange: 3 }
            ]},
            5: { text: "Прекрасно! Работаем 8 лет, 200+ проектов. Что интересует?", speaker: "npc", choices: [
                { text: "Сроки и стоимость", nextScene: 9, relationshipChange: 5 },
                { text: "Расскажите о поддержке", nextScene: 14, relationshipChange: 3 },
                { text: "Какие гарантии?", nextScene: 12, relationshipChange: 4 },
                { text: "Можно интегрировать с текущим ПО?", nextScene: 15, relationshipChange: 2 }
            ]},
            6: { text: "Прекрасно! Чувствую — начало партнёрства! Команда готова. Встретимся на неделе?", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Контракт подписан!" },
            7: { text: "Конечно! Инвестиции 500к, окупаемость 4-6 месяцев. Вот документы.", speaker: "npc", choices: [
                { text: "Цифры убедительны. Обсудим контракт", nextScene: 6, relationshipChange: 8 },
                { text: "Нужно время. Вернусь на неделе", nextScene: 8, relationshipChange: -3 },
                { text: "Есть рассрочка?", nextScene: 16, relationshipChange: 2 }
            ]},
            8: { text: "Понимаю. Вот визитка. Буду ждать до конца недели.", speaker: "npc", isEnding: true, endingType: "bad", endingText: "Не самая лучшая концовка. Клиент сомневается." },
            9: { text: "Цены: базовый 300к, расширенный 500к. На 15-20% ниже конкурентов.", speaker: "npc", choices: [
                { text: "Адекватно. Обсудим контракт", nextScene: 6, relationshipChange: 8 },
                { text: "Скидка при оплате за год?", nextScene: 16, relationshipChange: 3 },
                { text: "Нужно сравнить. Я свяжусь", nextScene: 8, relationshipChange: -5 }
            ]},
            10: { text: "Хорошо. Если решите — звоните. Успехов!", speaker: "npc", isEnding: true, endingType: "bad", endingText: "Неудачная концовка. Сделка сорвалась." },
            11: { text: "Да! Работали с «ТехноСтрой», «АльфаЛогистик». Могу организовать встречу.", speaker: "npc", choices: [
                { text: "Убедительно! Обсудим детали", nextScene: 6, relationshipChange: 10 },
                { text: "Цифры говорят. Готов подписать", nextScene: 6, relationshipChange: 8 },
                { text: "Нужно подумать", nextScene: 8, relationshipChange: -3 }
            ]},
            12: { text: "Конечно! В договоре — возврат при невыполнении KPI. Плюс бесплатный сервис год.", speaker: "npc", choices: [
                { text: "Отлично! Всё устраивает", nextScene: 6, relationshipChange: 10 },
                { text: "Добавим расширенную поддержку?", nextScene: 17, relationshipChange: 3 },
                { text: "Нужно подумать", nextScene: 8, relationshipChange: -5 }
            ]},
            13: { text: "Разумеется! Демо бесплатно. Могу на этой неделе. Когда удобно?", speaker: "npc", choices: [
                { text: "Завтра в 14:00. Подходит", nextScene: 18, relationshipChange: 8 },
                { text: "На этой неделе не смогу", nextScene: 8, relationshipChange: -3 },
                { text: "Можно запись демо?", nextScene: 19, relationshipChange: 2 }
            ]},
            14: { text: "Поддержка 24/7. Реакция 15 минут. 98% проблем решаем за час.", speaker: "npc", choices: [
                { text: "Впечатляет! Всё устраивает", nextScene: 6, relationshipChange: 8 },
                { text: "Есть персональный менеджер?", nextScene: 20, relationshipChange: 3 },
                { text: "Нужно обсудить с командой", nextScene: 8, relationshipChange: -3 }
            ]},
            15: { text: "Да! Совместимы с 1С, SAP, Oracle. Если специфика — напишем модуль.", speaker: "npc", choices: [
                { text: "У нас 1С. Рад, что есть интеграция", nextScene: 6, relationshipChange: 5 },
                { text: "Самописная система. Сможете?", nextScene: 21, relationshipChange: 2 },
                { text: "Хорошо. Нужно подумать", nextScene: 8, relationshipChange: -3 }
            ]},
            16: { text: "За год — скидка 20%. Рассрочка 6 месяцев — 10%. Есть лизинг.", speaker: "npc", choices: [
                { text: "20% — отлично! Плачу за год", nextScene: 6, relationshipChange: 10 },
                { text: "Рассрочка подойдёт. Оформляем?", nextScene: 6, relationshipChange: 7 },
                { text: "Нужно посоветоваться", nextScene: 8, relationshipChange: -3 }
            ]},
            17: { text: "Без проблем! Расширенная поддержка: менеджер, приоритет, отчёты. +10% к цене.", speaker: "npc", choices: [
                { text: "Да! Подписываем", nextScene: 6, relationshipChange: 8 },
                { text: "Дорого. Давайте без", nextScene: 6, relationshipChange: 3 },
                { text: "Подумаю", nextScene: 8, relationshipChange: -5 }
            ]},
            18: { text: "Отлично! Завтра 14:00 — записал. Пришлю ссылку и доступы!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Хорошая концовка! Демо назначено." },
            19: { text: "Конечно! Вот запись и доступы к тесту на 14 дней.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Клиент получил демо." },
            20: { text: "Да, каждому назначаем менеджера. Бесплатно.", speaker: "npc", choices: [
                { text: "Да! Начинаем", nextScene: 6, relationshipChange: 8 },
                { text: "Можно и в выходные?", nextScene: 17, relationshipChange: 2 },
                { text: "Нужно подумать", nextScene: 8, relationshipChange: -3 }
            ]},
            21: { text: "Не проблема. Проанализируем, напишем модуль. 1-2 недели.", speaker: "npc", choices: [
                { text: "Да! Начинаем!", nextScene: 6, relationshipChange: 8 },
                { text: "Сначала аудит системы?", nextScene: 22, relationshipChange: 3 },
                { text: "Обсужу с IT", nextScene: 8, relationshipChange: -3 }
            ]},
            22: { text: "Конечно! Бесплатный аудит. Специалист приедет. Когда удобно?", speaker: "npc", isEnding: true, endingType: "good", endingText: "Хорошая концовка! Аудит назначен." }
        }
    },
    romantic: {
        name: "Романтическое знакомство",
        npcName: "Мария",
        npcAvatar: "female1",
        playerAvatar: "playerFemale",
        startScene: 1,
        scenes: {
            1: { text: "Привет! Извини... Я заметила тебя здесь раньше. Я Мария.", speaker: "npc", choices: [
                { text: "Привет, Мария! Да, нравится тут. А тебя?", nextScene: 2, relationshipChange: 10 },
                { text: "Привет! Первый раз здесь", nextScene: 3, relationshipChange: 5 },
                { text: "Здравствуй. Иногда захожу. А что?", nextScene: 4, relationshipChange: 0 },
                { text: "Привет! Приятно познакомиться!", nextScene: 5, relationshipChange: 8 }
            ]},
            2: { text: "Мне тоже нравится! Может, кофе вместе?", speaker: "npc", choices: [
                { text: "С удовольствием! Что заказываешь?", nextScene: 6, relationshipChange: 15 },
                { text: "Заманчиво, но я спешу...", nextScene: 7, relationshipChange: -10 },
                { text: "Не знаю... Не в настроении", nextScene: 8, relationshipChange: -5 },
                { text: "С радостью! Ещё десертом угощу!", nextScene: 9, relationshipChange: 12 }
            ]},
            3: { text: "Тогда повезло! Я покажу лучшие места. Хочешь экскурсию?", speaker: "npc", choices: [
                { text: "Буду рад! Покажи", nextScene: 6, relationshipChange: 15 },
                { text: "Спасибо, но я сам разберусь", nextScene: 7, relationshipChange: -10 },
                { text: "Интересно! А что любишь делать?", nextScene: 10, relationshipChange: 8 },
                { text: "Экскурсия — здорово! А потом кофе?", nextScene: 9, relationshipChange: 10 }
            ]},
            4: { text: "Просто интересно... Чем занимаешься? Есть хобби?", speaker: "npc", choices: [
                { text: "Работаю в IT, люблю читать. А ты?", nextScene: 6, relationshipChange: 10 },
                { text: "Да так... Работа, дом", nextScene: 8, relationshipChange: -5 },
                { text: "Я музыкант, играю в группе", nextScene: 11, relationshipChange: 8 },
                { text: "Люблю спорт. А ты?", nextScene: 12, relationshipChange: 5 }
            ]},
            5: { text: "Приятно! Я редко сама подхожу. Может, посидим, пообщаемся?", speaker: "npc", choices: [
                { text: "Я тоже рад! С удовольствием", nextScene: 6, relationshipChange: 10 },
                { text: "Это комплимент? Давай кофе", nextScene: 9, relationshipChange: 8 },
                { text: "Редко? Значит, я особенный? 😊", nextScene: 13, relationshipChange: 12 },
                { text: "Я польщён! Расскажи о себе", nextScene: 10, relationshipChange: 6 }
            ]},
            6: { text: "Знаешь, мне было приятно! Давай обменяемся контактами?", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Начало отношений! Мария дала номер." },
            7: { text: "Жаль... Но понимаю. Удачи!", speaker: "npc", isEnding: true, endingType: "bad", endingText: "Неудачная концовка. Момент упущен." },
            8: { text: "Понимаю... Рада была познакомиться!", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка." },
            9: { text: "О, ты ещё и щедрый! Тогда не откажусь!", speaker: "npc", choices: [
                { text: "Я тоже так думаю! Давай номерами?", nextScene: 6, relationshipChange: 12 },
                { text: "С удовольствием! Куда сходим?", nextScene: 14, relationshipChange: 10 },
                { text: "Ты нравишься. Может, в кино?", nextScene: 15, relationshipChange: 15 },
                { text: "Конечно! Что ещё любишь?", nextScene: 10, relationshipChange: 8 }
            ]},
            10: { text: "Я дизайнер. Читаю, хожу на выставки. Мечтаю о Японии. А ты?", speaker: "npc", choices: [
                { text: "Дизайнер — круто! Давай на выставку?", nextScene: 6, relationshipChange: 10 },
                { text: "Япония — моя мечта! Вместе спланируем?", nextScene: 16, relationshipChange: 12 },
                { text: "Ты разносторонняя! Давай продолжим?", nextScene: 6, relationshipChange: 8 },
                { text: "Здорово! А музыку какую слушаешь?", nextScene: 17, relationshipChange: 5 }
            ]},
            11: { text: "О, музыкант! На чём играешь? Где выступаете?", speaker: "npc", choices: [
                { text: "На гитаре. В баре по пятницам. Приходи!", nextScene: 6, relationshipChange: 12 },
                { text: "Клавиши. Скажу, когда концерт", nextScene: 6, relationshipChange: 10 },
                { text: "Любишь живую музыку? Сходим?", nextScene: 15, relationshipChange: 8 }
            ]},
            12: { text: "Я? Люблю йогу, прогулки. Ценю искренность и юмор.", speaker: "npc", choices: [
                { text: "Йога — серьёзно! Научишь? 😊", nextScene: 18, relationshipChange: 10 },
                { text: "Прогулки — отлично! Знаешь места?", nextScene: 19, relationshipChange: 8 },
                { text: "Юмор — важно! Давай встретимся?", nextScene: 6, relationshipChange: 10 }
            ]},
            13: { text: "Может и особенный... 😊 Что тебя вдохновляет?", speaker: "npc", choices: [
                { text: "Меня вдохновляют такие моменты", nextScene: 6, relationshipChange: 12 },
                { text: "Счастье — любимое дело и люди", nextScene: 6, relationshipChange: 10 },
                { text: "А ты что скажешь?", nextScene: 10, relationshipChange: 6 }
            ]},
            14: { text: "Есть места, которые хочу посетить. Выставка или набережная. Что нравится?", speaker: "npc", choices: [
                { text: "Выставка — отлично! Когда?", nextScene: 6, relationshipChange: 10 },
                { text: "Прогулка — романтично. В выходные?", nextScene: 6, relationshipChange: 12 },
                { text: "Давай сюрприз! Ты выбирай", nextScene: 6, relationshipChange: 8 }
            ]},
            15: { text: "В кино? С удовольствием! Нолан новый или комедию?", speaker: "npc", choices: [
                { text: "Нолан — отлично! В выходные?", nextScene: 6, relationshipChange: 10 },
                { text: "Давай романтическое! Комедию", nextScene: 6, relationshipChange: 8 },
                { text: "Давай вместе выберем?", nextScene: 6, relationshipChange: 6 }
            ]},
            16: { text: "Правда? Ты бы поехал? Мечтаю увидеть сакуру...", speaker: "npc", choices: [
                { text: "Мечты сбываются! Планируем", nextScene: 6, relationshipChange: 15 },
                { text: "С тобой — обязательно!", nextScene: 6, relationshipChange: 12 },
                { text: "Сначала познакомимся, потом — Японию!", nextScene: 6, relationshipChange: 8 }
            ]},
            17: { text: "Люблю разную — от инди до джаза. Ещё пою немного. Секрет! 😊", speaker: "npc", choices: [
                { text: "Секрет в безопасности! Споёшь?", nextScene: 6, relationshipChange: 10 },
                { text: "Джаз — прекрасно! Знаю клуб. Сходим?", nextScene: 6, relationshipChange: 12 },
                { text: "Талантливая! Давай контактами?", nextScene: 6, relationshipChange: 8 }
            ]},
            18: { text: "С удовольствием! Йога — не только физика. Но я требовательный учитель!", speaker: "npc", choices: [
                { text: "Готов к испытаниям! Когда?", nextScene: 6, relationshipChange: 10 },
                { text: "Требовательный — интересно", nextScene: 6, relationshipChange: 8 },
                { text: "А после йоги чай? 😊", nextScene: 6, relationshipChange: 12 }
            ]},
            19: { text: "Есть любимые места. Парк у реки. Место с лучшим видом. Показать?", speaker: "npc", choices: [
                { text: "Хочу! Покажи", nextScene: 6, relationshipChange: 10 },
                { text: "Лучший вид — с тобой 😊", nextScene: 6, relationshipChange: 15 },
                { text: "Давай в выходные?", nextScene: 6, relationshipChange: 8 }
            ]}
        }
    },
    conflict: {
        name: "Разрешение конфликта",
        npcName: "Оппонент",
        npcAvatar: "angry",
        playerAvatar: "playerMale",
        startScene: 1,
        scenes: {
            1: { text: "Мне нужно поговорить. Меня не устраивает ситуация! Ты понимаешь, к чему это привело?", speaker: "npc", choices: [
                { text: "Хорошо, я слышу. Давай спокойно", nextScene: 2, relationshipChange: 10 },
                { text: "Опять начинаешь... Хватит!", nextScene: 3, relationshipChange: -10 },
                { text: "Я не виноват! Не собираюсь выслушивать!", nextScene: 4, relationshipChange: -15 },
                { text: "Понимаю. Давай разберёмся", nextScene: 5, relationshipChange: 8 }
            ]},
            2: { text: "Хорошо, ценю. Проблема в сроках. Но я готов искать решение.", speaker: "npc", choices: [
                { text: "Понимаю. Давай вместе найдём", nextScene: 6, relationshipChange: 15 },
                { text: "Понимаю, но не только моя вина", nextScene: 7, relationshipChange: -5 },
                { text: "Нужно время подумать", nextScene: 8, relationshipChange: 0 },
                { text: "Признаю, я ошибся. Извини", nextScene: 6, relationshipChange: 12 }
            ]},
            3: { text: "Я всегда так?! Ты всегда так! Мне надоело!", speaker: "npc", choices: [
                { text: "Извини, не хотел. Давай обсудим", nextScene: 6, relationshipChange: 10 },
                { text: "Сам виноват! Не надо так!", nextScene: 9, relationshipChange: -20 },
                { text: "Ты прав, извини. Начнём сначала", nextScene: 6, relationshipChange: 8 },
                { text: "Хватит кричать! Говори нормально", nextScene: 10, relationshipChange: -5 }
            ]},
            4: { text: "Оправдываться будешь! Факты налицо — сроки сорваны!", speaker: "npc", choices: [
                { text: "Хорошо... Я ошибся. Извини", nextScene: 6, relationshipChange: 15 },
                { text: "Докажи! Где факты?", nextScene: 9, relationshipChange: -20 },
                { text: "Понимаю гнев. Но давай решать", nextScene: 11, relationshipChange: 5 },
                { text: "Ущерб? Ты преувеличиваешь!", nextScene: 9, relationshipChange: -15 }
            ]},
            5: { text: "Наконец-то нормально! Ситуация серьёзная. Клиенты ждут. Ты готов?", speaker: "npc", choices: [
                { text: "Да, готов! Работаем", nextScene: 6, relationshipChange: 12 },
                { text: "Готов, но нужна поддержка", nextScene: 12, relationshipChange: 8 },
                { text: "Что сделать? Давай план", nextScene: 13, relationshipChange: 6 },
                { text: "Конечно! Сделаю всё", nextScene: 6, relationshipChange: 10 }
            ]},
            6: { text: "Спасибо за понимание. Вместе найдём выход.", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Конфликт исчерпан!" },
            7: { text: "Поиск виноватых не поможет. Нужно решение.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Диалог налажен." },
            8: { text: "Хорошо, подумай. Но не затягивай. Буду ждать до завтра.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Пауза." },
            9: { text: "Всё! Не хочу разговаривать! Разговор окончен!", speaker: "npc", isEnding: true, endingType: "bad", endingText: "Плохая концовка. Отношения испорчены." },
            10: { text: "Ты мне будешь указывать?! Ладно... Что предлагаешь?", speaker: "npc", choices: [
                { text: "Составим план. По шагам", nextScene: 13, relationshipChange: 8 },
                { text: "Каждый скажет, что не устраивает", nextScene: 14, relationshipChange: 5 },
                { text: "Забудем прошлое. С чистого листа", nextScene: 6, relationshipChange: 10 }
            ]},
            11: { text: "Решение? Хорошо: вместе работаем, я помогаю, ты координируешь. Но последний шанс.", speaker: "npc", choices: [
                { text: "Понял! Не подведу", nextScene: 6, relationshipChange: 12 },
                { text: "Последний? Это ультиматум... Но согласен", nextScene: 6, relationshipChange: 5 },
                { text: "А какие ресурсы?", nextScene: 12, relationshipChange: 3 }
            ]},
            12: { text: "Поддержка? Могу выделить человека, инструменты. Справишься?", speaker: "npc", choices: [
                { text: "Справлюсь! Спасибо", nextScene: 6, relationshipChange: 10 },
                { text: "Нужно больше времени. Неделя", nextScene: 15, relationshipChange: 3 },
                { text: "А если не справлюсь?", nextScene: 8, relationshipChange: -5 }
            ]},
            13: { text: "План? Сегодня исправляешь, завтра тестируем, послезавтра сдаём. Согласен?", speaker: "npc", choices: [
                { text: "Согласен! Приступаю", nextScene: 6, relationshipChange: 10 },
                { text: "Нереально. Нужно 4 дня", nextScene: 15, relationshipChange: -3 },
                { text: "Кто будет тестировать?", nextScene: 12, relationshipChange: 2 }
            ]},
            14: { text: "Честно? Меня бесит, что не держишь слово. А тебя?", speaker: "npc", choices: [
                { text: "Меня бесит давление", nextScene: 16, relationshipChange: 5 },
                { text: "Признаю ошибки. Но я человек", nextScene: 6, relationshipChange: 8 },
                { text: "Бесит, что не ценишь", nextScene: 17, relationshipChange: -3 }
            ]},
            15: { text: "Неделя? Много... Но ладно. Даю неделю. Но если снова сорвёшь — конец.", speaker: "npc", choices: [
                { text: "Понял! Не сорву", nextScene: 6, relationshipChange: 8 },
                { text: "Давление не помогает. Но сделаю", nextScene: 7, relationshipChange: -3 },
                { text: "А поддержка? Ты обещал", nextScene: 12, relationshipChange: 2 }
            ]},
            16: { text: "Давление? Поддержка? Может, прав... Извини. Переживаю. Давай по-новому?", speaker: "npc", choices: [
                { text: "Давай! Я тоже извиняюсь", nextScene: 6, relationshipChange: 12 },
                { text: "По-новому — это как? Обсудим", nextScene: 18, relationshipChange: 5 },
                { text: "Извинения приняты. Работаем!", nextScene: 6, relationshipChange: 8 }
            ]},
            17: { text: "Не ценю? Я требовательный! Потому что можешь лучше! Но... извини.", speaker: "npc", choices: [
                { text: "Приняты. Я тоже извиняюсь", nextScene: 6, relationshipChange: 10 },
                { text: "Спасибо. Важно слышать", nextScene: 6, relationshipChange: 8 },
                { text: "Ладно... Работаем", nextScene: 7, relationshipChange: 3 }
            ]},
            18: { text: "Правила? Я не давлю, ты коммуницируешь. Я поддерживаю, ты держишь сроки. Подходит?", speaker: "npc", choices: [
                { text: "Подходит! Договорились", nextScene: 6, relationshipChange: 10 },
                { text: "Добавь встречи. Раз в неделю", nextScene: 19, relationshipChange: 3 },
                { text: "Разумно. Попробуем", nextScene: 6, relationshipChange: 6 }
            ]},
            19: { text: "Встречи? Да. По пятницам, 15:00? Договорились?", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Новые правила работы." }
        }
    },
    fantasy: {
        name: "Фэнтези приключение",
        npcName: "Эльфийский маг",
        npcAvatar: "mage",
        playerAvatar: "playerMale",
        startScene: 1,
        scenes: {
            1: { text: "Приветствую, путник! Чувствую в тебе силу. Я Элдарион, хранитель Башни Ветров. Что привело?", speaker: "npc", choices: [
                { text: "Ищу Кристалл Времени! Говорят, он силён", nextScene: 2, relationshipChange: 10 },
                { text: "Просто прохожу. Я путешественник", nextScene: 3, relationshipChange: 0 },
                { text: "Есть предложения? Я открыт!", nextScene: 4, relationshipChange: 5 },
                { text: "Мудрый маг, я ищу знания", nextScene: 5, relationshipChange: 8 }
            ]},
            2: { text: "Кристалл Времени? Он в Забытых Пещерах. Я помогу. Но путь опасен: ловушки, существа. Готов?", speaker: "npc", choices: [
                { text: "Не боюсь! Ведём к Кристаллу!", nextScene: 6, relationshipChange: 15 },
                { text: "Расскажи о рисках", nextScene: 7, relationshipChange: 5 },
                { text: "Опасно... Есть другой путь?", nextScene: 8, relationshipChange: 0 },
                { text: "А что ещё получу?", nextScene: 9, relationshipChange: 3 }
            ]},
            3: { text: "Понимаю... Если передумаешь — я в Башне Ветров. Благословляю путь!", speaker: "npc", choices: [
                { text: "Спасибо! Запомню", nextScene: 10, relationshipChange: 5 },
                { text: "До встречи, Элдарион!", nextScene: 11, relationshipChange: 0 },
                { text: "Подожди... А что за приключения?", nextScene: 4, relationshipChange: 3 },
                { text: "Башня Ветров? Где это?", nextScene: 12, relationshipChange: 2 }
            ]},
            4: { text: "Да! Судьба свела не случайно. Есть квест на меч Драконьего Пламени. Награду поделим!", speaker: "npc", choices: [
                { text: "Я в деле! Когда выходим?", nextScene: 6, relationshipChange: 15 },
                { text: "Интересно. А награда?", nextScene: 9, relationshipChange: 0 },
                { text: "Драконье Пламя? Расскажи", nextScene: 13, relationshipChange: 5 },
                { text: "Почему ты сам не отправился?", nextScene: 14, relationshipChange: 3 }
            ]},
            5: { text: "Знания, говоришь? Хм... Я владею заклинаниями, картой сокровищ, пророчествами. Что интересует?", speaker: "npc", choices: [
                { text: "Пророчества! Что ждёт мир?", nextScene: 15, relationshipChange: 8 },
                { text: "Заклинания! Научи!", nextScene: 16, relationshipChange: 10 },
                { text: "Карта сокровищ! Где?", nextScene: 17, relationshipChange: 5 },
                { text: "Всё! Я готов стать учеником", nextScene: 18, relationshipChange: 12 }
            ]},
            6: { text: "Ты герой! Вместе свернём горы! К рассвету — в путь!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Вы стали союзниками!" },
            7: { text: "Детали — в пути. Готовься: провизия, оружие, зелья. У Башни.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Приключение начинается." },
            8: { text: "Другого пути нет... Но не могу заставить. Если решишься — знаешь, где найти.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Вы расстались друзьями." },
            9: { text: "Награда? Золота — по 1000 монет. Магические предметы. Плюс благодарность Короля.", speaker: "npc", choices: [
                { text: "Устраивает! Когда выступаем?", nextScene: 6, relationshipChange: 10 },
                { text: "1000 монет? Меньше, чем ожидал...", nextScene: 6, relationshipChange: 3 },
                { text: "Можно часть вперёд?", nextScene: 19, relationshipChange: -3 },
                { text: "Благодарность Короля? Интересно...", nextScene: 6, relationshipChange: 5 }
            ]},
            10: { text: "Благословляю путь! Пусть звёзды освещают!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Хорошая концовка. Маг запомнит вас." },
            11: { text: "Прощай! Удачи! Мир полон чудес!", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Пути разошлись." },
            12: { text: "Башня? Вон там, за горизонтом. Ищи с синими огнями. Заходи!", speaker: "npc", choices: [
                { text: "Спасибо! Обязательно!", nextScene: 10, relationshipChange: 5 },
                { text: "Синие огни? Запомню", nextScene: 11, relationshipChange: 2 },
                { text: "А далеко? Сколько идти?", nextScene: 20, relationshipChange: 1 }
            ]},
            13: { text: "Легенды гласят: меч выкован из сердца дракона. Первый король им объединил королевства. Потом исчез.", speaker: "npc", choices: [
                { text: "Буду первым! Это судьба!", nextScene: 6, relationshipChange: 10 },
                { text: "Эпично! Но почему я?", nextScene: 14, relationshipChange: 3 },
                { text: "А есть подсказки?", nextScene: 21, relationshipChange: 5 }
            ]},
            14: { text: "Почему ты? Вижу потенциал. Судьба привела. Нужен союзник с чистым сердцем.", speaker: "npc", choices: [
                { text: "Польщён! Не подведу!", nextScene: 6, relationshipChange: 10 },
                { text: "Чистое сердце? Я не святой...", nextScene: 22, relationshipChange: 3 },
                { text: "Хорошо. Принимаю вызов", nextScene: 6, relationshipChange: 8 }
            ]},
            15: { text: "Будущее? Вижу тёмные времена. Но также надежду — героя. Может, это ты?", speaker: "npc", choices: [
                { text: "Буду героем! Укажи путь!", nextScene: 6, relationshipChange: 12 },
                { text: "Можно ли избежать?", nextScene: 23, relationshipChange: 5 },
                { text: "Что нужно сделать?", nextScene: 24, relationshipChange: 8 }
            ]},
            16: { text: "Магия? Готов к испытаниям? Обучение займёт годы. Вот свиток. Выучи.", speaker: "npc", choices: [
                { text: "Выучу! Готов!", nextScene: 18, relationshipChange: 10 },
                { text: "Годы? Долго... Но терпелив", nextScene: 18, relationshipChange: 5 },
                { text: "Есть способ быстрее?", nextScene: 25, relationshipChange: -3 }
            ]},
            17: { text: "Сокровища? В Долине Теней, под охраной стража. Нужна храбрость и мудрость.", speaker: "npc", choices: [
                { text: "Найду путь! Укажи!", nextScene: 6, relationshipChange: 8 },
                { text: "А что за страж?", nextScene: 26, relationshipChange: 3 },
                { text: "Мудрость? Научи!", nextScene: 18, relationshipChange: 5 }
            ]},
            18: { text: "Ученик? Принимаю! С этого дня ты — мой ученик. Следуй за мной!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Вы стали учеником мага!" },
            19: { text: "Вперёд? Хм... Ладно. 200 монет сейчас, остальное после. Идёт?", speaker: "npc", choices: [
                { text: "Идёт! Спасибо!", nextScene: 6, relationshipChange: 5 },
                { text: "Маловато... ����о ладно", nextScene: 6, relationshipChange: 2 },
                { text: "Нет, нужно больше", nextScene: 8, relationshipChange: -5 }
            ]},
            20: { text: "Далеко... Дня три пути. Но есть порталы. Могу открыть, если нужно.", speaker: "npc", choices: [
                { text: "Портал? Отлично! Открой!", nextScene: 10, relationshipChange: 5 },
                { text: "Нет, я пешком. Спасибо", nextScene: 11, relationshipChange: 2 },
                { text: "А портал безопасен?", nextScene: 27, relationshipChange: 1 }
            ]},
            21: { text: "Подсказки? Ищи знак дракона на входе. И помни — только чистый сердцем пройдёт.", speaker: "npc", choices: [
                { text: "Понял! Спасибо!", nextScene: 6, relationshipChange: 5 },
                { text: "Чистый сердцем? Я постараюсь", nextScene: 6, relationshipChange: 3 },
                { text: "А если не пройду?", nextScene: 8, relationshipChange: -3 }
            ]},
            22: { text: "Не святой? Никто не идеален. Но сердце видно. Я верю в тебя.", speaker: "npc", choices: [
                { text: "Спасибо за веру! Не подведу", nextScene: 6, relationshipChange: 8 },
                { text: "Постараюсь оправдать", nextScene: 6, relationshipChange: 5 },
                { text: "Надеюсь, ты прав", nextScene: 8, relationshipChange: -3 }
            ]},
            23: { text: "Избежать? Может... Если герой восстанет раньше времени. Но это сложно.", speaker: "npc", choices: [
                { text: "Я стану героем! Научи!", nextScene: 6, relationshipChange: 10 },
                { text: "Сложно — не значит невозможно", nextScene: 6, relationshipChange: 7 },
                { text: "Нужно подумать", nextScene: 8, relationshipChange: -3 }
            ]},
            24: { text: "Что нужно? Пройти три испытания: храбрости, мудрости, сердца. Готов?", speaker: "npc", choices: [
                { text: "Готов! Начинаем!", nextScene: 6, relationshipChange: 10 },
                { text: "А что за испытания?", nextScene: 28, relationshipChange: 3 },
                { text: "Нужно подготовиться", nextScene: 8, relationshipChange: -3 }
            ]},
            25: { text: "Быстрее? Есть путь... Но опасный. Можно потерять душу. Не советую.", speaker: "npc", choices: [
                { text: "Я рискну! Покажи путь", nextScene: 29, relationshipChange: -5 },
                { text: "Потерять душу? Нет, спасибо", nextScene: 18, relationshipChange: 5 },
                { text: "Тогда буду учиться долго", nextScene: 18, relationshipChange: 3 }
            ]},
            26: { text: "Страж? Древний голем. Спит веками. Но проснётся, если потревожить.", speaker: "npc", choices: [
                { text: "Голем? Я справлюсь!", nextScene: 6, relationshipChange: 5 },
                { text: "А как его обойти?", nextScene: 30, relationshipChange: 2 },
                { text: "Может, договориться?", nextScene: 31, relationshipChange: 3 }
            ]},
            27: { text: "Безопасен? Почти... 90% выживают. Но есть риск. Решай.", speaker: "npc", choices: [
                { text: "90% — неплохо! Открой", nextScene: 10, relationshipChange: 3 },
                { text: "Нет, я не рискну", nextScene: 11, relationshipChange: 1 },
                { text: "А куда ведёт?", nextScene: 32, relationshipChange: 1 }
            ]},
            28: { text: "Испытания? Храбрости — победить страх. Мудрости — разгадать загадку. Сердца — сделать выбор.", speaker: "npc", choices: [
                { text: "Звучит сложно... Но я готов", nextScene: 6, relationshipChange: 8 },
                { text: "А если не пройду?", nextScene: 8, relationshipChange: -3 },
                { text: "Начнём с первого!", nextScene: 6, relationshipChange: 5 }
            ]},
            29: { text: "Рискнул? Хм... Есть тёмный ритуал. Но ты не вернёшься прежним. Точно хочешь?", speaker: "npc", choices: [
                { text: "Точно! Делай!", nextScene: 33, relationshipChange: -10 },
                { text: "Не вернусь? Стоп... Нет", nextScene: 18, relationshipChange: 5 },
                { text: "Какой выбор...", nextScene: 34, relationshipChange: -5 }
            ]},
            30: { text: "Обойти? Можно заклинанием невидимости. Но нужно 3 компонента. Соберёшь?", speaker: "npc", choices: [
                { text: "Соберу! Что нужно?", nextScene: 35, relationshipChange: 5 },
                { text: "А где их взять?", nextScene: 36, relationshipChange: 2 },
                { text: "Долго... Лучше сразиться", nextScene: 6, relationshipChange: 3 }
            ]},
            31: { text: "Договориться? Голем не говорит. Но можно отвлечь. Есть идея?", speaker: "npc", choices: [
                { text: "Отвлечь? Как?", nextScene: 37, relationshipChange: 3 },
                { text: "Дай мне артефакт", nextScene: 38, relationshipChange: 2 },
                { text: "Ладно, сражение так сражение", nextScene: 6, relationshipChange: 3 }
            ]},
            32: { text: "Куда? В разные места. Один — к сокровищам. Другой — к опасности. Третий — домой.", speaker: "npc", choices: [
                { text: "К сокровищам! Открой!", nextScene: 17, relationshipChange: 5 },
                { text: "К опасности? Нет, спасибо", nextScene: 11, relationshipChange: 1 },
                { text: "Домой? Я ещё не готов", nextScene: 8, relationshipChange: -3 }
            ]},
            33: { text: "Делай? Хм... Ты смел. Или глуп. Ладно. Начинаю ритуал!", speaker: "npc", isEnding: true, endingType: "bad", endingText: "Плохая концовка! Вы получили силу, но потеряли душу..." },
            34: { text: "Выбор? Подумай. Сила не стоит души. Возвращайся, когда решишь.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Вы ушли размышлять." },
            35: { text: "Нужно: слеза феи, перо грифона, корень мандрагоры. Собирай!", speaker: "npc", choices: [
                { text: "Где искать фею?", nextScene: 39, relationshipChange: 3 },
                { text: "А грифон где?", nextScene: 40, relationshipChange: 2 },
                { text: "Мандрагора растёт в лесу?", nextScene: 41, relationshipChange: 2 }
            ]},
            36: { text: "Где? Слезa феи — у озера. Перо — в горах. Корень — в лесу. Удачи!", speaker: "npc", choices: [
                { text: "Начну с озера!", nextScene: 39, relationshipChange: 3 },
                { text: "Пойду в горы!", nextScene: 40, relationshipChange: 2 },
                { text: "В лес так в лес", nextScene: 41, relationshipChange: 2 }
            ]},
            37: { text: "Как? Шумом! Голем реагирует на звук. Брось камень — он пойдёт.", speaker: "npc", choices: [
                { text: "Хитро! Попробую", nextScene: 6, relationshipChange: 5 },
                { text: "А если не сработает?", nextScene: 6, relationshipChange: 2 },
                { text: "Есть другие идеи?", nextScene: 38, relationshipChange: 1 }
            ]},
            38: { text: "Артефакт? Вот, зеркало иллюзий. Покажет голему ложный путь. Бери!", speaker: "npc", choices: [
                { text: "Спасибо! Использую", nextScene: 6, relationshipChange: 5 },
                { text: "А как работает?", nextScene: 6, relationshipChange: 2 },
                { text: "Надеюсь, сработает", nextScene: 6, relationshipChange: 3 }
            ]},
            39: { text: "Фея? У озера Лунного Света. Но она не плачет просто так. Нужно заслужить.", speaker: "npc", choices: [
                { text: "Как заслужить?", nextScene: 42, relationshipChange: 3 },
                { text: "Пойду к озеру!", nextScene: 42, relationshipChange: 2 },
                { text: "А если не получится?", nextScene: 8, relationshipChange: -3 }
            ]},
            40: { text: "Грифон? В Грозовых Горах. Опасное место. Но перо того стоит.", speaker: "npc", choices: [
                { text: "Опасное? Я справлюсь!", nextScene: 43, relationshipChange: 5 },
                { text: "А как найти?", nextScene: 43, relationshipChange: 2 },
                { text: "Может, другое место?", nextScene: 8, relationshipChange: -3 }
            ]},
            41: { text: "Мандрагора? В Тёмном Лесу. Кричит, когда выкапывают. Береги уши!", speaker: "npc", choices: [
                { text: "Кричит? Возьму затычки", nextScene: 44, relationshipChange: 3 },
                { text: "Где вход в лес?", nextScene: 44, relationshipChange: 2 },
                { text: "Звучит жутко...", nextScene: 8, relationshipChange: -3 }
            ]},
            42: { text: "Заслужить? Помоги ей — найди потерянную сестру. Тогда заплачет от радости.", speaker: "npc", choices: [
                { text: "Где сестра?", nextScene: 45, relationshipChange: 3 },
                { text: "Помогу! Где искать?", nextScene: 45, relationshipChange: 5 },
                { text: "Это долго...", nextScene: 8, relationshipChange: -3 }
            ]},
            43: { text: "Грифон на вершине. Но летает. Нужно приманить. Мясо есть?", speaker: "npc", choices: [
                { text: "Есть провизия!", nextScene: 46, relationshipChange: 3 },
                { text: "Куплю по дороге", nextScene: 46, relationshipChange: 2 },
                { text: "Нет... Найду другое", nextScene: 8, relationshipChange: -3 }
            ]},
            44: { text: "Затычки? Мудро. Лес вон там. Иди и вернись целым!", speaker: "npc", choices: [
                { text: "Вернусь! С корнем!", nextScene: 47, relationshipChange: 5 },
                { text: "А сколько идти?", nextScene: 47, relationshipChange: 2 },
                { text: "Пожелай удачи", nextScene: 47, relationshipChange: 3 }
            ]},
            45: { text: "Сестра? В Пещере Эха. Заблудилась. Голосом мани, она откликнется.", speaker: "npc", choices: [
                { text: "Пойду! Буду звать", nextScene: 48, relationshipChange: 5 },
                { text: "А далеко пещера?", nextScene: 48, relationshipChange: 2 },
                { text: "А если не откликнется?", nextScene: 8, relationshipChange: -3 }
            ]},
            46: { text: "Провизия? Отлично. Брось мясо — грифон спустится. Тогда бери перо.", speaker: "npc", choices: [
                { text: "Понял! Действую", nextScene: 49, relationshipChange: 5 },
                { text: "А не нападёт?", nextScene: 49, relationshipChange: 2 },
                { text: "Надеюсь, сработает", nextScene: 49, relationshipChange: 3 }
            ]},
            47: { text: "Лес близко. Час пути. Удачи! И затычки не забудь!", speaker: "npc", choices: [
                { text: "Помню! Иду", nextScene: 50, relationshipChange: 3 },
                { text: "Вернусь скоро!", nextScene: 50, relationshipChange: 2 },
                { text: "Пожелай удачи", nextScene: 50, relationshipChange: 3 }
            ]},
            48: { text: "Пещера? В полудне пути. Иди! И пой — сестра услышит.", speaker: "npc", choices: [
                { text: "Пойду! Буду петь", nextScene: 51, relationshipChange: 5 },
                { text: "А что петь?", nextScene: 51, relationshipChange: 2 },
                { text: "Надеюсь, найдётся", nextScene: 51, relationshipChange: 3 }
            ]},
            49: { text: "Не нападёт? Если мясо свежее — нет. Грифоны благородны.", speaker: "npc", choices: [
                { text: "Свежее! Бросаю", nextScene: 52, relationshipChange: 3 },
                { text: "Беру перо", nextScene: 52, relationshipChange: 5 },
                { text: "Улетаю скорее", nextScene: 52, relationshipChange: 2 }
            ]},
            50: { text: "Лес ждёт! Иди! Мандрагора сама не выкопается!", speaker: "npc", choices: [
                { text: "Иду! С затычками", nextScene: 53, relationshipChange: 3 },
                { text: "Вернусь с корнем!", nextScene: 53, relationshipChange: 5 },
                { text: "Надеюсь, выживу", nextScene: 53, relationshipChange: 2 }
            ]},
            51: { text: "Петь? Любую песню. Главное — от сердца. Она почувствует.", speaker: "npc", choices: [
                { text: "Спою старую песню", nextScene: 54, relationshipChange: 5 },
                { text: "Надеюсь, услышит", nextScene: 54, relationshipChange: 2 },
                { text: "Иду в пещеру", nextScene: 54, relationshipChange: 3 }
            ]},
            52: { text: "Перо есть? Отлично! Одно осталось. Грифон улетел. Живой!", speaker: "npc", choices: [
                { text: "Ура! Одно есть!", nextScene: 55, relationshipChange: 5 },
                { text: "Два осталось!", nextScene: 55, relationshipChange: 3 },
                { text: "Пойду дальше", nextScene: 55, relationshipChange: 2 }
            ]},
            53: { text: "Выкопал? Молодец! Корень в руке. Два осталось!", speaker: "npc", choices: [
                { text: "Да! Живой!", nextScene: 55, relationshipChange: 5 },
                { text: "Уши целы!", nextScene: 55, relationshipChange: 3 },
                { text: "Два осталось!", nextScene: 55, relationshipChange: 2 }
            ]},
            54: { text: "Сестра нашлась? Она плакала от радости. Слезa в сосуде. Есть!", speaker: "npc", choices: [
                { text: "Есть! Одно есть!", nextScene: 55, relationshipChange: 5 },
                { text: "Фея благодарна!", nextScene: 55, relationshipChange: 3 },
                { text: "Два осталось!", nextScene: 55, relationshipChange: 2 }
            ]},
            55: { text: "Всё собрал? Отлично! Зелье невидимости готово. Иди к голему!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Отличная концовка! Вы собрали компоненты и стали невидимы!" }
        }
    },
    detective: {
        name: "Детективная история",
        npcName: "Инспектор",
        npcAvatar: "detective",
        playerAvatar: "playerMale",
        startScene: 1,
        scenes: {
            1: { text: "Добрый вечер. Вы свидетель по делу о краже. Можете ответить на вопросы?", speaker: "npc", choices: [
                { text: "Конечно, я готов помочь", nextScene: 2, relationshipChange: 10 },
                { text: "Это займёт много времени?", nextScene: 3, relationshipChange: -5 },
                { text: "А что именно произошло?", nextScene: 4, relationshipChange: 0 },
                { text: "Краже? Это серьёзно! Спрашивайте", nextScene: 2, relationshipChange: 5 }
            ]},
            2: { text: "Благодарю. Где вы были вчера вечером около 22:00?", speaker: "npc", choices: [
                { text: "Дома, один. Никто не подтвердит", nextScene: 5, relationshipChange: 0 },
                { text: "В ресторане с друзьями. Могу назвать имена", nextScene: 6, relationshipChange: 5 },
                { text: "Гулял в парке недалеко от галереи", nextScene: 7, relationshipChange: -5 },
                { text: "На работе. Был один в офисе", nextScene: 5, relationshipChange: -3 }
            ]},
            3: { text: "Недолго, несколько вопросов. Это важно для расследования.", speaker: "npc", choices: [
                { text: "Хорошо, спрашивайте", nextScene: 2, relationshipChange: 5 },
                { text: "Ладно, но я спешу", nextScene: 2, relationshipChange: -5 },
                { text: "Быстрее, пожалуйста", nextScene: 2, relationshipChange: 0 }
            ]},
            4: { text: "Из галереи украдена картина известного художника. Стоимость — несколько миллионов.", speaker: "npc", choices: [
                { text: "Ого! Я готов помочь! Спрашивайте", nextScene: 2, relationshipChange: 10 },
                { text: "Надеюсь, вы найдёте преступника", nextScene: 2, relationshipChange: 0 },
                { text: "Это ужасно! Чем я могу помочь?", nextScene: 2, relationshipChange: 5 }
            ]},
            5: { text: "Понятно. Алиби нет. У нас есть ещё свидетели. Спасибо за сотрудничество.", speaker: "npc", isEnding: true, endingType: "neutral", endingText: "Нейтральная концовка. Дело продолжается." },
            6: { text: "Отлично! Можете назвать имена? Мы проверим алиби. Вы очень помогаете!", speaker: "npc", isEnding: true, endingType: "good", endingText: "Хорошая концовка. Вы полезный свидетель!" },
            7: { text: "В парке? Интересно... Там видели подозрительного человека. Вы не заметили кого-то?", speaker: "npc", isEnding: true, endingType: "bad", endingText: "Плохая концовка. Вы под подозрением." }
        }
    }
};
