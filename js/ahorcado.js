var ganadas = 0;
var perdidas = 0;
var acertadas = 0;



;     var palabraSecreta = ["perro", "gato", "cocodrilo"];
      var palabraActual = "";
      var palabraAleatoria = Math.floor(Math.random()* palabraSecreta.length)
      var palabraSeleccionada = palabraSecreta[palabraAleatoria]
      var subtituloCategoria = document.querySelector(".subtituloCategoria");
      var intentos = 7;
      var borradorIcon = document.querySelector("#borradorIcon")
      var numberBorrador = 0;
      var penIcon = document.querySelector("#penIcon")
      var numberPen = 0;
      
    var boxEyes = document.querySelector(".boxEyes");
    var boxPuntuaciones = document.querySelector(".boxPuntuaciones");
    var tituloOriginal = "Animales";
    var numberGanadas = document.querySelector("#numberGanadas");
  var numberPerdidas = document.querySelector("#numberPerdidas");  
  var numberAcertadas = document.querySelector("#numberAcertadas");
      var tituloResul = document.querySelector("#tituloResul");
      var imagen = document.querySelector(".image")
      var btnDeNuevo = document.querySelector("#btnDeNuevo"); 
      

  mostrarPuntuacion();
  function mostrarPuntuacion(){
    

    localStorage.setItem("ganadas", ganadas);
    var datoGanadas = localStorage.getItem("ganadas");
    if(datoGanadas){
    numberGanadas.innerHTML = datoGanadas;
    }
  }


      iniciarBoxEyes();
      function iniciarBoxEyes(){
          setTimeout(function(){
            boxEyes.style.height = "20%";
            tituloResul.style.display = "none";
        }, 5000)
}


function showLoader(){        
  setTimeout(function(){
    boxEyes.style.height = "100%";
    boxPuntuaciones.style.display = "flex";
  }, 1500);

  setTimeout(function(){
    tituloResul.style.display = "flex";
    boxPuntuaciones.style.transform = "translatey(0px)";
    subtituloCategoria.innerHTML = tituloOriginal;
  }, 3000);

}

     
     
      
      function inicializarPalabra() {
        
        for (var i = 0; i < palabraSeleccionada.length; i++) {
          palabraActual += "_ ";
        }
        document.getElementById("palabra").textContent = palabraActual;
      }

      function verificarLetra() {
        var letra = document.getElementById("letra").value.toLowerCase();
        var encontrada = false;
        
        
        for (var i = 0; i < palabraSeleccionada.length; i++) {
          if (palabraSeleccionada[i] == letra) {
            palabraActual = palabraActual.substring(0, i*2) + letra + palabraActual.substring(i*2 + 1);
            encontrada = true;
          }
        }
        if (encontrada) {
          document.getElementById("palabra").textContent = palabraActual;
          if (palabraActual.indexOf("_") == -1) {
            showLoader();
            
            if(intentos === 7){
              tituloResul.innerHTML = "!La acertaste a la primera!";
              numberAcertadas.innerHTML = acertadas += 1;;
            
              if(acertadas >= 1){
                numberPen += 1;  
                
              }
              if(numberPen >= 1){
                penIcon.style.animation = " animarNotificationIcon  0.5s linear alternate infinite";
              }
            }else{
              tituloResul.innerHTML = "¡Ganaste!";
              ganadas += 1;
              mostrarPuntuacion();
            if(ganadas % 2 === 0){
              numberBorrador += 1;  
            }
            if(numberBorrador >= 1){
              borradorIcon.style.animation = " animarNotificationIcon  0.5s linear alternate infinite";
            }
              
            }

          }
        } else {
          intentos--;
          switch(intentos){
           case 6:
              imagen.src = "../images/Horcado2.png"
            break;
           case 5:
              imagen.src = "../images/Horcado3.png"
           break;
           case 4:
              imagen.src = "../images/Horcado4.png"
           break;
           case 3:
              imagen.src = "../images/Horcado5.png"
              break;
           case 2:
              imagen.src = "../images/Horcado6.png"
           break;
           case 1:
              imagen.src = "../images/Horcado7.png"
              break;
           case 0:
             imagen.src = "../images/Horcado8.png"
             break;
          }
          
          if (intentos == 0) {
            showLoader();
            numberPerdidas.innerHTML = perdidas += 1;;
            setTimeout(function(){
              tituloResul.innerHTML = "¡Perdiste!";
            }, 3000);
            setTimeout(function(){
              tituloResul.innerHTML = "La palabra oculta era " + palabraSeleccionada;
            }, 5000);
    
            
          }
        }
        document.getElementById("letra").value = "";
      }

      inicializarPalabra();
  btnDeNuevo.addEventListener("click", () => {
    
    
    
    inicializarPalabra();  
    
      palabraAleatoria = Math.floor(Math.random()* palabraSecreta.length)
      palabraSeleccionada = palabraSecreta[palabraAleatoria]
      palabraActual = "";
      for (var i = 0; i < palabraSeleccionada.length; i++) {
        palabraActual += "_ ";
      }
      document.getElementById("palabra").textContent = palabraActual;
    
      
  
    
    intentos = 7;
     boxEyes.style.height = "20%";
     boxPuntuaciones.style.transform = "translatey(1000px)"
     tituloResul.style.display = "none";
     imagen.src = "../images/Horcado1.png";
     setTimeout(function(){
     boxPuntuaciones.style.display = "none";
     }, 2000)
   })
   
    borradorIcon.addEventListener("click", () => {
      if(numberBorrador >= 1){
        intentos++;
        switch(intentos){
          case 6:
             imagen.src = "../images/Horcado2.png"
           break;
          case 5:
             imagen.src = "../images/Horcado3.png"
          break;
          case 4:
             imagen.src = "../images/Horcado4.png"
          break;
          case 3:
             imagen.src = "../images/Horcado5.png"
             break;
          case 2:
             imagen.src = "../images/Horcado6.png"
          break;
          case 1:
             imagen.src = "../images/Horcado7.png"
             break;
          case 0:
            imagen.src = "../images/Horcado8.png"
            break;
         }
      
        numberBorrador--;
      if(numberBorrador <= 0){
        borradorIcon.style.animation = " animarNotificationIcon  0.5s linear alternate";
      }
    }
    })
  

      
    
    penIcon.addEventListener("click", () => {
      if(numberPen >= 1){
        
        var palabraAdivinar = palabraSeleccionada;
        var letras = palabraAdivinar.split("");
        var indice = Math.floor(Math.random()* letras.length)
        var letra = letras[indice];
        letras.splice(indice, 1);
        palabraAdivinar = letras.join("");
        subtituloCategoria.innerHTML = letra
        
        setTimeout(function(){
          subtituloCategoria.textContent = tituloOriginal;
        }, 3000)

        
        numberPen--;
        if(numberPen <= 0){
        penIcon.style.animation = " animarNotificationIcon  0.5s linear alternate";
      }
    }
  });