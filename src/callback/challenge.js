//Importar el paquete a nuestro codigo
const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest;
//LLamado de las APIs
const API = 'https://api.escuelajs.co/api/v1'; //root de la API, tiene recursos,
//como producto o category que se pueden ir llamando poco a poco.

/**function Que nos permite recibir la Url de la api,
   y el callback Que va hacer una function anonima para 
   recibir la solicitud que nos esta entregando el llamado a esta API,
   Recibiremos la data o el error que nos pueda entregar la llamada*/
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();//Control del flujo del llamado

  xhttp.open('GET', urlApi, true);//conexión con nuesta API
  xhttp.onreadystatechange = function(event)  { //Escucha diferentes estados, que tiene la solicitud y con esto saber cuando esta disponible la información.
    if (xhttp.readyState === 4) {//Varios estados 0 No inicia, 1 Loading, 2 Ejecuta valor send, 3 Interactuando, 4 Completado la llamada.
      if(xhttp.status === 200) { //Validar valor 200 y es que ha sido correcta.
        callback(null, JSON.parse(xhttp.responseText));//dos valores uno como valor nulo y otro como transformación de la información. lo recibimos como texto y transformamos a objetos.
      }else {
        const error = new Error('Error' + urlApi);//para decirle que le error fue un elemento de la API.
        return callback(error, null);//Retorna el callback, pasandole el valor de error y luego el valor de nulo por que no le esto poasandole ningun dato.
      }
    } 
  }
  xhttp.send();//LLamado de Http.send para que se ejecute el codigo que previamente hemos creado
}

//se invoca el metodo fetchData() pasandole como argumentos la varible API concatenada con la cadena 'products' para acceder a la URL de la API deseada, y una función anónima que recibe 2 parámetros (un objeto de error y un arreglo que almacena todos los objetos traidos por la API).
fetchData(`${API}/products`, function (error1, data1) {
    //se valida si existe un error, en caso de que exista se detiene el proceso y se imprime el error
    if (error1) return console.error(error1);
    //se invoca nuevamente la función fetchData con el fin de acceder a un objeto puntual del arreglo data1, se envia como parámetros la url de la API apuntando al atributo del primer objeto de arreglo data1 y nuevamente una función anónima.
    fetchData(`${API}/products/${data1[0].id}`, function (error2, data2) {
        //si en este punto se identifica un error se imprime en consola y se detiene el proceso
        if (error2) return console.error(error2);
        //Se invoca nuevamente la funcion fetchData con el fin de acceder a la categoria, se envían como parametros la url de la API con la concatenación de 'Categories' y el atributo Id de categoria del objeto data2 de la función anterior
        //en este caso puntual se hace uso de Optional Caining el cual hace una evalucación de las propiedades de un objeto y en vez de arrojar un error devuelve undefined en caso que la propiedad no exista o sea null.
        //igual que las anteriores e envia una funcion anonima con 2 argumentos, un objeto Error y un objeto de datos
        fetchData(`${API}/categories/${data2?.category?.id}`, function (error3, data3) {
            //se valida si existe error, en caso de que exista se detiene el proceso y se imprime el error
            if (error3) return console.error(error3);
            //Se imprime el objeto en la posición 1 del arreglo de los objetos obtenidos en el metodo invocado inicialmente
            console.log(data1[0]);
            //Se imprime el titulo del objeto que se consultó en la seguna invocación de la función
            console.log(data2.title);
            //Se imprime el nombre de la categoria a la que pertenece el objeto que se consultó en la seguna invocación del método.
            console.log(data3.name);
        });
  });
});