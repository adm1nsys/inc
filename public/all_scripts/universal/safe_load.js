
$(document).ready(function() {

    if(page_id === 0){
switch (c01.lang) {
    case "en":
    loadContentForLanguage()
        break;
    case "ua":
    loadContentForLanguage()
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
        loadFile("https://adm1nsys.github.io/inc/public/all_styles/blur_style.css", "css");
}else{
        loadFile("https://adm1nsys.github.io/inc/public/all_styles/no_blur_style.css", "css");
}

});




function loadContentForLanguage() {
    $("#content").load(`public/templates/a0/${c01.lang}/i01.html`, function(response, status, xhr) {
        if (status === "error") {
            var errorMsg = "There was an error loading the content: ";
            $("#content").html(errorMsg + xhr.status + " " + xhr.statusText);
        }
    });
}

function loadContentForLanguage1() {
    $("#content").load(`public/templates/a0/${c01.lang}/i02.html`, function(response, status, xhr) {
        if (status === "error") {
            var errorMsg = "There was an error loading the content: ";
            $("#content").html(errorMsg + xhr.status + " " + xhr.statusText);
        }
    });
}

function loadContentForLanguage2() {
      $("#content").load(`public/templates/a0/${c01.lang}/account/i00.html`, function(response, status, xhr) {
        if (status === "error") {
            var errorMsg = "There was an error loading the content: ";
            $("#content").html(errorMsg + xhr.status + " " + xhr.statusText);
        }
    });
}
