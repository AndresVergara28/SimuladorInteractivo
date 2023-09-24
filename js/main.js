/* let dia=parseInt(prompt("Ingrese el numero del dia en que nació: ")); 
let mes=parseInt(prompt("Ingrese el numero del mes en que nació: ")); 
let año=parseInt(prompt("Ingrese el numero del año en que nació: ")); */

/* PARA MEJOR EXPERIENCIA SE RECOMIENDA ACTUALIZAR LOS VALORES */
const añoActual = 2023;
const mesActual = 9;
const diaActual = 24;

function verificarEligibilidad() {
    alert('El expendido de bebidas embriagantes a menores de edad está prohibido, debemos verificar tu edad. Click en aceptar para continuar:');
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
            alert('Lamentamos no poder continuar, no cumples con los requisitos de edad para navegar esta pagina');
        }
        
    }

    alert('Puedes navegar sin problemas, revisa nuestro catalogo');
}


/* verificarEligibilidad(); */






