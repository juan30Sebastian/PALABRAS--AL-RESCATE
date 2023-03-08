
      var palabraSecreta = ["perro", "gato", "mariposa"];
      var palabraActual = "";
      var palabraAleatoria = Math.floor(Math.random()* palabraSecreta.length)
      var palabraSeleccionada = palabraSecreta[palabraAleatoria]
      var intentos = 7;
      

      var boxTitulo = document.querySelector(".boxTitulo");
      var boxPrincipal2 = document.querySelector(".boxPrincipal2")
      var loader = document.querySelector(".loader");
      var tituloResul = document.querySelector("#tituloResul");
      var imagen = document.querySelector(".image")
      var subPerdiste = document.querySelector(".subPerdiste");
      var btnDeNuevo = document.querySelector("#btnDeNuevo"); 
      

      function showLoader(){
        boxTitulo.style.transform = "translateY(-500px)"
        imagen.style.width = "100%";
        imagen.style.height = "100%"
        boxPrincipal2.style.transform = "translatex(700px)";
        setTimeout(function(){
          loader.style.top = "0px";
        }, 200)
      }
      function loaderReady(){
        loader.style.top = "900px";
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
            tituloResul.innerHTML = "¡Ganaste!";
            subPerdiste.innerHTML = "Bien echo"
            palabraActual = ""
            palabraAleatoria = Math.floor(Math.random()* palabraSecreta.length)
            palabraSeleccionada = palabraSecreta[palabraAleatoria]
            
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
            tituloResul.innerHTML = "¡Perdiste!";
            subPerdiste.innerHTML = "La palabra oculta era " + palabraSeleccionada
            palabraActual = ""; 
            palabraAleatoria = Math.floor(Math.random()* palabraSecreta.length)
            palabraSeleccionada = palabraSecreta[palabraAleatoria]
          }
        }
        document.getElementById("letra").value = "";
      }

      inicializarPalabra();
  btnDeNuevo.addEventListener("click", () => {
     inicializarPalabra();
     intentos = 7;
     loaderReady();
     setTimeout(function(){
      imagen.src = "../images/Horcado1.png";
     imagen.style.animation = "rotarImagen 1s  linear";
     boxTitulo.style.transform = "translateY(0px)"
        imagen.style.width = "70%";
        imagen.style.height = "90%"
        boxPrincipal2.style.transform = "translatex(0px)";
     }, 1000)
   })
   
    