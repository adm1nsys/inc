
$(document).ready(function() {

    if(page_id === 0){
switch (c01.lang) {
    case "en":
    loadContentForLanguage()
        break;
    case "ua":
    loadContentForLanguage()

    document.getElementById("btn_home").textContent = "дим";
        break;
    // You can have as many cases as you need
    default:
        // Code to execute if variable doesn't match any case
}}else if(page_id === 1){
    //load page id 1 (login)
    switch (c01.lang) {
    case "en":
    loadContentForLanguage1()
        break;
    case "ua":
    loadContentForLanguage1()
        break;
    // You can have as many cases as you need
    default:
        // Code to execute if variable doesn't match any case
}
}else if(page_id === 2){
        switch (c01.lang) {
    case "en":
    loadContentForLanguage2()
        break;
    case "ua":
    loadContentForLanguage2()
        break;
    // You can have as many cases as you need
    default:
        // Code to execute if variable doesn't match any case
}
} else{
    cosole.log("page_id is not correct")
}


if(osInfo.os === "macOS"){
        loadFile("all_styles/blur_style.css", "css");
}else{
        loadFile("all_styles/no_blur_style.css", "css");
}

});




// Example of language resources
const translations = {
  en: {
    home: "Home",
    brands: "Brands",
    beta: "Beta",
    soon: "Coming Soon",
    info: "Information",
    signup: "Sign Up",
    menu: "Menu",
    lang_ch_ed: "language changed",
    whereInnovationMeets: "Where Innovation Meets",
    imagination: "Imagination",
    discoverBrands: "+Discover Brands",
    ourStages: "Our Stages",
    projectPhase: "What is the project going through?",
    stagesDescription: "1. Soon, 2. Beta, 3. Release",
    soon: "Soon",
    soonDescription: "The project is in its initial stage, with development just beginning.",
    beta: "Beta",
    betaDescription: "The project is currently in the beta phase, undergoing development and modifications.",
    release: "Release",
    releaseDescription: "The project/brand has been fully developed and is now ready for use, although further modifications may be made.",
    finalStage: "Final Stage",
    releaseBrandsAvailable: "Release Brands and Projects Available",
    allReleased: "All Released Projects and Brands",
    betaStage: "Beta Stage",
    betaBrandsAvailable: "Brands and Projects are Available in Beta",
    allBetaReleased: "All Released in Beta Projects and Brands",
    soonStage: "Soon Stage",
    comingSoonBrands: "Brands and Projects are Coming Soon",
    allComingSoon: "All Projects and Brands will be Coming Soon",
    answerNow: "ANSWER NOW",
    whatWaitingFor: "What are you waiting for?",
    suggestionsWelcome: "If you have suggestions for improving quality or new features, please fill out the form",
    answer: "Answer",
    cantFind: "¿CAN'T YOU FIND WHAT YOU WERE LOOKING FOR?",
    faq: "Frequently asked questions",
    alsoWondering: "You may also be wondering...",
    moreInfoAdmin: "Where i can find more information about Admin inc.?",
    moreInfoCreator: "Where i can find more information about Admin inc. creator?",
    legalInfo: "Privacy, Terms and Licenses",
    phrases_d: [
      "Navigate through a collection of innovative companies.",
      "Explore a hub of innovative companies.",
      "Discover a network of pioneering companies."
    ],
    phrases: [
      "Explore Our Stages",
      "Explore Our Process"
    ]
  },
  ua: {
    home: "Головна",
    brands: "Бренди",
    beta: "Бета",
    soon: "Скоро",
    info: "Інформація",
    signup: "Зареєструватися",
    menu: "Меню",
    lang_ch_ed: "мова змінена",
    whereInnovationMeets: "Де зустрічаються інновації",
    imagination: "Уява",
    discoverBrands: "+ Відкрити бренди",
    ourStages: "Наші етапи",
    projectPhase: "На якій стадії знаходиться проект?",
    stagesDescription: "1. Скоро, 2. Бета, 3. Реліз",
    soon: "Скоро",
    soonDescription: "Проект знаходиться на початковій стадії, розробка тільки починається.",
    beta: "Бета",
    betaDescription: "Проект зараз перебуває на стадії бета-тестування, проходить розробку та модифікації.",
    release: "Реліз",
    releaseDescription: "Проект/бренд повністю розроблено та готовий до використання, хоча можливі подальші модифікації.",
    finalStage: "Остання стадія",
    releaseBrandsAvailable: "Доступні бренди та проекти",
    allReleased: "Усі випущені проєкти та бренди",
    betaStage: "Бета-стадія",
    betaBrandsAvailable: "Доступні бренди та проекти в бета-версії",
    allBetaReleased: "Усі випущені в бета-версії проєкти та бренди",
    soonStage: "Скоро",
    comingSoonBrands: "Бренди та проекти незабаром",
    allComingSoon: "Усі проєкти та бренди незабаром",
    answerNow: "ВІДПОВІСТИ ЗАРАЗ",
    whatWaitingFor: "Чого ви чекаєте?",
    suggestionsWelcome: "Якщо у вас є пропозиції щодо покращення якості або нових функцій, будь ласка, заповніть форму",
    answer: "Відповідь",
    cantFind: "НЕ МОЖЕТЕ ЗНАЙТИ ТЕ, ЩО ШУКАЛИ?",
    faq: "Поширені запитання",
    alsoWondering: "Вам також може бути цікаво...",
    moreInfoAdmin: "Де я можу знайти більше інформації про Admin inc.?",
    moreInfoCreator: "Де я можу знайти більше інформації про творця Admin inc.?",
    legalInfo: "Конфіденційність, Умови та Ліцензії",
    phrases_d: [
      "Перегляньте колекцію інноваційних компаній.",
      "Дослідіть центр інноваційних компаній.",
      "Відкрийте для себе мережу піонерських компаній."
    ],
    phrases: [
      "Дослідіть наші етапи",
      "Дослідіть наш процес"
    ]
  },
  de: {
    home: "Startseite",
    brands: "Marken",
    beta: "Beta",
    soon: "Demnächst",
    info: "Informationen",
    signup: "Anmelden",
    menu: "Menü",
    lang_ch_ed: "Sprache geändert",
    whereInnovationMeets: "Wo Innovationen aufeinandertreffen",
    imagination: "Imagination",
    discoverBrands: "+ Marken entdecken",
    ourStages: "Unsere Etappen",
    projectPhase: "In welcher Phase befindet sich das Projekt?",
    stagesDescription: "1. Demnächst, 2. Beta, 3. Release",
    soon: "Demnächst",
    soonDescription: "Das Projekt befindet sich in der Anfangsphase, die Entwicklung hat gerade erst begonnen.",
    beta: "Beta",
    betaDescription: "Das Projekt befindet sich derzeit in der Beta-Phase und durchläuft Entwicklung und Modifikationen.",
    release: "Release",
    releaseDescription: "Das Projekt/die Marke ist vollständig entwickelt und nun einsatzbereit, wobei jedoch weitere Modifikationen vorgenommen werden können.",
    finalStage: "Endphase",
    releaseBrandsAvailable: "Verfügbare Marken und Projekte",
    allReleased: "Alle veröffentlichten Projekte und Marken",
    betaStage: "Beta-Phase",
    betaBrandsAvailable: "Marken und Projekte sind in der Beta-Version verfügbar",
    allBetaReleased: "Alle in der Beta-Version veröffentlichten Projekte und Marken",
    soonStage: "Demnächst",
    comingSoonBrands: "Marken und Projekte kommen bald",
    allComingSoon: "Alle Projekte und Marken kommen bald",
    answerNow: "JETZT ANTWORTEN",
    whatWaitingFor: "Worauf warten Sie?",
    suggestionsWelcome: "Wenn Sie Vorschläge zur Verbesserung der Qualität oder neue Funktionen haben, füllen Sie bitte das Formular aus",
    answer: "Antwort",
    cantFind: "KÖNNEN SIE NICHT FINDEN, WAS SIE SUCHEN?",
    faq: "Häufig gestellte Fragen",
    alsoWondering: "Sie fragen sich vielleicht auch...",
    moreInfoAdmin: "Wo finde ich weitere Informationen über Admin Inc.?",
    moreInfoCreator: "Wo finde ich weitere Informationen über den Gründer von Admin Inc.?",
    legalInfo: "Datenschutz, Geschäftsbedingungen und Lizenzen",
    phrases_d: [
      "Navigieren Sie durch eine Sammlung innovativer Unternehmen.",
      "Erkunden Sie ein Zentrum innovativer Unternehmen.",
      "Entdecken Sie ein Netzwerk von Pionierunternehmen."
    ],
    phrases: [
      "Entdecken Sie unsere Etappen",
      "Entdecken Sie unseren Prozess"
    ]
  },
  pl: {
    home: "Strona główna",
    brands: "Marki",
    beta: "Beta",
    soon: "Wkrótce",
    info: "Informacje",
    signup: "Zarejestruj się",
    menu: "Menu",
    lang_ch_ed: "język zmieniony",
    whereInnovationMeets: "Gdzie spotykają się innowacje",
    imagination: "Wyobraźnia",
    discoverBrands: "+ Odkryj marki",
    ourStages: "Nasze etapy",
    projectPhase: "Na jakim etapie jest projekt?",
    stagesDescription: "1. Wkrótce, 2. Beta, 3. Wydanie",
    soon: "Wkrótce",
    soonDescription: "Projekt jest w fazie początkowej, a jego rozwój właśnie się rozpoczął.",
    beta: "Beta",
    betaDescription: "Projekt jest obecnie w fazie beta, przechodzi testy i modyfikacje.",
    release: "Wydanie",
    releaseDescription: "Projekt/marka jest w pełni rozwinięta i gotowa do użycia, jednak mogą być wprowadzane dalsze modyfikacje.",
    finalStage: "Ostatni etap",
    releaseBrandsAvailable: "Dostępne marki i projekty",
    allReleased: "Wszystkie wydane projekty i marki",
    betaStage: "Faza beta",
    betaBrandsAvailable: "Marki i projekty dostępne w wersji beta",
    allBetaReleased: "Wszystkie wydane w wersji beta projekty i marki",
    soonStage: "Wkrótce",
    comingSoonBrands: "Marki i projekty wkrótce",
    allComingSoon: "Wszystkie projekty i marki wkrótce",
    answerNow: "ODPOWIEDZ TERAZ",
    whatWaitingFor: "Na co czekasz?",
    suggestionsWelcome: "Jeśli masz propozycje dotyczące poprawy jakości lub nowych funkcji, wypełnij formularz",
    answer: "Odpowiedź",
    cantFind: "NIE MOŻESZ ZNALEŹĆ TEGO, CZEGO SZukasz?",
    faq: "Często zadawane pytania",
    alsoWondering: "Możesz też się zastanawiać...",
    moreInfoAdmin: "Gdzie mogę znaleźć więcej informacji o Admin Inc.?",
    moreInfoCreator: "Gdzie mogę znaleźć więcej informacji o twórcy Admin Inc.?",
    legalInfo: "Prywatność, Warunki i licencje",
    phrases_d: [
      "Przeglądaj kolekcję innowacyjnych firm.",
      "Zbadaj centrum innowacyjnych firm.",
      "Odkryj sieć pionierskich firm."
    ],
    phrases: [
      "Odkryj nasze etapy",
      "Odkryj nasz proces"
    ]
  },
  cs: {
  home: "Domovská stránka",
  brands: "Značky",
  beta: "Beta",
  soon: "Brzy",
  info: "Informace",
  signup: "Zaregistrovat se",
  menu: "Obsah",
  lang_ch_ed: "jazyk změněn",
  whereInnovationMeets: "Kde se setkávají inovace",
  imagination: "Imaginace",
  discoverBrands: "+ Objevte značky",
  ourStages: "Naše fáze",
  projectPhase: "V jaké fázi je projekt?",
  stagesDescription: "1. Brzy, 2. Beta, 3. Vydání",
  soon: "Brzy",
  soonDescription: "Projekt je v rané fázi a vývoj teprve začíná.",
  beta: "Beta",
  betaDescription: "Projekt je v současné době ve fázi beta a prochází vývojem a úpravami.",
  release: "Vydání",
  releaseDescription: "Projekt/značka je plně vyvinuta a je připravena k použití, i když mohou být provedeny další úpravy.",
  finalStage: "Konečná fáze",
  releaseBrandsAvailable: "Dostupné značky a projekty",
  allReleased: "Všechny vydané projekty a značky",
  betaStage: "Beta fáze",
  betaBrandsAvailable: "Značky a projekty jsou dostupné v beta verzi",
  allBetaReleased: "Všechny vydané projekty a značky v beta verzi",
  soonStage: "Brzy",
  comingSoonBrands: "Značky a projekty brzy",
  allComingSoon: "Všechny projekty a značky brzy",
  answerNow: "ODPOVĚĎTE TEĎ",
  whatWaitingFor: "Na co čekáte?",
  suggestionsWelcome: "Máte-li návrhy na zlepšení kvality nebo nové funkce, vyplňte prosím formulář",
  answer: "Odpověď",
  cantFind: "NEMŮŽETE NAJÍT, CO HLEDÁTE?",
  faq: "Často kladené otázky",
  alsoWondering: "Možná vás také zajímá...",
  moreInfoAdmin: "Kde najdu další informace o Admin Inc.?",
  moreInfoCreator: "Kde najdu další informace o tvůrci Admin Inc.?",
  legalInfo: "Ochrana osobních údajů, Podmínky a licence",
  phrases_d: [
    "Procházejte kolekci inovativních společností.",
    "Prozkoumejte centrum inovativních společností.",
    "Objevte síť průkopnických společností."
  ],
  phrases: [
    "Prozkoumejte naše fáze",
    "Prozkoumejte náš proces"
  ]
},
da: {
  home: "Hjemmeside",
  brands: "Mærker",
  beta: "Beta",
  soon: "Snart",
  info: "Information",
  signup: "Tilmeld dig",
  menu: "Menu",
  lang_ch_ed: "sprog ændret",
  whereInnovationMeets: "Hvor innovation mødes",
  imagination: "Imagination",
  discoverBrands: "+ Oplev mærker",
  ourStages: "Vores etaper",
  projectPhase: "I hvilken fase er projektet?",
  stagesDescription: "1. Snart, 2. Beta, 3. Udgivelse",
  soon: "Snart",
  soonDescription: "Projektet er i sin indledende fase, og udviklingen er netop begyndt.",
  beta: "Beta",
  betaDescription: "Projektet er i øjeblikket i beta-fasen og gennemgår udvikling og ændringer.",
  release: "Udgivelse",
  releaseDescription: "Projektet/mærket er fuldt udviklet og er nu klar til brug, selvom der kan foretages yderligere ændringer.",
  finalStage: "Slutstadie",
  releaseBrandsAvailable: "Tilgængelige mærker og projekter",
  allReleased: "Alle udgivne projekter og mærker",
  betaStage: "Beta-stadie",
  betaBrandsAvailable: "Mærker og projekter er tilgængelige i beta",
  allBetaReleased: "Alle udgivne i beta-projekter og mærker",
  soonStage: "Snart",
  comingSoonBrands: "Mærker og projekter kommer snart",
  allComingSoon: "Alle projekter og mærker kommer snart",
  answerNow: "SVÆR NU",
  whatWaitingFor: "Hvad venter du på?",
  suggestionsWelcome: "Hvis du har forslag til forbedring af kvaliteten eller nye funktioner, skal du udfylde formularen",
  answer: "Svar",
  cantFind: "KAN DU IKKE FINDE DET, DU LEDTE EFTER?",
  faq: "Ofte stillede spørgsmål",
  alsoWondering: "Du spekulerer måske også på...",
  moreInfoAdmin: "Hvor kan jeg finde mere information om Admin Inc.?",
  moreInfoCreator: "Hvor kan jeg finde mere information om Admin Inc.s skaber?",
  legalInfo: "Privatliv, Vilkår og Licenser",
  phrases_d: [
    "Naviger gennem en samling af innovative virksomheder.",
    "Udforsk et centrum for innovative virksomheder.",
    "Oplev et netværk af banebrydende virksomheder."
  ],
  phrases: [
    "Udforsk vores etaper",
    "Udforsk vores proces"
  ]
}


};

