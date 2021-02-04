//To use env files and avoid exposing API keys
require('dotenv').config()
//Http request
const axios = require('axios');
//Ask values to user
const prompt = require('prompt-sync')({ sigint: true });

//Gorest token
const varToken = process.env.GOREST_TOKEN;

//Axios global headers
axios.defaults.headers.common['Content-Type'] = 'application/json' ;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + varToken;

//Function to create a user
const crearUsuario = async () => {
  const nombre = prompt('Nombre: ');
  const carnet = prompt('Carnet: ');
  //Post request with axios
  try {
    const res = await axios({
      method: 'post',
      url: 'https://gorest.co.in/public-api/users',
      data: {
        name: nombre,
        gender: 'Male',
        email: carnet+'@mail.com',
        status: 'Active'
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

//Getting a user by id
const listarUsuario = async () => {
  const id = prompt('ID del usuario: ');
  try {
    //Get request with axios
    const res = await axios({
      method: 'get',
      url: `https://gorest.co.in/public-api/users/${id}`
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

//Modifying user's name and email by id
const modificarUsuario = async () => {
  const id = prompt('ID del usuario: ');
  const nombre = prompt('Nombre nuevo: ');
  const carnet = prompt('Carnet nuevo: ');
  try {
    //Patch request with axios
    const res = await axios({
      method: 'patch',
      url: `https://gorest.co.in/public-api/users/${id}`,
      data: {
        name: nombre,
        email: carnet+'@mail.com',
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

//Deleting a user by id
const borrarUsuario = async () => {
  const id = prompt('ID del usuario a eliminar: ');
  try {
    //Delete request with axios
    const res = await axios({
      method: 'delete',
      url: `https://gorest.co.in/public-api/users/${id}`
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

//Auto call anonymous function to show a menu
(async () => {
  let option = 0;
  while (option != 5) {
    console.log('*********************************');
    console.log('1. Crear usuario');
    console.log('2. Listar usuario');
    console.log('3. Modificar usuario');
    console.log('4. Borrar usuario');
    console.log('5. Salir');

    option = Number(prompt('SELECCIONA UNA OPCIÓN: '));

    if (option == 1) await crearUsuario();
    else if (option == 2) await listarUsuario();
    else if (option == 3) await modificarUsuario();
    else if (option == 4) await borrarUsuario();

    console.log('\n\n');
  }
})();
