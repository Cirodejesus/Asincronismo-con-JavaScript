//Promesa ejemplo base, fundamento de como funciona una promesa
const promise = new Promise(function (resolve, reject) {
    resolve('hey!')
})

const cows = 19;

const countCows = new Promise(function (resolve, reject) {
    if (cows > 10) {
        resolve(`We have ${cows} cows on the farm`);
    }else {
        reject("There is no cows on the farm");
    }
});

// elementos que conforma una promesa
countCows.then((result) => {//para anidar algunas solicitudes encadenadas
    console.log(result);
}).catch((error) => { // El catch para el reject, vota el mensaje del reject si no se cumple la validación del if.
    console.log(error);
}).finally(() => console.log('Finally'));//cuando ya termino. No importa si fue resolve o reject, si no la terminación de esta ejecución a llegado a su final

//Playground
function delay(time, message) {
   return new Promise(function (resolve, reject) {
 window.setTimeout(() => {
    resolve(message);
 }, time);
 
});
}
   console.log('"Hello after 2s"');
 
      
      
     
 
//Ejercios personal
 setTimeout(function() {
    console.log('Hello World');
 },2000);
 console.log('setTimeout() example..');


 function saludos(){
    console.log("Hola Mundo");
  }
  
  setTimeout(saludos, 3000);