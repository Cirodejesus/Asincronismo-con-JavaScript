import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';// Traemos nuestra API

//Agregar información con post
function postData(urlApi, data) {//por parametro la url de la API y la data que vamos a guardar
  const response = fetch(urlApi, {//Se crea una estructura de datos a fetch, para que entienda que ahora no va a hacer una solicitud Get de obetener datos, si no una solicitud post de guardar datos. 
    method: 'POST',//Method con el cual vamos a enviar
    mode: 'cors', //Son los permisos que va a tener y por defecto siempre va a estar en cors. por seguridad de los datos.
    credentials: 'same-origin',//Credentials podemos pasarlas o no, por defecto va hacer same-origin, si no lo ponemos no tendria ningun inconveniente.
    headers: { //Cabeceras headers que vamos a ernviar en la solicitud para que la reconozca, por que estamos haciendo la solicitud por medio de la consola, esto significa que tenemos que decirle que tipo de valor estamos enviando.
      'Content-Type': 'application/json'//Valor application/json, para un block de datos o archivos cambiaria, en el content-type.
    },
    body: JSON.stringify(data)//Es la información que yo le quiero transmitir en este caso a esta API. la recibo con Json y con Stringify la envió como texto.
  });
  return response;//Retorna response para terminar la function postData
}

const data = {
        "title": "New Product Course",
        "price": 9999,
        "description": "A description",
        "categoryId": 1,
        "images": [
            "https://placeimg.com/640/480/any"
    ]
}  

postData(`${API}/products`, data)//Uso de la function y llamada de la API
  .then(response => response.json())//ver que Responde el servidor cuando sucede de forma correta almacenar esta información.     
  .then(data => console.log(data));//Data que ya a sido tranformada. hacemos un log para mostar la data.

