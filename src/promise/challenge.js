//import node-fetch despues de instalarlo por terminal npm i node-fetch
import fetch from "node-fetch";
const API = 'https://api.escuelajs.co/api/v1';

//función que va a recibir como argumento la url que queremos llamar y esto retornará el llamado de fecth: una promesa que utilizamos then, catch o finally, segun sea el caso y con esto hacer multiples elementos, para el llamado del primer recurso, productos el segundo un producto en particular y el tercero la catgoria a la cual pertenece el segundo elemento de la petición que estamos haciendo.
function fetchData(urlApi) {
  return fetch(urlApi);
};

//Prueba
//Llamado a la api de forma correcta
// fetchData(`${API}/products`)
//   .then(response => response.json())//.then Para saber que hay en su respuesta,//Transforma la data que me esta regresando a un objeto json.
//   .then(products => {//Mostrarlo para saber que incluye
//     console.log(products);
//   })
//   .then(() => { //Se pueden agregar varios .then si fuera el caso. dependiendo de la logica.
//     console.log('hola')
//   })
//   .catch(error => console.log(error));

//Logica para hacer varios llamados
fetchData(`${API}/products`)
  .then(response => response.json())//.then Para saber que hay en su respuesta//Transforma la data que me esta regresando a un objeto json.
  .then(products => {//Mostrarlo para saber que incluye
    console.log(products)
    return fetchData(`${API}/products/${products[0].id}`)//Retorna para llamar fetchData a una segunda petición, para asi llamar a un producto en particular.
  })
  .then(response => response.json())//Otro .then para traer esa data.//Este response se transforma para que sea un objeto Json
  .then(product => {//Ahora si puedo tener un producto y con esto mostrarlo nuevamente.
    console.log(product.title); //Mostrar Aqui.
    return fetchData(`${API}/categories/${product.category.id}`)//Retorna para llamar fetchData a una segunda petición pero esta vez se llama de un producto la category en particular, para asi llamar a un producto en particular.
  })
  .then(response => response.json())//Nuevamente se transforma en un Json, para que se pueda leer, la category.
  .then(category => {
    console.log(category.name);
  })
  .catch(err => console.log(err)) //Dectar errores
  .finally(() => console.log('Finally'));



 