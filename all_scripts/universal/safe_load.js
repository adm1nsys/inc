
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
    soon: "Незабаром",
    info: "Інформація",
    signup: "Зареєструватися",
    menu: "Меню",
    phrases_d: [
      "Орієнтуйтеся серед колекції інноваційних компаній.",
      "Досліджуйте центр інноваційних компаній.",
      "Відкрийте для себе мережу піонерських компаній."
    ],
    phrases: [
      "Досліджуйте наші етапи",
      "Досліджуйте наш процес"
    ]
  },
  de: {
    home: "Startseite",
    brands: "Marken",
    beta: "Beta",
    soon: "Bald Verfügbar",
    info: "Information",
    signup: "Anmelden",
    menu: "Menü",
    phrases_d: [
      "Navigieren Sie durch eine Sammlung innovativer Unternehmen.",
      "Entdecken Sie einen Hub innovativer Unternehmen.",
      "Entdecken Sie ein Netzwerk von Pionierunternehmen."
    ],
    phrases: [
      "Entdecken Sie unsere Stufen",
      "Entdecken Sie unseren Prozess"
    ]
  },
  pl: {
    home: "Strona Główna",
    brands: "Marki",
    beta: "Beta",
    soon: "Wkrótce",
    info: "Informacja",
    signup: "Zapisz Się",
    menu: "Menu",
    phrases_d: [
      "Przeglądaj kolekcję innowacyjnych firm.",
      "Odkryj centrum innowacyjnych firm.",
      "Poznaj sieć pionierskich firm."
    ],
    phrases: [
      "Odkryj Nasze Etapy",
      "Odkryj Nasz Proces"
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
      return userLangStorage; // Возвращаем текущий язык из localStorage
    }
  } else {
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
      <p>Выберите язык: ${preferredLang} / ${currentLang}</p>
      <button class="keepLang DB ac02 ac03" style="cursor:crosshair; margin-right: 1rem;">Оставить ${currentLang}</button>
      <button class="applyLang DB ac02 ac03" style="background: none; cursor:crosshair; padding: 0; border: none; margin-left: 1rem; font-weight: 400;">Применить ${preferredLang}</button>
    </div>
  `;
  document.body.appendChild(langMenu);

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
