const productCardContainerList = document.querySelector('.products-section-container');
const productCardContainerCart = document.querySelector('#carrito-de-compras');
const totalDisplay = document.querySelector('#total_display');
class Producto {
    constructor(codigo, name, secondName, category, volume, price, image) {
        this.codigo = codigo;
        this.name = name;
        this.secondName = secondName;
        this.category = category;
        this.volume = volume;
        this.price = parseInt(price);
        this.image = image;
    }
    addToCart(cod) {
        /* const isThisInCart = verificarSiExiste(cod);

        function verificarSiExiste(id) {
            const resultadoBuscarEnCarrito = carritoCompras.find((el) => el.codigo === id);
            if (resultadoBuscarEnCarrito) {
                return true;
            } else {
                return false
            }
        }

        if (isThisInCart) {
            console.log((carritoCompras.find((el) => el.codigo === id)).count);
            return

        } else {
            carritoCompras.push({
                codigo: this.codigo,
                name: this.name,
                secondName: this.secondName,
                category: this.category,
                price: this.price,
                volume: this.volume,
                image: this.image,
                count: 1,
                total: this.price,
            });
            renderizarEnCarrito(carritoCompras[id]);
        } */
        /*   function verificarSiExiste(obj) {
              const isThisInCart = carritoCompras.find((el)=el.index === obj.index);
              console.log(isThisInCart);
          }
          verificarSiExiste(this); */
        /* carritoCompras.push(this); */
        /*  renderizarEnCarrito(this); */
        console.log(carritoCompras);
    }
}

const whiskeys = [];
whiskeys.push(new Producto(0, 'Buchanas', 'Deluxe 12 años', 'Whiskey', '750 ml', 142500, '../recursos/imagenes/deluxe12años750.png'));
whiskeys.push(new Producto(1, 'Buchanas', 'Deluxe Master', 'Whiskey', '750 ml', 167700, '../recursos/imagenes/deluxeMaster750.png'));
whiskeys.push(new Producto(2, 'Buchanas', 'Two souls', 'Whiskey', '750 ml', 176800, '../recursos/imagenes/deluxeTwoSoul750.png'));
whiskeys.push(new Producto(3, 'Buchanas', 'Deluxe 12 años', 'Whiskey', '1 Litro', 211400, '../recursos/imagenes/deluxe12años1000.png'));
whiskeys.push(new Producto(4, 'Buchanas', 'Deluxe Master', '1 Litro', 'Whiskey', 181500, '../recursos/imagenes/deluxeMaster1000.png'));
whiskeys.push(new Producto(5, 'Buchanas', 'Special reserve', 'Whiskey', '750 ml', 345100, '../recursos/imagenes/specialReserve750.png'));
whiskeys.push(new Producto(6, 'Buchanas', 'Deluxe 12 años', 'Whiskey', '375 ml', 82000, '../recursos/imagenes/deluxe12años375.png'));
whiskeys.push(new Producto(7, 'Buchanas', 'Red Seal', '750 ml', 'Whiskey', 800000, '../recursos/imagenes/redSealBlended750.png'));

const carritoCompras = [];

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
        addToCartImg.setAttribute('id', `${whiskey.codigo}`);
        addToCartImg.addEventListener('click', addToContainerCart)
        addToCartImg.classList.add('add-to-card-button');
        productCardContainerList.appendChild(productCard);
        productCard.appendChild(addToCartImg);
    }
}
renderProducts(whiskeys);

function addToContainerCart(e) {
    const codigo = parseInt(e.target.id);
    /* renderizarEnCarrito(arr); */
    const isThisInCart = verificarSiExiste(codigo);
    
    function verificarSiExiste(id) {
        const resultadoBuscarEnCarrito = carritoCompras.find((el) => el.codigo === id);
        if (resultadoBuscarEnCarrito) {
            return true;
        } else {
            return false
        }
    }

    function actualizarTotal(valor) {
        totalDisplay.innerText = valor + ' COP';
    }

    function actualizarDOM(quantity,total,codigo) {
        const quantityOut = document.getElementById(`quantity_product_${codigo}`);
        const totalOut = document.getElementById(`total_product_${codigo}`);
        quantityOut.innerText = quantity;
        totalOut.innerText = total + ' COP';
    }


    if (!isThisInCart) {
        const whiskey = whiskeys.find((el) => el.codigo === codigo)
        const producto = {
            codigo: whiskey.codigo,
            name: whiskey.name,
            secondName: whiskey.secondName,
            category: whiskey.category,
            price: whiskey.price,
            volume: whiskey.volume,
            image: whiskey.image,
            count: 1,
            total: whiskey.price,
        };
        carritoCompras.push(producto);
        renderizarEnCarrito(producto);
        const totalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
        actualizarTotal(totalFactura);
    } else {
        const whiskey = whiskeys.find((el) => el.codigo === codigo)
        const position = getIndex(whiskey);
        function getIndex(producto) {
            for (let index = 0; index < carritoCompras.length; index++) {
                const codigo = carritoCompras[index].codigo;
                if ((codigo === whiskey.codigo)) {
                    return index;
                }else{'no conseguimmos nada'}
            }
        }
        carritoCompras[position].total += carritoCompras[position].price ; 
        carritoCompras[position].count++; 
        const cantidad = carritoCompras[position].count;
        const total = carritoCompras[position].total;
        const totalFactura = carritoCompras.reduce((acumulador, el) => acumulador + el.total, 0);
        actualizarTotal(totalFactura);
        actualizarDOM(cantidad,total,codigo);
        
        return
    }

}

