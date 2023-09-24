/* let dia=parseInt(prompt("Ingrese el numero del dia en que nació: ")); 
let mes=parseInt(prompt("Ingrese el numero del mes en que nació: ")); 
let año=parseInt(prompt("Ingrese el numero del año en que nació: ")); */

const añoActual = 2023;
const mesActual = 9;
const diaActual = 24;

function verificarEligibilidad() {
    let isMayorDeEdad = 0;
    while (isMayorDeEdad==0) {
        let dia = parseInt(prompt("Ingrese el numero del dia en que nació: "));
        let mes = parseInt(prompt("Ingrese el numero del mes en que nació: "));
        let año = parseInt(prompt("Ingrese el numero del año en que nació: "));
        if (añoActual - año > 18) {
            isMayorDeEdad= 1;
        } else if ((añoActual - año === 18) && (mesActual - mes > 0)) {
            isMayorDeEdad= 1;
        } else if ((mesActual - mes === 0) && (diaActual - dia >= 0)) {
            isMayorDeEdad= 1;
        } else {
            isMayorDeEdad= 0;
        }
        console.log('No hemos salido del ciclo while');
    }

    console.log('ya salimos del ciclo while');
}

verificarEligibilidad();




