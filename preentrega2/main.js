// CASO ECOMMERCE
// Generen con un función constructora o class constructor 5 objeto relativos a productos.
// Este objeto tiene uqe tener los siguientes propiedades:
// - nombre, precio, cantidad, categoria, id.
// Estos objetos deben ser pusheados a un array vacío que se llame productos
// al tener la data de nuestros productos, se debe hacer uso de un método de array que ordene a los elementos por su nombre (sort).
// luego debemos mandar un prompt, que se aloje en una variable, que le pregunte al usuario qué quiere comprar.
// debemos usar un método de array que busque a ese elemento, que tome su valor de nombre y precio y que mande un alerta al usuario, diciéndole que el producto 
// ya está preparado para ir a su domicilio, que salio x dinero y agradecer por su combra.

// Creo el class contructor
class Producto {
    constructor (nombre, precio, cantidad, categoria, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.cantidad = cantidad;
        this.categoria = categoria;
        this.id = id;
    }
    nombrarProducto(){
        return `El producto seleccionado es: ${this.nombre}, tiene un precio de ${this.precio}. Ya esta preparado para ir a su domicilio`;
    }
}

// Creo las instancias de los productos
const producto1 = new Producto('Lapicera', 100, 25, 'Utiles', 1);
const producto2 = new Producto('Microondas', 30000, 3, 'Electrodomesticos', 2);
const producto3 = new Producto('Lavandina', 1500, 300, 'Limpieza', 3);
const producto4 = new Producto('Fideos', 500, 11, 'Comida', 4);
const producto5 = new Producto('Remera Azul', 2500, 6, 'Vestimenta', 5);

// Los pusheo al array vacio
const productos = [];
productos.push(producto1, producto2, producto3, producto4, producto5);

// Los ordeno
productos.sort((a, b)=> {
    let fa = a.nombre.toLowerCase();
    let fb = b.nombre.toLowerCase();

    if(fa < fb) {
        return -1;
    }
    if(fa > fb){
        return 1;
    }
    return 0
})

// Prompt al usuario
const userResponse = prompt('Que producto desea comprar?');

// Buscamos el producto
const productoSeleccionado = productos.find((producto)=>{
    if (producto.nombre === userResponse) {
        return producto;
    }
})

// Si existe el producto devolvemos el mensaje exitoso, sino le decimos al usuario que no lo tenemos
alert(productoSeleccionado ? productoSeleccionado.nombrarProducto() : 'No contamos con ese producto');