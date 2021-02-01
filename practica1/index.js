require('dotenv').config()
const axios = require('axios');
const prompt = require('prompt-sync')({ sigint: true });

const varToken = process.env.GOREST_TOKEN;

//Axios global headers
axios.defaults.headers.common['Content-Type'] = 'application/json' ;
axios.defaults.headers.common['Authorization'] = 'Bearer ' + varToken;

const crearUsuario = async () => {
  const nombre = prompt('Nombre: ');
  const carnet = prompt('Carnet: ');
  try {
    const res = await axios({
      method: 'post',
      url: 'https://gorest.co.in/public-api/users',
      data: {
        name: nombre,
        gender: 'Male',
        email: carnet+'@ingenieria.usac.edu.gt',
        status: 'Active'
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

const listarUsuario = async () => {
  const id = prompt('ID del usuario: ');
  try {
    const res = await axios({
      method: 'get',
      url: `https://gorest.co.in/public-api/users/${id}`
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

const modificarUsuario = async () => {
  const id = prompt('ID del usuario: ');
  const nombre = prompt('Nombre nuevo: ');
  const carnet = prompt('Carnet nuevo: ');
  try {
    const res = await axios({
      method: 'patch',
      url: `https://gorest.co.in/public-api/users/${id}`,
      data: {
        name: nombre,
        email: carnet+'@ingenieria.usac.edu.gt',
      }
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

const borrarUsuario = async () => {
  const id = prompt('ID del usuario a eliminar: ');
  try {
    const res = await axios({
      method: 'delete',
      url: `https://gorest.co.in/public-api/users/${id}`
    })
    console.log(res.data);
  } catch (error) {
    console.log(error.response.body);
  }
}

//Menu
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
