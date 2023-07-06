console.log('todo joya');
import swal from 'sweetalert';
// import swal from 'sweetalert';
// 1) Muestre un mensaje en consola que diga lo siguiente: "¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!"
// 2) Hacer una variable que almacene un número par mayor a 10.
// 3) Hacer una variable que almacene  un numero impar menor a 100.
// 4) Visualizar en consola la suma de las dos variables numéricas que hicimos.
// 5) Con un cuadro de diálogo, pregúntele el nombre al usuario que ingresa a la web y guarde su valor en una variable.
// 6) Visualizar en consola, junto al nombre del usuario, el siguiente mensaje: "Bienvenide a nuestra primera web -usuario-"
// 7) Genere una nueva variable que almacene el número 5 y que se multiplique con el número impar.
// 8) A través de un prompt, pregunte al usuario si es mayor de edad. Guarde este valor en una variable.
// 9) Reste 100 a la variable que multiplica por 5 al número impar.
// 10) Cotejar el tipo de dato del punto 3 y 5.

// DESAFÍO PRIMER) hacer un programa que pida la edad del usuario y que devuelva en una alerta, el año en que nació
swal('hola')
console.log("¡MIRÁ MAMÁAA, ESTOY PROGRAMANDO!");
let par = 12;
let impar = 99;
console.log(par + impar);
let nombreUsuario = prompt("Ingrese su nombre");
console.log('Bienvenide a nuestra primera web ' + nombreUsuario);
let cinco = 5;
let punto8 = cinco * impar;
if (confirm('Es mayor de edad?')) {
    let edadUser = prompt('Ingrese su edad')
};
let punto9 = punto8 - 100;
console.log(typeof impar, typeof nombreUsuario);

// Desafio
alert('Vamos con el desafio ahora');
let edadUserD = prompt('Que edad tiene?');
alert('Naciste en el : ' + (2023 - edadUserD));

