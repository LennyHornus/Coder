const productosLocalStorage = JSON.parse(localStorage.getItem("productosCarrito"));
console.log(productosLocalStorage);
const div = document.getElementById('productos-container');

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

div.innerHTML = generarTarjetas(productosLocalStorage);