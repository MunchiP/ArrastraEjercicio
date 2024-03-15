window.onload = function() {

    var nombre = localStorage.getItem("nombre")
    var apellido = localStorage.getItem("apellido")
    var programa = localStorage.getItem("programa")
    var fotoBase64 = localStorage.getItem("foto")

    console.log(nombre)
    console.log(apellido)
    console.log(programa)


    document.getElementById("nombreRes").innerText = nombre
    document.getElementById("apellidoRes").innerText = apellido
    document.getElementById("programaRes").innerText = programa

    imagenElement = document.createElement("img")
    imagenElement.src = fotoBase64


    document.getElementById("fotoRes").appendChild(imagenElement)
};
