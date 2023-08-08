// TESTEEN CON DIFERENTES CASOS DE USO
// 2 casos positivos, 2 casos negativos, 2 casos incorrectos

// 1) Se precisa un algoritmo que reciba por prompt el mail del usuario y que valide si este mail contiene un "@". 
// Para ello se precisará un bucle que pueda recorrer cada caracter de este valor y que en base a una condición,
// refleje como alerta si "Es un mail válido" o "Es un mail inválido", en el caso de que no contenga "@".

// ---------------- 1 ----------------------
const userMail = prompt('Ingrese su mail :')
let isAtPresent = false;
for (let i = 0; i < userMail.length; i++) {
    const element = userMail[i];
    if (element === '@') {
        isAtPresent = true;
        break
    }
}

if (isAtPresent) {
    alert('Es un mail valido');
    }
else {
    alert('Es un mail invalido');
}





