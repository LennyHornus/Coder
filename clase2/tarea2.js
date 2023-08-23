// PARA CADA PUNTO, QUIERO QUE SE EVALÚEN TODOS LOS CASOS POSIBLES PRESENTADOS EN LA EJEMPLIFICACIÓN, ASÍ VERIFICAMOS QUE NUESTROS ALGORITMOS FUNCIONAN EN LA TOTALIDAD 
// DE COMPARACIONES POSIBLES.
// COMO TODAVÍA NO SABEMOS HACER CÓDIGO REUTILIZABLE, VAMOS A TENER QUE HACER LA CANTIDAD DE VARIABLES Y ESTRUCTURAS NECESARIAS PARA PODER COMPROBAR TODOS LOS CASOS.
// VAN A TENER QUE CREAR MUCHAS VARIABLES, CON RESPECTO A SUS IDENTIFICADORES, USEN LOS NOMBRES QUE QUIERAN, PERO QUE TENGAN SENTIDO
// LES RECOMIENDO QUE NO COPIEN Y PEGUEN <3

// 1) Crear una estructura condicional que compare el valor de una variable con un color del semáforo (rojo, verde o amarillo) 
// y devuelva un mensaje en consola en true si puede avanzar o false si no. Si no se ingresa un color válido, 
// se debe devolver un mensaje en consola que diga: Error: color de semáforo inválido.
let verde = true;
let rojo, amarillo = false; // se puede inicializar varios let en una linea
const as = 0, ad = 0; // tmb con el const 
let eleccionSemaforo = prompt('Elija un color de semaforo');

if (eleccionSemaforo = verde) {
    console.log('Puede avanzar');
}
else{
    console.log('No puede avanzar');
}
// EJEMPLIFICACIÓN DE CASOS
//     "Rojo" --> false
//     "Verde" --> true
//     "Amarillo" --> false
//     "SALKDASD" --> false


// 2) Crear una estructura condicional que compare el valor de una variable con las vocales y devuelva un mensaje en consola "Es una vocal" si letra es una vocal o "No es una vocal" si no lo es.
const letraUser = prompt('Elija una letra');
const vocales = ['a', 'e', 'i', 'o', 'u']
if (!vocales.includes(letraUser)) {
    console.log('No es una vocal');
}
else{
    console.log('Es una vocal');
}
// EJEMPLIFICACIÓN DE CASOS
//     'a' // true
//     'n' // false
//     '1' // false


// 3) Crear una estructura condicional que compare el valor de una variable con las consonantes y devuelva true si letra es una consonante o false si no lo es
const letraUser2 = prompt('Elija una letra de nuevo');

if (vocales.includes(letraUser2)) {
    console.log('No es una consonante');
}
else{
    console.log('Es una consonante');
}
// EJEMPLIFICACIÓN DE CASOS
// EJ: 'a' // false
//     'n' // true
//     '2130213' // false

// 4) Crear una estructura condicional que compare tres valores booleanos: pasoTests, tieneMultasImpagas y pagoImpuestos, 
// y devuelva un mensaje en consola que sea true si una persona está habilitada para renovar su carnet de conducir o false si no. 
// Una persona puede renovar su carnet si pasó los tests, no tiene multas impagas y pagó todos los impuestos.
const tests = confirm('Paso todos los tests?');
const multas = confirm('Tiene multas impagas?');
const impuestos = confirm('Pago todos los impuestos?');

if (tests === true & multas === true & impuestos === true) {
    console.log('Puede renovar el carnet');
}
else{
    console.log('No puede renovar el carnet');
}
// EJEMPLIFICACIÓN DE CASOS
// (true, true, true)    // false
// (true, true, false)   // false
// (true, false, true)   // true
// (true, false, false)  // false
// (false, true, true)   // false
// (false, true, false)  // false
// (false, false, true)  // false
// (false, false, false) // false


// 5) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola "Es par" si el numero es par, o "Es impar" si el numero es impar. (AVERIGUAR SOBRE OPERADOR RESTO EN JAVASCRIPT, googlear es parte de nuestro trabajo)

const number = prompt('ingrese un numero')
if (number%2 === 0) {
    console.log('Es par');
}
else{
    console.log('Es impar');
}

// 6) Crear una estructura condicional que tome como valor un numero y devuelva un mensaje en consola 
// "Es positivo" si el número es positivo o "Es negativo" si el número es negativo
const punto6 = prompt('Ingrese un numero');
if(punto6 > 0){
    console.log('Es positivo');
}
else{
    console.log('Es negativo');
}



// EJEMPLIFICACIÓN DE CASOS
// esPositivoONegativo(3)  // 'Es positivo'
// esPositivoONegativo(-5) // 'Es negativo'