let lang_m_sp = true;

// Функция определения языка пользователя
function detectLanguage() {


  if(localStorage.getItem('c01.lang') === null){
    localStorage.setItem('c01.lang', "en")
  }

  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang') || urlParams.get('ln') || urlParams.get('language');
  const userLangStorage = localStorage.getItem('c01.lang');



  if (langFromUrl && translations[langFromUrl]) {
    // Если язык из URL действителен и нет userLangStorage, применяем langFromUrl и обновляем localStorage
    if (!userLangStorage) {
      localStorage.setItem('c01.lang', langFromUrl);
      applyTranslations(langFromUrl);
      // Убираем параметр языка из URL, если это необходимо
      updateURLWithoutLangParam();
      return langFromUrl;
    } else {
      // Если langFromUrl отличается от userLangStorage, показываем меню
      if (langFromUrl !== userLangStorage) {
        if(lang_m_sp === true){
        showLanguageSelectionMenu(langFromUrl, userLangStorage);
        lang_m_sp = false;
      }


      }
      lang_m_sp = false;

      return userLangStorage; // Возвращаем текущий язык из localStorage
    }
    lang_m_sp = false;

  } else {
    lang_m_sp = false;
    // Используем язык из localStorage или по умолчанию 'en'
    return userLangStorage || 'en';
  }
}