function renderizarEnCarrito(el) {
    /*    <div class="product-card">
     <div class="product-card-image">
         <img src="../recursos/imagenes/deluxe12años1000.png" alt="">
     </div>
     <div class="product-card-information-container">
         <div class="product-card-information">
             <h3 class="product-name">Bucanas</h3>
             <h3 class="product-second-name">Deluxe 12 años</h3>
             <h4 class="product-category">Whiskey</h4>
             <p class="product-volume">750ml</p>
             <p class="product-price">150000 COP</p>
         </div>
         <div class="product-card-modificar">
             <p class="restar">-</p>
             <p class="cantidad">X</p>
             <p class="sumar">+</p>
         </div>
     </div>
 </div> */


    const productCard = document.createElement('div');
    productCard.classList.add('product-card');

    /* Creando div class= 'product-card-image' */
    const divProductCartImage = document.createElement('div');
    divProductCartImage.classList.add('product-card-image');

    /* Creando img src ='' class ='product-image' */
    const imgCarrito = document.createElement('img');
    imgCarrito.classList.add('product-image');
    imgCarrito.setAttribute('src', el.image);

    /* Agregando la imagen al div class = 'product-card-image' */
    divProductCartImage.appendChild(imgCarrito);

    /* --------------------------------------- */

    /* Creando div class = 'product-card-information-container */
    const divProductCardInformationContainer = document.createElement('div');
    divProductCardInformationContainer.classList.add('product-card-information-container');

    /* Crenaod el primer div interno de div class ='product-card-information-container */
    const divPrimerInterno = document.createElement('div');
    divPrimerInterno.classList.add('product-card-information');

    /* Creando elementos internos del primerInterno = ' product-card-information' */
    const productName = document.createElement('h3');
    productName.classList.add('product-name');
    productName.innerText = el.name;
    divPrimerInterno.appendChild(productName);

    const productSecondName = document.createElement('h3');
    productSecondName.classList.add('product-second-name');
    productSecondName.innerText = el.secondName;
    divPrimerInterno.appendChild(productSecondName);

    const productCategory = document.createElement('h4');
    productCategory.classList.add('product-category');
    productCategory.innerText = el.category;
    divPrimerInterno.appendChild(productCategory);

    const productVolume = document.createElement('p');
    productVolume.classList.add('product-volume');
    productVolume.innerText = el.volume;
    divPrimerInterno.appendChild(productVolume);

    const productPrice = document.createElement('p');
    productPrice.classList.add('product-price');
    productPrice.setAttribute('id',`total_product_${el.codigo}`);
    productPrice.innerText = el.price + ' COP';
    divPrimerInterno.appendChild(productPrice);

    /* Creando segundo interno de div class = 'product-card-information-container' */

    const divSegundoInterno = document.createElement('div');
    divSegundoInterno.classList.add('product-card-modificar');

    /* Creando elementos interno del segundo Div interno */
    const restarSign = document.createElement('p');
    restarSign.classList.add('restar');
    restarSign.innerText = '-';
    restarSign.addEventListener('click', reducirCantidad);
    divSegundoInterno.appendChild(restarSign);

    const cantidad = document.createElement('p');
    cantidad.classList.add('cantidad');
    cantidad.setAttribute('id',`quantity_product_${el.codigo}`);
    cantidad.innerText = el.count;
    divSegundoInterno.appendChild(cantidad);

    const sumarSign = document.createElement('p');
    sumarSign.classList.add('sumar');
    sumarSign.innerText = '+';
    sumarSign.addEventListener('click', agregarCantidad);
    divSegundoInterno.appendChild(sumarSign);

    divProductCardInformationContainer.appendChild(divPrimerInterno);
    divProductCardInformationContainer.appendChild(divSegundoInterno);

    /* Agregando  Div al Div productCard */

    productCard.appendChild(divProductCartImage);
    productCard.appendChild(divProductCardInformationContainer);

    /* Agregando productCart a la Contenedor de productos del carrito */
    productCardContainerCart.appendChild(productCard);

}




function agregarCantidad(obj) {
    obj.count++;
    console.log('Agregaron otro del mismo');
    console.log(obj);

}

function reducirCantidad(e) {
    e.preventDefault();
    console.log('eliminaron uno del mismo');
    console.log(carritoCompras);


}




