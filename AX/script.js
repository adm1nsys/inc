// script.js
const chatBox = document.getElementById('chat-box');
const userInput = document.getElementById('user-input');
let chatstart = false;


const phrases = [
    "How can I help you?",
      "How can I help you?",
      "Is there anything I can help with?",
      "How can I help today?",
      "What is your question?"
];

function getRandomPhrase() {
    const randomIndex = Math.floor(Math.random() * phrases.length);
    return phrases[randomIndex];
}

document.getElementById('user-input').addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        event.preventDefault(); // Предотвращаем переход на новую строку или другие действия по умолчанию
        sendMessage()
    }
});

    const serchingt = document.createElement('div');
    const W = document.createElement('div');


// Пример использования функции
const randomPhrase = getRandomPhrase();
document.getElementById('ailt1').textContent = randomPhrase;

  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  const circle1 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
  const circle2 = document.createElementNS('http://www.w3.org/2000/svg', 'circle');

// Добавляем функцию для поиска в Википедии
function searchWikipedia(query) {
    const url = `https://en.wikipedia.org/w/api.php?action=query&list=search&srsearch=${encodeURIComponent(query)}&utf8=&format=json&origin=*`;

    // Обертка запроса в новый Promise для управления задержкой
    return new Promise((resolve, reject) => {
// circle2.style.strokeWidth = "53";

        setTimeout(() => { // Задержка для имитации процесса загрузки
            fetch(url)
                .then(response => response.json())
                .then(data => {

                    if (data.query.search.length > 0) {
                            serchingt.textContent = 'Compleate';
                            W.style.scale = "0";

        setTimeout(() => {
                        const pageId = data.query.search[0].pageid;
                        const title = data.query.search[0].title;
                        const snippet = data.query.search[0].snippet.replace(/<\/?span[^>]*>/g, '');
                        const fullUrl = `https://en.wikipedia.org/?curid=${pageId}`;
                        hideLoadingIndicator()
                        resolve(`Here's what I found on Wikipedia when searching "${query}": ${title} - ${snippet}... ${fullUrl}`);
        }, 500);


                    } else {
                                                    serchingt.textContent = 'Error';

        setTimeout(() => {
                        hideLoadingIndicator()
                        resolve("Could not find information on Wikipedia for this query.");
        }, 500);

                    }

                })
                .catch(error => {
                    console.error('Error when querying Wikipedia:', error);
                    reject("An error occurred while querying Wikipedia.");
                });
        }, 5000);
    });
}







function showLoadingIndicator() {
    const loadingIndicator = document.createElement('div');
    loadingIndicator.id = 'loading-indicator';
loadingIndicator.style.transition = "0.5s";
    loadingIndicator.style.display = "table";
    loadingIndicator.style.color = "white";
    // loadingIndicator.style.width = "100%";
    loadingIndicator.style.marginLeft = "20px";
    loadingIndicator.style.padding = "10px";
    loadingIndicator.style.height = "50px";
    loadingIndicator.style.background = "rgba(50,50,50,0.5)";
    loadingIndicator.style.borderRadius = "10px";
    document.getElementById("chat-box").appendChild(loadingIndicator);
    const container = document.createElement('div');
    container.className = 'container';
        container.style.display = "flex";
    container.style.flexDiraction = "row";
    container.style.justifyContent = "center";
container.style.justifyItems = "center";
container.style.alignContent = "center";
container.style.alignItems = "center";
    const card = document.createElement('div');
    card.className = 'card';
    container.appendChild(card);
    circle1.setAttribute('cx', '20');
    circle1.setAttribute('cy', '20');
    circle1.setAttribute('r', '20');
    svg.appendChild(circle1);
    circle2.setAttribute('cx', '20');
    circle2.setAttribute('cy', '20');
    circle2.setAttribute('r', '20');
    svg.appendChild(circle2);
    card.appendChild(svg);
    W.className = 'W';
    W.textContent = 'W';
    card.appendChild(W);
    serchingt.textContent = 'Searching...';
    serchingt.style.paddingLeft = "10px";
    serchingt.style.color = 'white';
    container.appendChild(serchingt);
    circle2.style.transition = "1s";
    const circumference = 2 * Math.PI * 70;
    circle2.style.strokeDasharray = `${circumference} ${circumference}`;
    circle2.style.strokeDashoffset = `${circumference}`;
    function setProgress(percent) {
    const offset = circumference - (percent / 100) * circumference;
    circle2.style.strokeDashoffset = offset;
    }
    let progress = 0;
    const intervalId = setInterval(() => {
    if (progress >= 100) {
    clearInterval(intervalId);
    setTimeout(() => {
    circle2.style.strokeWidth = "53";
    }, 500);
    } else {
    setProgress(progress);
    progress += 1;
    }
    }, 10);
    document.getElementById('loading-indicator').appendChild(container);
}