// Функция для показа меню выбора языка
function showLanguageSelectionMenu(preferredLang, currentLang) {
  const langMenu = document.createElement('div');
  langMenu.classList.add('lang_menu_or'); // Используем класс вместо id для стилизации
  langMenu.innerHTML = `
    <div class="lang_menu_or1">
      <p class="fo_m_t">Choose prefer Language: <span style="text-transform: uppercase;">${preferredLang}</span> or <span style="text-transform: uppercase;">${currentLang}</span></p>
      <button class="keepLang DB ac02 ac03" style="cursor:crosshair; margin-right: 1rem;">Stay <span style="text-transform: uppercase;">${currentLang}</span></button>
      <button class="applyLang DB ac02 ac03" style="background: none; cursor:crosshair; padding: 0; border: none; margin-left: 0rem; font-weight: 400;">Apply <span style="text-transform: uppercase;">${preferredLang}</span></button>
    </div>
  `;
  document.getElementById("lang_allert").innerHTML = '';

  document.getElementById("lang_allert").appendChild(langMenu);

  // Навешиваем события на кнопки
  langMenu.querySelector('.applyLang').addEventListener('click', function() {
    localStorage.setItem('c01.lang', preferredLang);
    applyTranslations(preferredLang);
    const defaultLang = document.querySelector(`.custom-option[data-value="${preferredLang}"]`);
  defaultLang.click(); // Programmatically click the default language option to reset
  toggleCustomSelect()
    langMenu.remove();
  });

  langMenu.querySelector('.keepLang').addEventListener('click', function() {
    langMenu.remove();
  });
}


