// CASO BLOG
// Generar una función constructora o class constructor un objeto relativo a una entrada de blog ( cadena de caracteres)
// Este objeto tiene que tener las siguientes propiedades:
// nombreDeUsuario, texto
// se deben hacer 6 variables (LA IDEA ES UQE PUSHEEN 3 OBJETOS) que contengan prompts y pregunten al usuario su nombre de usuario y su texto
// al completar estos prompt Estos objetos deben ser pusheados a un array vacío que se llame productos
// si las entradas del prompt son NULL, no se pushea nada y se le devuelve un alerta al usuario diciéndole que le falto ingresar su nombre de usuario o el texto
// al terminar con esta iteración, debemos ordenar el array por el nombre del usuario.
// si el usuario ingresa correctamente los datos, deben visualizar en la consola todos sus estados ingresados anteriormente

// Class Constructor 
class Blog {
    constructor(username, text){
        this.username = username;
        this.text = text;
    }
    nombrar(){
        return `El usuario ${this.username} dijo ${this.text}`
    }
}

// Input user objects
const products = [];

function createBlog() {
    const username = prompt('Ingrese su usuario');
    const text = prompt('Ingrese el texto');

    if (username && text) {
        const product = new Blog(username, text);
        products.push(product)
        return
    }
    else {
        return alert('Falto ingresar el usuario o el texto, intente nuevamente');
    }
}

createBlog();
createBlog();
createBlog();

// Los ordeno
products.sort((a, b)=> {
    let fa = a.username.toLowerCase();
    let fb = b.username.toLowerCase();

    if(fa < fb) {
        return -1;
    }
    if(fa > fb){
        return 1;
    }
    return 0
})

console.log(products);