function hideLoadingIndicator() {
    const loadingIndicator = document.getElementById('loading-indicator');
    if (loadingIndicator) {
loadingIndicator.style.scale = "0";
    setTimeout(() => {
        loadingIndicator.remove();
circle2.style.strokeWidth = "5";
    setTimeout(() => {
loadingIndicator.style.scale = "1";

    }, 500);

    }, 500);




    }
}




// Модифицируем функцию getResponse
function getRandomResponse(responses) {
    const randomIndex = Math.floor(Math.random() * responses.length);
    return responses[randomIndex];
}

function getResponse(input) {
    input = input.toLowerCase();
    let foundResponse = null;

    // Поиск ответа в базе данных
    for (let key in faq) {
        const category = faq[key];

        // Проверка на совпадение в основных категориях
        const isMatchInPrimary = category.queries.some(question => {
            const words = question.toLowerCase().split(" ");
            return words.every(word => input.includes(word));
        });

        if (isMatchInPrimary) {
            foundResponse = getRandomResponse(category.responses);
            break; // Прерываем цикл, если найден ответ
        } else {
            // Поиск в подкатегориях, если они есть
            if (category.details) {
                for (let detailKey in category.details) {
                    const detail = category.details[detailKey];
                    const isMatchInDetails = detail.queries.some(question => {
                        const words = question.toLowerCase().split(" ");
                        return words.every(word => input.includes(word));
                    });

                    if (isMatchInDetails) {
                        foundResponse = getRandomResponse(detail.responses);
                        break; // Прерываем внутренний цикл, если найден ответ
                    }
                }
            }
        }

        if (foundResponse) break; // Прерываем внешний цикл, если найден ответ
    }

    // Возвращаем найденный ответ или выполняем поиск в Википедии, если ответ не найден
    if (foundResponse) {
        return Promise.resolve(foundResponse);
    } else {
        showLoadingIndicator();
        return searchWikipedia(input).then(response => {
            hideLoadingIndicator();
            return response;
        });
    }
}







function addMessageToChat(sender, message) {
    let messageContainer = document.createElement('div');
    messageContainer.classList.add('message', sender === 'user' ? 'user-message' : 'bot-message');



    let avatar = document.createElement('div');
    avatar.classList.add('avatar', sender === 'user' ? 'user-avatar' : 'bot-avatar');
    messageContainer.appendChild(avatar);

    let text = document.createElement('p');
    text.classList.add('text');
    text.id = "textmessage";
    text.style.opacity = 0;
    messageContainer.appendChild(text);
            let timestamp = document.createElement('div');
    timestamp.classList.add('timestamp');
    timestamp.style.color = "white";
    timestamp.style.width = "100%";
    timestamp.style.textAlign = "center";
    timestamp.style.marginTop = "10px";
    timestamp.style.marginBottom = "10px";
    timestamp.textContent = new Date().toLocaleTimeString(); // Форматирование времени
    document.getElementById("chat-box").appendChild(timestamp);


    chatBox.appendChild(messageContainer);

    if (sender === 'user') {
        // Для сообщений пользователя - плавное появление
        text.textContent = message;
        let opacity = 0;
        const interval = setInterval(() => {
            opacity += 0.1;
            text.style.opacity = opacity;
            if (opacity >= 1) clearInterval(interval);
        }, 50);
    } else {
        // Для сообщений бота - анимация "печатания"
        let charIndex = 0;
        const interval = setInterval(() => {
            if (charIndex < message.length) {
                text.textContent += message[charIndex++];
                text.style.opacity = 1; // Полная видимость каждого символа
            } else {
                clearInterval(interval);
            }
        }, 50); // Скорость "печатания" сообщения
    }

}

// Модифицируем функцию sendMessage
function sendMessage() {
    const message = userInput.value.trim();
    if (message === ""){
return;
}else{
                if(chatstart === false){
        chatstart = true;
        document.getElementById('aititle').style.display = "none";

    }
}

    addMessageToChat('user', message);
    userInput.value = "";

    getResponse(message.toLowerCase()).then(response => {
        setTimeout(() => {
            addMessageToChat('bot', response);
        }, 1000);
    });
}
