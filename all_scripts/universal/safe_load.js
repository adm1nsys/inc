
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
    menu: "Menu"
  },
  ua: {
    home: "Головна",
    brands: "Бренди",
    beta: "Бета",
    soon: "Незабаром",
    info: "Інформація",
    signup: "Зареєструватися",
    menu: "Меню"
  },
  de: {
    home: "Startseite",
    brands: "Marken",
    beta: "Beta",
    soon: "Bald Verfügbar",
    info: "Information",
    signup: "Anmelden",
    menu: "Menü"
  },
  pl: {
    home: "Strona Główna",
    brands: "Marki",
    beta: "Beta",
    soon: "Wkrótce",
    info: "Informacja",
    signup: "Zapisz Się",
    menu: "Menu"
  }
};


// Function to detect user's preferred language
function detectLanguage() {
  // Check URL parameters for 'lang', 'ln', or 'language'
  const urlParams = new URLSearchParams(window.location.search);
  const langFromUrl = urlParams.get('lang') || urlParams.get('ln') || urlParams.get('language');

  if (langFromUrl && translations[langFromUrl]) {
    return langFromUrl;
  }

  // Fallback to the browser's language or default to 'en'
  const browserLang = navigator.language.split('-')[0]; // Get language code
  return translations[browserLang] ? browserLang : 'en';
}

// Function to apply translations
function applyTranslations(lang) {
  const elements = document.querySelectorAll('[data-translate-key]');

  elements.forEach(element => {
    const key = element.getAttribute('data-translate-key');
    element.textContent = translations[lang][key] || `No translation for "${key}"`;
  });
}

// Detect language and apply translations
let userLang = detectLanguage();











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