// Функция применения выбранного языка без перезагрузки страницы
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-translate-key]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate-key');
    element.textContent = translations[lang][key] || `No translation for "${key}"`;
  });
}

// Обновление URL без параметра языка
function updateURLWithoutLangParam() {
  const url = new URL(window.location);
  url.searchParams.delete('lang');
  url.searchParams.delete('ln');
  url.searchParams.delete('language');
  window.history.replaceState({}, '', url);
}
let userLang = detectLanguage(); // Определяем язык пользователя
  applyTranslations(userLang); // Применяем переводы








function loadContentForLanguage() {
    $("#content").load(`templates/a0/${c01.lang}/i01.html`, function(response, status, xhr) {
        if (status === "error") {
            var errorMsg = "There was an error loading the content: ";
            $("#content").html(errorMsg + xhr.status + " " + xhr.statusText);
        }
        // document.getElementById("btn_home").textContent = "Головна";

applyTranslations(userLang);

    });
}

function loadContentForLanguage1() {
    $("#content").load(`templates/a0/${c01.lang}/i02.html`, function(response, status, xhr) {
        if (status === "error") {
            var errorMsg = "There was an error loading the content: ";
            $("#content").html(errorMsg + xhr.status + " " + xhr.statusText);
        }
    });
}

function loadContentForLanguage2() {
  if (window.innerWidth > 767) {
    $("#content").load(`templates/a0/${c01.lang}/account/i00.html`, function(response, status, xhr) {
      if (status === "error") {
          var errorMsg = "There was an error loading the content: ";
          $("#content").html(errorMsg + xhr.status + " " + xhr.statusText);
      }
  });
} else {
  $("#content").load(`templates/a0/${c01.lang}/account/i00_btns.html`, function(response, status, xhr) {
    if (status === "error") {
        var errorMsg = "There was an error loading the content: ";
        $("#content").html(errorMsg + xhr.status + " " + xhr.statusText);
    }
});
}



}
