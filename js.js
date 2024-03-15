// Llamo los elementos del html para boton

var boton = document.getElementById('btnCheck')
var checkBox = document.getElementById('check')

checkBox.addEventListener("change", function(){
    if (checkBox.checked) {
        boton.classList.add("btnClick")
        boton.removeAttribute("disabled")
    } else {
        boton.classList.remove("btnClick");
        boton.setAttribute("disabled", "true")
    }
})


//Codigo para pasises

var pais = document.getElementById('Pais')
//Mexico
var depMexico = document.getElementById('DepMx')
var ciuMexico = document.getElementById('CiuMx')
//Usa
var depUsa = document.getElementById('DepUsa')
var ciuUsa = document.getElementById('CiuUsa')
//Col
var depCol = document.getElementById('DepCol')
var ciuCola = document.getElementById('CiuAra')
var ciuColr = document.getElementById('CiuRis')

function buscar(){

    var mensaje = "Pais: " + pais.options[pais.selectedIndex].text

    var paisValor = pais.value
    //Mexico
    var dmValor = depMexico.options[depMexico.selectedIndex].text
    var cmValor = ciuMexico.options[ciuMexico.selectedIndex].text
    //Usa
    var duValor = depUsa.options[depUsa.selectedIndex].text
    var cuValor = ciuUsa.options[ciuUsa.selectedIndex].text

    //Mexico
    if (paisValor === 'Mx') {
        depMexico.style.display = 'block'
        if (dmValor === '') {
            ciuMexico.style.display = 'none'    
        } else {
            ciuMexico.style.display = 'block'
        }
        document.getElementById('Resultado').innerHTML = mensaje + '<br>' + 'Estado: ' +  dmValor + '<br>' + ' Ciudad: ' +  cmValor
    } else {
        depMexico.style.display = 'none'
        ciuMexico.style.display = 'none'
    }

    //Usa
    if (paisValor === 'Usa') {
        depUsa.style.display = 'block'
        if (duValor === '') {
            ciuUsa.style.display = 'none'    
        } else {
            ciuUsa.style.display = 'block'
        }
        document.getElementById('Resultado').innerHTML = mensaje + '<br>' + 'Estado: ' +  duValor + '<br>' + ' Ciudad: ' +  cuValor
    } else {
        depUsa.style.display = 'none'
        ciuUsa.style.display = 'none'
    }

    //Col

    var dcValor = depCol.value
    var ccAValor = ciuCola.value
    var ccRValor = ciuColr.value


    var dcValor1 = depCol.options[depCol.selectedIndex].text
    var ccAValor1 = ciuCola.options[ciuCola.selectedIndex].text
    var ccRValor1 = ciuColr.options[ciuColr.selectedIndex].text

    //Colombia
    if (paisValor === 'Col') {
        
        depCol.style.display = 'block'
        if (dcValor === '') {

        } else if (dcValor === 'CiuAra') {
            ciuCola.style.display = 'block'  
            ciuColr.style.display = 'none'
            document.getElementById('Resultado').innerHTML = mensaje + '<br>' + 'Estado: ' +  dcValor1 + '<br>' + ' Ciudad: ' +  ccAValor1 
        } else if (dcValor === 'CiuRis') {
            ciuColr.style.display = 'block'
            ciuCola.style.display = 'none'
            document.getElementById('Resultado').innerHTML = mensaje + '<br>' + 'Estado: ' +  dcValor1 + '<br>' + ' Ciudad: ' +  ccRValor1 
        }  
    } else {
        depCol.style.display = 'none'
        // ccAValor.style.display = 'none'
        // ccRValor.style.display = 'none'
        // El selector no el valor
        ciuCola.style.display = 'none'
        ciuColr.style.display = 'none'
        }
}