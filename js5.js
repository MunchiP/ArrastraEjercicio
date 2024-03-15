
// 1. Carga de imagen
document.getElementById('fotoInput').addEventListener('change', function(event) {
    var file = this.files[0]
    
    if (file) {
      var reader = new FileReader()
  
      reader.onload = function(event) {

        var imgDisplay = document.getElementById('fotoInput');
        imgDisplay.style.backgroundImage = 'url(' + event.target.result + ')';
      }
  
      reader.readAsDataURL(file)
    } 
  })

  // 2. Funcion de moverlo de un cuadro izquierdo a la derecha
  function mover() {
    var contenedorDerecho = document.getElementById('cajaDerecha')

   
    var contenedorIzquierdo = document.querySelector('.left')
    var imagenIzquierda = contenedorIzquierdo.querySelector('.subeArchivo')

    var imagenClonada = imagenIzquierda.cloneNode(true)

    contenedorDerecho.innerHTML = ''

    contenedorDerecho.appendChild(imagenClonada)

    imagenIzquierda.style.backgroundImage = ''
    imagenIzquierda.value = ''
  }