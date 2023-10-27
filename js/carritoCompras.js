const productCardContainer = document.querySelector('.products-section-container');

class Producto {
    constructor(name, secondName, category, volume, price, image) {
        this.name = name;
        this.secondName = secondName;
        this.category = category;
        this.volume = volume;
        this.price = parseInt(price);
        this.image = image;
    }
    generarFactura() {
        alert('Acabas de comprar un ' + this.categoriaProducto + ' de la casa ' + this.marcaProducto + '. Referencia: ' + this.nombreProducto + ' x ' + this.volumenProducto + ' a un valor de: ' + this.precioProducto + ' COP');

    }
    addToCart() {
        this.vendido = true;
        carritoCompras.push(this);
    }
}

const whiskeys = [];
whiskeys.push(new Producto('Buchanas', 'Deluxe 12 años', 'Whiskey', '750 ml', 142500, '../recursos/imagenes/deluxe12años750.png'));
whiskeys.push(new Producto('Buchanas', 'Deluxe Master', 'Whiskey', '750 ml', 167700, '../recursos/imagenes/deluxeMaster750.png'));
whiskeys.push(new Producto('Buchanas', 'Two souls', 'Whiskey', '750 ml', 176800, '../recursos/imagenes/deluxeTwoSoul750.png'));
whiskeys.push(new Producto('Buchanas', 'Deluxe 12 años', 'Whiskey', '1 litro', 211400, '../recursos/imagenes/deluxe12años1000.png'));
whiskeys.push(new Producto('Buchanas', 'Deluxe Master', '1 litro', 'Whiskey', 181500, '../recursos/imagenes/deluxeMaster1000.png'));
whiskeys.push(new Producto('Buchanas', 'Special reserve', 'Whiskey', '750 ml', 345100, '../recursos/imagenes/specialReserve750.png'));
whiskeys.push(new Producto('Buchanas', 'Deluxe 12 años', 'Whiskey', '375 ml', 82000, '../recursos/imagenes/deluxe12años375.png'));
whiskeys.push(new Producto('Buchanas', 'Red Seal', '750 ml', 'Whiskey', 800000, '../recursos/imagenes/redSealBlended750.png'));


function renderProducts(whiskeys) {
    for (const whiskey of whiskeys) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML =
            `
        <div class="product-card-image">
                <img src=${whiskey.image} alt="" class="product-image">
        </div>
        <div class="product-card-information">
                <h3 class="product-name">${whiskey.name}</h3>
                <h3 class="product-second-name">${whiskey.secondName}</h3>
                <h4 class="product-category">${whiskey.category}</h4>
                <p class="product-volume">${whiskey.volume}</p>
                <p class="product-price">${whiskey.price} COP</p>
        </div>
        <img src="../recursos/iconos/bt_add_to_cart.svg" alt="Añadir al carrito logo" class="add-to-card-button">
        
        
    
        `



        productCardContainer.appendChild(productCard);
    }
}

renderProducts(whiskeys);

function mostrarCatalogo() {
    for (const whiskey of whiskeys) {
        console.log('Para realizar la comprar seleccionar numero de Codigo:');
        console.log('Cod:' + whiskey.codigoProducto + ' - ' + whiskey.nombreProducto + ' - ' + whiskey.volumenProducto + ' - ' + whiskey.precioProducto);
    }
    let firstDecision = parseInt(prompt('Digita 1 para comprar o 2 para saltar:'));

    if (firstDecision === 1) {
        let codProductChosen = parseInt(prompt('Digite el Cod del producto que desea añadir al carrito: '));
        whiskeys[codProductChosen].addToCart();
        let secondDecision = parseInt(prompt('¿Desea seguir comprando? Digite 1 = SI , 2 = NO'));
        while (secondDecision === 1) {
            let codProductChosen = parseInt(prompt('Digite el Cod del producto que desea añadir al carrito: '));
            whiskeys[codProductChosen].addToCart();
            secondDecision = parseInt(prompt('¿Desea seguir comprando? Digite 1 = SI , 2 = NO'));
        }

    } else { return (console.log('Catalogo de productos mostrado')) };
};

function finalizarPedido() {
    const resultadoReduce = carritoCompras.reduce((acumulador, el) => acumulador + el.precioProducto, 0);
    for (const item of carritoCompras) {
        console.log(item);
    }

    console.log('El total de su pedido seria: ' + resultadoReduce + ' COP');
}

