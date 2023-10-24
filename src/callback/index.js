//function que suma dos valores
function sum(num1, num2) {
    return num1 + num2;
}
//2 function callback
function calc(num1, num2, callback) {
    return callback(num1, num2);
}

console.log('suma', calc (15, 23, sum));


//Otro ejemplo con callback LLamar devuelta por argumentos
//Se puede utilizar cualquier otro nombre que no sea callback
function sum(num1, num2) {
    return num1 + num2;
}

function rest(num1, num2) {
    return num1 - num2;
}

function mult(num1, num2) {
    return num1 * num2;
}

function div(num1, num2) {
    return num1 / num2;
}

function calc(num1, num2, OperacionesMat) {
    return OperacionesMat(num1, num2);
};

console.log('suma', calc(2, 2, sum));
console.log('resta', calc (2, 2, rest));
console.log('multiplición', calc(3, 2, mult));
console.log('división', calc (2, 2, div));

//Otro ejemplo con callback
//function anonima
//Callback es una funcion que recibe otra funcion para ser ejecutada segun sea el caso.
setTimeout(function() {
    console.log('Hola JavaScript');
}, 5000);

function gretting(name) {
    console.log(`Hola ${name}`);
}
setTimeout(gretting, 2000, 'Oscar') 


//Ejemplo del playground
function execCallback(callback) {
    window.setTimeout(() => {
      callback();
    }, 2000);
  }
      console.log('Execute myFunc 2s after');



 