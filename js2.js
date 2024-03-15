//Codigo para movimiento de objetos drag and drop

let objetos = document.getElementsByClassName("imagen");
let cajaDer = document.getElementById('cajaDerecha');
let cajaIzq = document.getElementById('cajaIzquierda');

// Agregar event listener solo una vez
cajaDer.addEventListener("dragover", function (e) {
    e.preventDefault(); 
});

cajaDer.addEventListener("drop", function (e) {
    let selected = document.querySelector('.imagen.dragging');
    cajaDer.appendChild(selected);
    selected.classList.remove('dragging');
});

for (let imagen of objetos) {
    imagen.addEventListener("dragstart", function (e) {
        console.log('entro al for ');
        e.target.classList.add('dragging');
    });
}

// for (imagen of objetos) {
//     imagen.addEventListener("dragstart", function (e) {
//         console.log('entro al for primer evento')
//         let selected = e.target

//         cajaDer.addEventListener("dragover", function (e) {
//             e.preventDefault()
//         })

//         cajaDer.addEventListener("drop", function (e) {
//             cajaDer.appendChild(selected)
//             selected = null
//         })

//     })
// }