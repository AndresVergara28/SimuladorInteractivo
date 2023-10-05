const añoActual = 2023;
const mesActual = 10;
const diaActual = 1;
/* BOTTONES */

const carritoCompras = [];


function verificarEligibilidad() {
    alert('El expendido de bebidas embriagantes a menores de edad está prohibido, debemos verificar tu edad. Click en aceptar para continuar:');
    let isMayorDeEdad = 0;
    while (isMayorDeEdad == 0) {
        let dia = parseInt(prompt("Ingrese el numero del dia en que nació: "));
        let mes = parseInt(prompt("Ingrese el numero del mes en que nació: "));
        let año = parseInt(prompt("Ingrese el numero del año en que nació: "));
        if (añoActual - año > 18) {
            isMayorDeEdad = 1;
        } else if ((añoActual - año === 18) && (mesActual - mes > 0)) {
            isMayorDeEdad = 1;
        } else if ((mesActual - mes === 0) && (diaActual - dia >= 0)) {
            isMayorDeEdad = 1;
        } else {
            isMayorDeEdad = 0;
            alert('Lamentamos no poder continuar, no cumples con los requisitos de edad para navegar esta pagina');
        }

    }

    alert('Puedes navegar sin problemas, revisa nuestro catalogo');
}



class Producto {
    constructor(categoriaProducto, marcaProducto, nombreProducto, volumenProducto, precioProducto) {
        this.categoriaProducto = categoriaProducto.toUpperCase();
        this.marcaProducto = marcaProducto.toUpperCase();
        this.nombreProducto = nombreProducto.toUpperCase();
        this.volumenProducto = volumenProducto;
        this.precioProducto = parseInt(precioProducto);
        this.vendido = false;
    }

    vender() {
        this.vendido = true;
    }

    generarFactura() {
        alert('Acabas de comprar un ' + this.categoriaProducto + ' de la casa ' + this.marcaProducto + '. Referencia: ' + this.nombreProducto + ' x ' + this.volumenProducto + ' a un valor de: ' + this.precioProducto + ' COP');

    }
    addToCart(){
        carritoCompras.push(this.precioProducto);
    }
}
const whiskeys = [];
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Deluxe 12 años', '750 ml', '142500'));
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Master', '750 ml ', '167700'));
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Two souls', '750 ml', '176800'));
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Deluxe 12 años', '1 litro', '211400'));
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Master', '1 litro', '181500'));
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Special reserve', '750 ml', '345100'));
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Deluxe 12 años', '375 ml', '82000'));
whiskeys.push(new Producto("Whiskey", 'Buchanas', 'Red Seal', '750 ml', '800000'));



for (const whiskey of whiskeys) {
    
    whiskey.addToCart();
  
}

console.log(carritoCompras);



/*
  <div class="card-container">
            <div class="product-card">
                <img src="https://images.pexels.com/photos/104842/bmw-vehicle-ride-bike-104842.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    alt="">
                <div class="product-info">
                    <div>
                        <p>120.000</p>
                        <p>bike</p>
                    </div>
                    <figure>
                        <img src="icons/bt_add_to_cart.svg">
                    </figure>
                </div>
            </div>
        </div>

*/

/* 
function generarComprar() {
    let respuestaUser = parseInt(prompt('¿Desea conocer nuestro Catalogo de productos?. Marque 1 (PARA SI) o 2 (PARA NO)'));

    if (respuestaUser == 1) {
        for (const producto in Producto) {
            console.log(producto[nombreProducto]);
        }

        for (const propiedad in persona1) {
    console.log(persona1[propiedad]);
}

        let userSelection = prompt('Cual numero de articulo deseas comprar?');

    } else {
        console.log('Gracias por tu respuesta, continua navegando nuestra web');
    }
    
}
generarComprar(); */

/* function renderProducts(arr) {
    for (product of arr) {
        const productCard= document.createElement('div');
        productCard.classList.add('product-card');
    
        const productImg= document.createElement('img');
        productImg.setAttribute('src',product.image);
        productImg.addEventListener('click',openDetailsProduct);
    
        const productInfo= document.createElement('div');
        productInfo.classList.add('product-info');
    
        const productInfoDiv= document.createElement('div');
       
    
        const productPrice= document.createElement('p');
        productPrice.innerText= '$'+ product.price;
        const productName= document.createElement('p');
        productName.innerText= product.name;
    
        productInfoDiv.appendChild(productPrice);
        productInfoDiv.appendChild(productName);
        
        
        const productInfoFigure = document.createElement('figure');
        const productImgCart = document.createElement('img');
        productImgCart.setAttribute('src','icons/bt_add_to_cart.svg');
    
        productInfoFigure.appendChild(productImgCart);
    
        productInfo.appendChild(productInfoDiv);
        productInfo.appendChild(productInfoFigure);
    
        productCard.appendChild(productImg);
        productCard.appendChild(productInfo);
    
        productCardContainer.appendChild(productCard);
    }
}

renderProducts(productList);
 */




