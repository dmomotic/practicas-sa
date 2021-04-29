//Ask values to user
const prompt = require('prompt-sync')({ sigint: true });
//Generate and validate JWT
const jwt = require('jsonwebtoken');
//Generate unique secret for each user
const { v4: uuidv4 } = require('uuid');

//This object will containt all the secrets
const secrets = {};

//Aks for user's info
const getPayload = () => {
  const nombre = prompt('Nombre: ');
  const carnet = prompt('Carnet: ');
  return { nombre, carnet };
}

//Function to create a token from payload and secret
const getToken = (payload, secret) => jwt.sign(payload, secret, { algorithm: 'HS256' });

//It generates jwt based on user info
const generateToken = async () => {
  //Getting payload
  const payload = getPayload();
  //Getting a unique secret and removing dashes
  const secret = uuidv4().split('-').join('');
  //Saving secret in memory
  secrets[payload.carnet] = secret;
  //JWT
  const token = getToken(payload, secret);

  console.log(`\n*** Secret para el carnet ${payload.carnet} ***\n${secret}`);
  console.log(`\n*** JWT generado ***\n${token}`);
}

//It asks for a token and says if it's valid or invalid
const validateToken = async () => {
  //Asking the token to the user
  const token = prompt('Token: ');
  //Getting payload
  const payload = jwt.decode(token);
  let result = '';
  //Checking if a payload is an object
  if (payload instanceof Object) {
    //Getting secret from memory with carnet in payload
    const carnet = payload?.carnet;
    const secret = secrets[carnet] || 'without-secret';
    //Creating new token 
    const generatedToken = getToken(payload, secret);
    //Printing result
    result = token === generatedToken ? 'TOKEN VÁLIDO' : 'TOKEN INVALIDO';
  }
  else {
    result = 'TOKEN INVALIDO';
  }
  console.log(`\n**** ${result} ****`);
}

//Auto call anonymous function to show a menu
(async () => {
  let option = 0;
  while (option != 3) {
    console.log('*********************************');
    console.log('1. Generar token');
    console.log('2. Validar token');
    console.log('3. Salir');

    option = Number(prompt('SELECCIONA UNA OPCIÓN: '));

    if (option == 1) await generateToken();
    else if (option == 2) await validateToken();

    console.log('\n');
  }
})();
