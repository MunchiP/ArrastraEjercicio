

function captura() {

    var nombre = document.getElementById("nombreInput").value
    var apellido = document.getElementById("apellidoInput").value
    var programa = document.getElementById("programaInput").value
    var foto = document.getElementById("fotoInput").files[0] 

    // Validaciones minimas del formulario
    if (nombre === "") {
        alert('Nombre no puede ser vacio')
        return 
    } else if (apellido === "") {
        alert('Apellido no puede ser vacio')
        return 
    }  else if (programa === "") {
        alert('Programa no puede ser vacio')
        return 
    }   else if (foto === undefined || foto.type === undefined || !foto.type.startsWith('image/')) {
        alert('Por favor, seleccione un archivo de imagen válido (JPG, JPEG, PNG, GIF).')
        return false;
    }

    var reader = new FileReader();
    reader.onload = function(event) {
        var fotoBase64 = event.target.result

        localStorage.setItem("nombre", nombre)
        localStorage.setItem("apellido", apellido)
        localStorage.setItem("programa", programa)
        localStorage.setItem("foto", fotoBase64)

        window.location.href = "index4.html"
    };
    reader.readAsDataURL(foto) 
}