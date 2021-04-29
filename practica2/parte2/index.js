//Ask values to user
const prompt = require('prompt-sync')({ sigint: true });
//To consume SOAP service
const { soap } = require('strong-soap');

//WSDL
const url = 'http://www.dneonline.com/calculator.asmx?WSDL';

// Hardcoded request
const requestArgs = {
  "intA": 15,
  "intB": 20,
};

//Just to print operators and sign
const printOperation = (sign) => {
  console.log(`\n${requestArgs.intA} ${sign} ${requestArgs.intB}`);
}

//Create client to consume SOAP
const createClient = () => (new Promise((resolve, reject) => (
  soap.createClient(url, {}, (err, client) => {
    if (err) {
      reject(err);
    } else {
      resolve(client);
    }
  })))
);

//It resolves Add
const invokeAdd = client => (new Promise((resolve, reject) => (
  client.Add(requestArgs, (err, result) => (
      err ? reject(err) : resolve(result)
  ))
)));

//It resolves Subtract
const invokeSubtract = client => (new Promise((resolve, reject) => (
  client.Subtract(requestArgs, (err, result) => (
      err ? reject(err) : resolve(result)
  ))
)));

//It resolves Multiply
const invokeMultiply = client => (new Promise((resolve, reject) => (
  client.Multiply(requestArgs, (err, result) => (
      err ? reject(err) : resolve(result)
  ))
)));

//It resolves Divide
const invokeDivide = client => (new Promise((resolve, reject) => (
  client.Divide(requestArgs, (err, result) => (
      err ? reject(err) : resolve(result)
  ))
)));

//Auto call anonymous fuction
(async () => {
  try {
    //Getting integers from user
    const intA = Number(prompt('Entero número 1: '));
    const intB = Number(prompt('Entero número 2: '));

    //Checking for valid inputs or it'll use default values
    if(Number.isInteger(intA)){
      requestArgs["intA"] = intA;
    }
    if(Number.isInteger(intB)){
      requestArgs["intB"] = intB;
    }

    //Create client
    const client = await createClient();
    //Getting result of all operations
    const addResult = await invokeAdd(client);
    const subtractResult = await invokeSubtract(client);
    const multiplyResult = await invokeMultiply(client);
    const divideResult = await invokeDivide(client);
    //Printing the results
    printOperation('+');
    console.log(JSON.stringify(addResult));
    printOperation('-');
    console.log(JSON.stringify(subtractResult));
    printOperation('*');
    console.log(JSON.stringify(multiplyResult));
    printOperation('/');
    console.log(JSON.stringify(divideResult));
    console.log('');
  } catch (error) {
    console.log('algo salio mal')
  }
})();

