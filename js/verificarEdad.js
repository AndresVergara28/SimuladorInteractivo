const inpNombre = document.querySelector('#nombre');
const inpApellido = document.querySelector('#apellido');
const inpNacimiento = document.querySelector('#nacimiento');
const outEdad = document.querySelector('#verificarEdadOutput');
const btnCalcularEdad = document.querySelector('#verificarEdadButton');

console.log(inpNombre);
console.dir(inpApellido);

btnCalcularEdad.addEventListener('click',calculaEdad)
function calculaEdad() {
    outEdad.innerHTML='Hola';
    
}