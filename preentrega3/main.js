// Caso Ecommerce

// Selecciono el div container
const productsContainer = document.getElementById('productos-container');

// Funcion para crear las tarjetas html por cada elemento
const generarTarjetas = array => {
    const cards = array.reduce(( acc, e ) => {
        return acc + `
        <div class='product' id='product-${e.id}'>
            <h2>${e.producto ? e.producto : "Sin nombre"}</h2>
            <figure class='container-img'>
                <img src=${e.imagen  || "notfound.jpg"} alt=${e.producto} class='img-producto'>
            </figure>
            <h3>${e.categoria ? e.categoria : 'Categoria desconocida'}</h3>
            <p class='precio'>${e.precio ? e.precio : "El precio no esta disponible"}</p>
            <p>${e.marca ? e.marca : 'Marca no disponible'}</p>
            <p class='descripcion'>${e.descripcion ? e.descripcion : 'No hay descripcion del producto'}</p>
            <button class="carrito" id="${e.id}"> 
                Agregar al Carrito
            </button>
        </div>
        `
    }, "")

    return cards;
}

// Inserto las tarjetas en el container
productsContainer.innerHTML = generarTarjetas(productos);

// Selecciono todas las tarjetas creadas
const allProductsButtons = document.querySelectorAll('.carrito');

// Funcion para agregar el evento onclick a cada boton, de sumar el objeto al localStorage
let productosCarrito = [];
const eventoProducts = (nodos, arrayProductos) => {
    for (let i = 0; i < nodos.length; i++) {
        nodos[i].onclick = (e) => {
            const id = Number(e.currentTarget.id);
            const producto = arrayProductos.find( e => e.id === id);
            productosCarrito.push(producto)
            localStorage.setItem('productosCarrito' ,JSON.stringify(productosCarrito))
            Toastify({
                text: `${producto.producto} se sumo al carrito`,
                className: "info", 
                style: {
                  background: "linear-gradient(to right, #00b09b, #96c93d)",
                }
              }).showToast();
        }
    }
}

eventoProducts(allProductsButtons, productos);