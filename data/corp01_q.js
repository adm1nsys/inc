//universal scripts
var corporateQuestionsData = [
    {
        question_en: "Who is behind the operations of Admin Inc.?",
        answer_en: "Admin Inc. is powered by a solo developer who brings a wealth of expertise and passion to every project. As a one-person team, I ensure a personalized and dedicated approach to each task.",
        question_ua: "Хто стоїть за операціями Admin Inc.?",
        answer_ua: "Admin Inc. керується одним розробником, який вносить великий досвід та пристрасть до кожного проекту. Як одноосібна команда, я гарантую персоналізований та відданий підхід до кожного завдання.",
        // Add additional languages here
    },
    // Additional question sets...
];

function getLocalizedQuestionAnswer(data, key) {
    var languageCode = detectLanguage(); // Detects the language
    var localizedKey = key + "_" + languageCode; // Constructs the key for localized text
    return data[localizedKey]; // Returns the localized text
}

function displayQuestionsData() {
    var questionsList = document.getElementById('questions');

    corporateQuestionsData.forEach(function(data) {
        var questionContainer = document.createElement('div');
        questionContainer.className = 'questions';
        questionContainer.innerHTML = `
            <div class="q_t ac02">
                <div class="q_t0 pad">${getLocalizedQuestionAnswer(data, 'question')}</div>
            </div>
            <div class="q_t1">
                <div class="h2 ac05 pad" style="margin:0;">${getLocalizedQuestionAnswer(data, 'answer')}</div>
            </div>
        `;

        questionsList.appendChild(questionContainer);
    });
}


// Call the function to display data
