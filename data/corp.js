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
        description:"description for Admin inc.",
    },
    {
        name: "NumeraLogic",
        logo_c: "a1",
        status: "Release",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description:"The best engineer calculator!",
        link:"https://adm1nsys.github.io/NumeraLogic/",
        accent_color:"white",
        // accent_color:"rgb(61, 132, 190)",
    },
    {
        name: "http master",
        logo_c: "a2",
        status: "Release",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description:"Start your http-server in 2 clicks.",
        link:"https://adm1nsys.github.io/http-master/en/",
        accent_color:"white",
        // accent_color:"rgb(254, 160, 10)",
    },
    {
        name: "XN1GHT",
        logo_c: "a3",
        status: "Release",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description:"Techno magazin.",
        link:"https://adm1nsys.github.io/xn1ght/index.html",
        accent_color:"white",
    },
    {
        name: "Admin Store",
        logo_c: "a4",
        status: "Beta",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description:"The best techno store!",
        link: "https://administrati0n.github.io/admin-store/",
        accent_color:"white",
    },
    {
        name: "DesignCode",
        logo_c: "a0",
        status: "Soon",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description:"Make your apps without Code!",
        accent_color:"white",
    },
    {
        name: "AX",
        logo_c: "a5",
        status: "Beta",
        pcversion: "2.2PR",
        mobileversion: "2.2MR",
        vrversion: "2.2VRR",
        universalversion: "2.2UR",
        description:"AX - Simple helper for every day.",
        link: "/inc/AX/index.html",
        accent_color:"white",
    },
];

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
                        <div class="h2 ac05">${data.description}</div>
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
                 window.open(data.link, '_blank'); // Assuming data.link is the URL
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
                        <div class="h2 ac05">${data.description}</div>
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
                 window.open(data.link, '_blank'); // Assuming data.link is the URL
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
                        <div class="h2 ac05">${data.description}</div>
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
                 // window.open(data.link, '_blank'); // Assuming data.link is the URL
            };

            brandsList.appendChild(brendContainer);
        }
    });
}

// Call the function to display data
