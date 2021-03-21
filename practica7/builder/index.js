const builder = require('zip-a-folder');

const buildClientes = async () => {
  await builder.zip('../cliente', './dist/cliente.zip')
};

//Self call function
(async () => {
  await buildClientes();
  console.log('Compresión de archivos realizada');
})();
