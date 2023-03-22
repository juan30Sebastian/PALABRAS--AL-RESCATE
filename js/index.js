



var titulo = document.querySelector(".titulo").innerHTML = localStorage.getItem("ganadas")


var boxCategorias = document.querySelector(".boxCategorias");
var boxLoader = document.querySelector(".boxLoader");
var loaderReady = false;

showLoader();
function showLoader(){
    
    boxLoader.style.display = "flex";
}

function hideLoader(){
    boxCategorias.style.transform = "translatey(0px)"
    boxLoader.style.transform = "translateY(900px)"; 
}

setTimeout(function() {
    hideLoader();
}, 10000);