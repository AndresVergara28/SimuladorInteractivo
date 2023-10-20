const PlatziMath = {};

/* CALCULAR PROMEDIO */
PlatziMath.calculaPromedio  = function calculaPromedio(arr) {
    return promedio = (arr.reduce((acumulador, el) => acumulador + el, 0)) / (arr.length);
}
/* VARIFICAR SI ES PAR */
PlatziMath.esPar  = function esPar(arr) {
    return !(arr.length % 2);
}
/* VERIFICAR SI ES IMPAR */
PlatziMath.esImpar  = function esImpar(arr) {
    return arr.length % 2;
}
/* CALCULAR MEDIANA  */
PlatziMath.calculaMediana  = function calculaMediana(arr) {
    let mediana;
    let arrOrd = arr.sort((a, b) => a - b);
    if (!(arr.length % 2)) {
        mediana = ((arrOrd[arrOrd.length / 2]) + (arrOrd[arrOrd.length / 2 - 1])) / (2);
        return mediana;
    } else {
        mediana = arrOrd[(Math.floor(arrOrd.length / 2))];
        return mediana;
    };
}
/* CALCULAR MODA */
PlatziMath.calculaModa  = function calculaModa(arr) {
    const listaCount = {};

    /* volvemos el array un objeto con la sintaxis
        listCount = {
            key1 : value;
            key2 : value;
            key3 : value;
            key4 : value;
        } 
    */
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        if (listaCount[element]) {
            listaCount[element] += 1;
        } else {
            listaCount[element] = 1;
        }
    }

    const arrBi = Object.entries(listaCount)
    /* EL objecto hay que volverlo un array bidimensional
        para que tengamos la siguientes estructura lo que se conoce como una lista de listas. Array Bidimensional
        arrBi = [
            ['key1',value],
            ['key2',value],
            ['key3',value]
        ]

        Para sortearlo o compararlo por un valor en especifico se utilziaria el metodo Sort ( que solo funciona con arrays), por eso la necesidad de transformarlo. En este caso sortearemos de mayor a menor
    */

    let arrBiOrd = arrBi.sort((a, b) => a[1] - b[1]);
    const moda = arrBiOrd[arrBiOrd.length - 1]
    return Number(moda[0]);
}
/* CALCULAR MAXIMO */
PlatziMath.calculaMaximo  = function calculaMaximo(arr) {
    let arrOrd = arr.sort((a, b) => a - b)
    return (arrOrd[arrOrd.length - 1]);
}
/* CALCULAR MINIMO */
PlatziMath.calculaMinimo  = function calculaMinimo(arr) {
    let arrOrd = arr.sort((a, b) => a - b)
    return (arrOrd[0]);
}
/* ORDERNAR LISTAS UNIDIMENSIONAL*/
PlatziMath.ordernarListUn  = function ordernarListUn(arr) {
    let arrOrd = arr.sort((a, b) => a - b);
    console.log(arrOrd);
}
/* ORDERNAR LISTAS BIDEMENSIONALES */
PlatziMath.ordernarListBi  = function ordernarListBi(arr) {
    let arrOrd = arr.sort((a, b) => b[1] - a[1]);
    console.log(arrOrd);
}
