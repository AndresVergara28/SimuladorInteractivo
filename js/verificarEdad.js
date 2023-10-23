const inpNombre = document.querySelector('#nombre');
const inpApellido = document.querySelector('#apellido');
const inpNacimiento = document.querySelector('#nacimiento');
const outEdad = document.querySelector('#verificarEdadOutput');
const btnCalcularEdad = document.querySelector('#verificarEdadButton');


btnCalcularEdad.addEventListener('click',verificarEdad);


function calculaEdad(e) {
    e.preventDefault();
   console.log(inpNacimiento.value);
    
}

function verificarEdad(e) {
    e.preventDefault();
    let fechaNacimiento = new Date(inpNacimiento.value);
    let isMayorEdad = false;
    let diferencia;
    while (isMayorEdad === false) {
        diferencia = (new Date() - fechaNacimiento) / (1000 * 60 * 60 * 24 * 365);
        if (diferencia > 18) {
            isMayorEdad = true;
            outEdad.innerText = 'Tu fecha de nacimiento es: ' + (fechaNacimiento.getDate() + 1) + '/' + (fechaNacimiento.getMonth() + 1) + '/' + (fechaNacimiento.getFullYear()) + ' por tanto tienes ' + Math.floor(diferencia) + ' años';
            return
        } else {
            console.log('no eres mayor de edad');
           /*  fechaNacimiento = new Date(prompt('Por Favor digitala nuevamente (aaaa-mm-dd):')); */
           return
        }
    }
}