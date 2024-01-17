//universal scripts

$(document).ready(function() {
      if (dev_mode === true) {
        document.getElementById("adm").style.display = "flex";
    } else {
        document.getElementById("adm").style.display = "none";
    }
  setTimeout(function() {
lscrenclose() 
}, 1000); 
});
