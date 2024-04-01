// Объект для хранения переводов
const translations_corp = {
    en: {
        allRightsReserved: "All rights reserved.",
        copyrightText: [
            `© {year} <a href="your_link_here">{productName}</a> All rights reserved.`,
            `All content is © {year} by <a href="your_link_here">{productName}</a>.`,
            `Copyright {year} <a href="your_link_here">{productName}</a>. Protected and reserved.`,
            `{year} © <a href="your_link_here">{productName}</a>. Rights reserved globally.`,
            `Exclusive rights {year} © <a href="your_link_here">{productName}</a>.`
        ]
    },
    ua: {
        allRightsReserved: "Всі права захищені.",
        copyrightText: [
            `© {year} <a href="your_link_here">{productName}</a>. Всі права захищені.`,
            `Весь контент є © {year} від <a href="your_link_here">{productName}</a>.`,
            `Авторське право {year} <a href="your_link_here">{productName}</a>. Захищено і зарезервовано.`,
            `{year} © <a href="your_link_here">{productName}</a>. Права захищені глобально.`,
            `Ексклюзивні права {year} © <a href="your_link_here">{productName}</a>.`
        ]
    },
    de: {
        allRightsReserved: "Alle Rechte vorbehalten.",
        copyrightText: [
            `© {year} <a href="your_link_here">{productName}</a> Alle Rechte vorbehalten.`,
            `Alle Inhalte sind © {year} von <a href="your_link_here">{productName}</a>.`,
            `Urheberrecht {year} <a href="your_link_here">{productName}</a>. Geschützt und reserviert.`,
            `{year} © <a href="your_link_here">{productName}</a>. Weltweit reservierte Rechte.`,
            `Exklusive Rechte {year} © <a href="your_link_here">{productName}</a>.`
        ]
    },
    pl: {
        allRightsReserved: "Wszelkie prawa zastrzeżone.",
        copyrightText: [
            `© {year} <a href="your_link_here">{productName}</a>. Wszelkie prawa zastrzeżone.`,
            `Cała zawartość to © {year} przez <a href="your_link_here">{productName}</a>.`,
            `Prawa autorskie {year} <a href="your_link_here">{productName}</a>. Chronione i zastrzeżone.`,
            `{year} © <a href="your_link_here">{productName}</a>. Prawa zastrzeżone na całym świecie.`,
            `Wyłączne prawa {year} © <a href="your_link_here">{productName}</a>.`
        ]
    },
    cs: {
        allRightsReserved: "Všechna práva vyhrazena.",
        copyrightText: [
            `© {year} <a href="your_link_here">{productName}</a>. Všechna práva vyhrazena.`,
            `Veškerý obsah je © {year} od <a href="your_link_here">{productName}</a>.`,
            `Autorské právo {year} <a href="your_link_here">{productName}</a>. Chráněno a vyhrazeno.`,
            `{year} © <a href="your_link_here">{productName}</a>. Práva vyhrazena globálně.`,
            `Exkluzivní práva {year} © <a href="your_link_here">{productName}</a>.`
        ]
    },
    da: {
        allRightsReserved: "Alle rettigheder forbeholdes.",
        copyrightText: [
            `© {year} <a href="your_link_here">{productName}</a>. Alle rettigheder forbeholdes.`,
            `Alt indhold er © {year} af <a href="your_link_here">{productName}</a>.`,
            `Ophavsret {year} <a href="your_link_here">{productName}</a>. Beskyttet og reserveret.`,
            `{year} © <a href="your_link_here">{productName}</a>. Rettigheder forbeholdt globalt.`,
            `Eksklusive rettigheder {year} © <a href="your_link_here">{productName}</a>.`
        ]
    }
};

function corp_apply() {
    if (typeof corporateDataArray !== 'undefined' && corporateDataArray.length > 0) {
        const PRODUCT_NAME = corporateDataArray[0].name;
        // console.log(PRODUCT_NAME);
        document.getElementById('corporation_name').textContent = PRODUCT_NAME;
        const currentYear = new Date().getFullYear();
        const language = detectLanguage(); // Допустим, эта функция возвращает текущий язык интерфейса
        const langtranslations_corp = translations_corp[language]; // Фолбэк на английский, если перевод не найден

        const variations = langtranslations_corp.copyrightText.map(text =>
            text.replace('{year}', currentYear).replace('{productName}', PRODUCT_NAME)
        );

        const randomVariation = variations[Math.floor(Math.random() * variations.length)];
        document.getElementById('copyright').innerHTML = randomVariation;
    } else {
        console.error('corporateDataArray undefined or empty');
    }
}


document.getElementById("content").style.display = "block";
