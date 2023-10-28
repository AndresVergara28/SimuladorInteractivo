const productCardContainer = document.querySelector('.products-section-container');
class Producto {
    constructor(index,name, secondName, category, volume, price, image) {
        this.index = index;
        this.name = name;
        this.secondName = secondName;
        this.category = category;
        this.volume = volume;
        this.price = parseInt(price);
        this.image = image;
    }
    generarFactura() {
        console.log('Acabas de comprar un ' + this.category + ' de la casa ' + this.name + '. Referencia: ' + this.secondName + ' x ' + this.volume + ' a un valor de: ' + this.price + ' COP');

    }
    addToCart() {
        carritoCompras.push(this);
        console.log(carritoCompras);
    }
}
const whiskeys = [];
whiskeys.push(new Producto(0,'Buchanas', 'Deluxe 12 años', 'Whiskey', '750 ml', 142500, '../recursos/imagenes/deluxe12años750.png'));
whiskeys.push(new Producto(1,'Buchanas', 'Deluxe Master', 'Whiskey', '750 ml', 167700, '../recursos/imagenes/deluxeMaster750.png'));
whiskeys.push(new Producto(2,'Buchanas', 'Two souls', 'Whiskey', '750 ml', 176800, '../recursos/imagenes/deluxeTwoSoul750.png'));
whiskeys.push(new Producto(3,'Buchanas', 'Deluxe 12 años', 'Whiskey', '1 Litro', 211400, '../recursos/imagenes/deluxe12años1000.png'));
whiskeys.push(new Producto(4,'Buchanas', 'Deluxe Master', '1 Litro', 'Whiskey', 181500, '../recursos/imagenes/deluxeMaster1000.png'));
whiskeys.push(new Producto(5,'Buchanas', 'Special reserve', 'Whiskey', '750 ml', 345100, '../recursos/imagenes/specialReserve750.png'));
whiskeys.push(new Producto(6,'Buchanas', 'Deluxe 12 años', 'Whiskey', '375 ml', 82000, '../recursos/imagenes/deluxe12años375.png'));
whiskeys.push(new Producto(7,'Buchanas', 'Red Seal', '750 ml', 'Whiskey', 800000, '../recursos/imagenes/redSealBlended750.png'));


function renderProducts(whiskeys) {
    for (const whiskey of whiskeys) {
        const productCard = document.createElement('div');
        productCard.classList.add('product-card');
        productCard.innerHTML =
            `
            <div class="product-card-image">
                    <img src=${whiskey.image} alt="Imagen referencia de ${whiskey.category}" class="product-image">
            </div>
            <div class="product-card-information">
                    <h3 class="product-name">${whiskey.name}</h3>
                    <h3 class="product-second-name">${whiskey.secondName}</h3>
                    <h4 class="product-category">${whiskey.category}</h4>
                    <p class="product-volume">${whiskey.volume}</p>
                    <p class="product-price">${whiskey.price} COP</p>
            </div>           
            `
        const addToCartImg = document.createElement('img');
        addToCartImg.setAttribute('src', 'bt_add_to_cart.svg');
        addToCartImg.setAttribute('id', `${whiskey.index}`);
        addToCartImg.addEventListener('click',agregar)
        addToCartImg.classList.add('add-to-card-button');
        productCardContainer.appendChild(productCard);
        productCard.appendChild(addToCartImg);

    }
}

function agregar(e) {
    const algo = parseInt(e.target.id);
    whiskeys[algo].addToCart();
}

const carritoCompras = [];

renderProducts(whiskeys);

