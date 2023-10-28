import fetch from 'node-fetch';
const API = 'https://api.escuelajs.co/api/v1';

//1, function que implementa la logica de async
async function fetchData(urlApi) { //Por debajo fetch utiliza el concepto de la promesas
  const response = await fetch(urlApi);//ir por los datos 
  const data =  await response.json();//Esperar la transformación
  return data;//Retorna los datos que llegan desde la API, hacia nuestro usuario.
}

//Function que se encarga de hacer todas las solicitudes, a un producto en particular y la categoria de este producto, para luego mostrarlo en consola
const anotherFunction = async (urlApi) => {
  try { //manejando errores en functiones asincronas
    const products = await fetchData(`${urlApi}/products`);
    const product = await fetchData(`${urlApi}/products/${products[0].id}`);
    const category = await fetchData(`${urlApi}/categories/${product.category.id}`);
    // const user = await fetchData(`${urlApi}/users/${product.user}`);

    console.log(products)
    console.log(product.title);
    console.log(category.name);
    // console.log(user);

  } catch (error) {
    console.error(error);
  }
}

anotherFunction(API);



const name = 'Gerardo';
const surname = 'Fernández';
const telephone = '321-4589134';
// "Old syntax"
//const userInfo = 'User info: ' + name + ' ' + surname + ' ' + telephone;
// "New syntax"
const userInfo = `User info: ${name} ${surname} ${telephone}`;

console.log(userInfo);

