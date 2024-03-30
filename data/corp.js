//universal scripts
var corporateDataArray = [
    {
        name: "Admin inc.",
        logo_c: "a0",
        status: "Release_m",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description_en: "Description for Admin inc.",
        description_ua: "Опис для Admin inc.",
        description_de: "Beschreibung für Admin inc.",
        description_pl: "Opis dla Admin inc.",
        description_cs: "Popis pro Admin inc.",
        description_da: "Beskrivelse for Admin inc."
    },
    {
        name: "NumeraLogic",
        logo_c: "a1",
        status: "Beta",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description_en: "The best engineer calculator!",
        description_ua: "Найкращий інженерний калькулятор!",
        description_de: "Der beste Ingenieur-Rechner!",
        description_pl: "Najlepszy kalkulator inżynierski!",
        description_cs: "Nejlepší inženýrská kalkulačka!",
        description_da: "Den bedste ingeniørregner!"
    },
    {
        name: "WebMaster",
        logo_c: "a2",
        status: "Release",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description_en: "Start your local server in 2 clicks.",
        description_ua: "Запустіть свій локальний сервер у два кліки.",
        description_de: "Starten Sie Ihren lokalen Server mit zwei Klicks.",
        description_pl: "Uruchom swój lokalny serwer w 2 kliknięcia.",
        description_cs: "Spusťte svůj lokální server dvěma kliknutími.",
        description_da: "Start din lokale server med 2 klik."
    },
    {
        name: "XN1GHT",
        logo_c: "a3",
        status: "Soon",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description_en: "Techno magazine.",
        description_ua: "Техно журнал.",
        description_de: "Techno-Magazin.",
        description_pl: "Magazyn techno.",
        description_cs: "Techno magazín.",
        description_da: "Techno magasin."
    },
    {
        name: "Admin Store",
        logo_c: "a4",
        status: "Soon",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description_en: "The best techno store!",
        description_ua: "Найкращий техно магазин!",
        description_de: "Der beste Techno-Store!",
        description_pl: "Najlepszy sklep z techno!",
        description_cs: "Nejlepší techno obchod!",
        description_da: "Den bedste techno-butik!"
    },
    {
        name: "DesignCode",
        logo_c: "a0",
        status: "Soon",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description_en: "Make your apps without Code!",
        description_ua: "Створюйте свої додатки без коду!",
        description_de: "Erstellen Sie Ihre Apps ohne Code!",
        description_pl: "Twórz swoje aplikacje bez kodowania!",
        description_cs: "Vytvářejte své aplikace bez kódování!",
        description_da: "Lav dine apps uden kode!"
    },
    {
        name: "AX",
        logo_c: "a5",
        status: "Soon",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description_en: "AX - Simple helper for every day.",
        description_ua: "AX - Простий помічник на кожен день.",
        description_de: "AX - Einfacher Helfer für jeden Tag.",
        description_pl: "AX - Prosty pomocnik na co dzień.",
        description_cs: "AX - Jednoduchý pomocník pro každý den.",
        description_da: "AX - Simpel hjælper til hverdag."
    }
];

function getLocalizedDescription(data) {
    var languageCode = detectLanguage(); // Detects the language
    var descriptionKey = "description_" + languageCode; // Constructs the key for the localized description
    return data[descriptionKey]; // Returns the localized description
}

function displayReleaseData() {
    var brandsList = document.getElementById('brands_list');

    corporateDataArray.forEach(function(data) {
        if (data.status === "Release") {
            var brendContainer = document.createElement('div');
            brendContainer.className = 'brend_container';
            brendContainer.innerHTML = `
                <circle class="brend_container_bg"></circle>
                <div class="brend_container0">
                    <div class="brend_container1">
                        <span class="h1-1 h1_1">${data.name}</span>
                        <div class="h2 ac05">${getLocalizedDescription(data)}</div>
                    </div>
                    <div class="brend_container_img dark">
                        <div class="jumbo absolute -inset-[10px] opacity-50 ">
                            <div class="f1" style="background: ${data.accent_color};">
                            </div>
                        </div>
                        <div class="logo_brend_by_list ${data.logo_c}"></div>
                    </div>
                </div>`;
                brendContainer.onclick = function() {
                 window.open(data.link, '_blank');
            };

            brandsList.appendChild(brendContainer);
        }
    });
}


// Call the function to display data

function displayBetaData() {
    var brandsList = document.getElementById('brands_list_beta');

    corporateDataArray.forEach(function(data) {
        if (data.status === "Beta") {
            var brendContainer = document.createElement('div');
            brendContainer.className = 'brend_container';
            brendContainer.innerHTML = `
                <circle class="brend_container_bg"></circle>
                <div class="brend_container0">
                    <div class="brend_container1">
                        <span class="h1-1 h1_1">${data.name}</span>
                        <div class="h2 ac05">${getLocalizedDescription(data)}</div>
                    </div>
                    <div class="brend_container_img dark">
                        <div class="jumbo absolute -inset-[10px] opacity-50 ">
                            <div class="f1" style="background: ${data.accent_color};">
                            </div>
                        </div>
                        <div class="logo_brend_by_list ${data.logo_c}"></div>
                    </div>
                </div>`;
                brendContainer.onclick = function() {
                 window.open(data.link, '_blank');
            };

            brandsList.appendChild(brendContainer);
        }
    });
}


// Call the function to display data

function displaySoonData() {
    var brandsList = document.getElementById('brands_list_soon');

    corporateDataArray.forEach(function(data) {
        if (data.status === "Soon") {
            var brendContainer = document.createElement('div');
            brendContainer.className = 'brend_container';
            brendContainer.innerHTML = `
                <circle class="brend_container_bg"></circle>
                <div class="brend_container0">
                    <div class="brend_container1">
                        <span class="h1-1 h1_1">${data.name}</span>
                        <div class="h2 ac05">${getLocalizedDescription(data)}</div>
                    </div>
                    <div class="brend_container_img dark">
                        <div class="jumbo absolute -inset-[10px] opacity-50 ">
                            <div class="f1" style="background: ${data.accent_color};">
                            </div>
                        </div>
                        <div class="logo_brend_by_list ${data.logo_c}"></div>
                    </div>
                </div>`;
                brendContainer.onclick = function() {
                 window.open(data.link, '_blank');
            };

            brandsList.appendChild(brendContainer);
        }
    });
}


// Call the function to display data
