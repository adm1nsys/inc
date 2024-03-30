//universal scripts
var corporateQuestionsData = [
    {
        question_en: "Who is behind the operations of Admin Inc.?",
        answer_en: "Admin Inc. is powered by a solo developer who brings a wealth of expertise and passion to every project. As a one-person team, I ensure a personalized and dedicated approach to each task.",
        question_ua: "Хто стоїть за операціями Admin Inc.?",
        answer_ua: "Admin Inc. керується одним розробником, який вносить великий досвід та пристрасть до кожного проекту. Як одноосібна команда, я гарантую персоналізований та відданий підхід до кожного завдання.",
        question_de: "Wer steht hinter den Operationen von Admin Inc.?",
        answer_de: "Admin Inc. wird von einem einzelnen Entwickler angetrieben, der jede Menge Erfahrung und Leidenschaft in jedes Projekt bringt. Als Ein-Personen-Team stelle ich einen persönlichen und engagierten Ansatz für jede Aufgabe sicher.",
        question_pl: "Kto stoi za operacjami Admin Inc.?",
        answer_pl: "Admin Inc. napędzany jest przez pojedynczego dewelopera, który wnosi ogromne doświadczenie i pasję do każdego projektu. Jako zespół jednoosobowy zapewniam spersonalizowane i zaangażowane podejście do każdego zadania.",
        question_cs: "Kdo stojí za operacemi Admin Inc.?",
        answer_cs: "Admin Inc. je poháněn jedním vývojářem, který do každého projektu přináší bohaté zkušenosti a vášeň. Jako jednočlenný tým zajišťuji personalizovaný a oddaný přístup ke každé úloze.",
        question_da: "Hvem står bag operationerne af Admin Inc.?",
        answer_da: "Admin Inc. drives af en solo-udvikler, der bringer en rigdom af ekspertise og passion til hvert projekt. Som et enmandsteam sikrer jeg en personlig og dedikeret tilgang til hver opgave."
    },
    {
        question_en: "Does Admin Inc. create its own products?",
        answer_en: "No, Admin Inc. itself does not engage in product creation. Our focus is solely on administration and management of sub-companies and their projects.",
        question_ua: "Чи створює Admin Inc. свої власні продукти?",
        answer_ua: "Ні, сама Admin Inc. не займається створенням продуктів. Наш фокус повністю зосереджений на адмініструванні та управлінні дочірніми компаніями та їхніми проектами.",
        question_de: "Erstellt Admin Inc. eigene Produkte?",
        answer_de: "Nein, Admin Inc. selbst engagiert sich nicht in der Produkterstellung. Unser Fokus liegt ausschließlich auf der Verwaltung und dem Management von Tochtergesellschaften und deren Projekten.",
        question_pl: "Czy Admin Inc. tworzy własne produkty?",
        answer_pl: "Nie, Admin Inc. nie zajmuje się tworzeniem produktów. Skupiamy się wyłącznie na administracji i zarządzaniu podfirmami oraz ich projektami.",
        question_cs: "Vytváří Admin Inc. vlastní produkty?",
        answer_cs: "Ne, Admin Inc. se sama nezabývá tvorbou produktů. Naše zaměření je výhradně na správu a řízení dceřiných společností a jejich projektů.",
        question_da: "Skaber Admin Inc. sine egne produkter?",
        answer_da: "Nej, Admin Inc. selv engagerer sig ikke i produktudvikling. Vores fokus er udelukkende på administration og styring af datterselskaber og deres projekter."
    },
    {
        question_en: "Can sub-companies operate independently of Admin Inc.?",
        answer_en: "While sub-companies have a degree of operational freedom, they are ultimately under the administrative control of Admin Inc. They must adhere to our policies and guidelines in all their activities.",
        question_ua: "Чи можуть дочірні компанії діяти незалежно від Admin Inc.?",
        answer_ua: "Хоча дочірні компанії мають певний ступінь оперативної свободи, вони в кінцевому підсумку перебувають під адміністративним контролем Admin Inc. Вони повинні дотримуватися наших політик та настанов у всіх своїх діяльностях.",
        question_de: "Können Tochtergesellschaften unabhängig von Admin Inc. operieren?",
        answer_de: "Obwohl Tochtergesellschaften einen gewissen Grad an operativer Freiheit haben, stehen sie letztendlich unter der administrativen Kontrolle von Admin Inc. Sie müssen in all ihren Aktivitäten unseren Richtlinien und Vorgaben folgen.",
        question_pl: "Czy podfirmy mogą działać niezależnie od Admin Inc.?",
        answer_pl: "Chociaż podfirmy mają pewien stopień swobody operacyjnej, ostatecznie podlegają kontroli administracyjnej Admin Inc. Muszą przestrzegać naszych polityk i wytycznych we wszystkich swoich działaniach.",
        question_cs: "Mohou dceřiné společnosti fungovat nezávisle na Admin Inc.?",
        answer_cs: "Ačkoli dceřiné společnosti mají určitou míru operační svobody, jsou nakonec pod administrativní kontrolou Admin Inc. Musí dodržovat naše politiky a pokyny ve všech svých aktivitách.",
        question_da: "Kan datterselskaber operere uafhængigt af Admin Inc.?",
        answer_da: "Selvom datterselskaber har en vis grad af operationel frihed, er de i sidste ende under den administrative kontrol af Admin Inc. De skal overholde vores politikker og retningslinjer i alle deres aktiviteter."
    }
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
