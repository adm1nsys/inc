//universal scripts
const lscreen = 1;
function getFontSizeRelativeToWindow(baseSize, minSize, maxSize) {
    let calculatedSize = window.innerWidth * baseSize / 1000;
    if (calculatedSize < minSize) {
        return minSize + "px";
    } else if (calculatedSize > maxSize) {
        return maxSize + "px";
    } else {
        return calculatedSize + "px";
    }
}
const shtoraT = document.createElement("div");
shtoraT.classList.add("lsc04");
document.body.appendChild(shtoraT);

const shtoraTtotle = document.createElement("div");
shtoraTtotle.style.fontSize = getFontSizeRelativeToWindow(50, 50, 200);
shtoraTtotle.classList.add("lsc01");
shtoraTtotle.textContent = "Admin inc.";
shtoraT.appendChild(shtoraTtotle);

const shtoraB = document.createElement("div");
shtoraB.classList.add("lsc03");

document.body.appendChild(shtoraB);


const shtoraBtotle = document.createElement("div");
shtoraBtotle.style.fontSize = getFontSizeRelativeToWindow(10, 15, 200);
shtoraBtotle.classList.add("lsc02");
shtoraBtotle.textContent = "Made by Admin inc.";
shtoraB.appendChild(shtoraBtotle);

const shtorac111 = document.createElement("div");
shtorac111.style.display = "flex";
shtorac111.style.width = "100%";
shtorac111.style.height = "100%";
shtorac111.style.opacity = "1";
shtorac111.style.left = "0px";
shtorac111.style.right = "0px";
shtorac111.style.position = "fixed";
shtorac111.style.top = "0px";
shtorac111.style.bottom = "0px";
shtorac111.style.background = "none";
shtorac111.style.zIndex = "999999999999999999";
shtorac111.style.transition = "0.4s";
shtorac111.style.justifyContent = "center";
shtorac111.style.justifyItems = "center";
shtorac111.style.alignItems = "center";
shtorac111.style.alignContent = "center";
shtorac111.style.overflow = "hidden";
document.body.appendChild(shtorac111);

// function animatels01() {
//     if(linec1111.style.left === "-100%"){
//         linec1111.style.transition = "1s";
//         setTimeout(function() {
//             linec1111.style.left = "100%";
//         }, 100); 
//     } else if(linec1111.style.left === "100%"){
//         linec1111.style.transition = "0s";
//         setTimeout(function() {
//             linec1111.style.left = "-100%";
//         }, 100); 
//     }
// }




const linec111 = document.createElement("div");
linec111.classList.add("lsc05");

const linec1111 = document.createElement("div");

linec1111.classList.add("lsc06");


if(lscreen === 1){
document.body.appendChild(shtoraT);

document.body.appendChild(shtoraB);

document.body.appendChild(shtorac111);

shtorac111.appendChild(linec111);
linec111.appendChild(linec1111);
// setInterval(animatels01, 1100); 

} else if (lscreen === 0){
//     //
    document.body.removeChild(shtoraT);

document.body.removeChild(shtoraB);

document.body.removeChild(shtorac111);
}

function lscrenclose() {

linec111.style.height = "0px";

  setTimeout(function() {
shtorac111.style.opacity = "0";
  setTimeout(function() {
shtoraT.style.top = "-200%";
}, 500); 

  setTimeout(function() {
shtoraB.style.bottom = "-200%";
}, 550); 

  setTimeout(function() {
document.body.removeChild(shtoraT);

document.body.removeChild(shtoraB);

document.body.removeChild(shtorac111);

}, 1600); 
}, 1000); 




}


