const builder = require('zip-a-folder');

const buildClientes = async () => {
  await builder.zip('../cliente', './dist/cliente.zip')
};

const buildRepartidor = async () => {
  await builder.zip('../repartidor', './dist/repartidor.zip')
};

const buildRestaurante = async () => {
  await builder.zip('../restaurante', './dist/restaurante.zip')
};

//Self call function
(() => {
  buildClientes();
  buildRepartidor();
  buildRestaurante();
  console.log('Compresión de archivos realizada');
})();
