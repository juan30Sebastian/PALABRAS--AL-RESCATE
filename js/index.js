var boxLoader = document.querySelector(".boxLoader");
var loaderReady = false;

showLoader();
function showLoader(){
    if(loaderReady === false){
    boxLoader.style.display = "flex";
    }
}

function hideLoader(){
    boxLoader.style.transform = "translateY(900px)";
    loaderReady = true
}

setTimeout(function() {
    hideLoader();
}, 10000);