const express = require('express')
const app = express()
const port = 3000
let pedidoId = 1;
const pedidos = [];

//Para poder acceder los parametros en el body de las peticiones POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoint para simular un pedido realizado por el cliente
app.post('/api/cliente/solicitar-pedido', (req, res) => {
  const pedido = {
    id: pedidoId++,
    restaurante: req.body.restaurante,
    comida: req.body.comida
  }
  pedidos.push(pedido);
  res.send({error: false, codigo: 200, mensaje: 'Pedido recibido', pedido})
})

//Endpoint para verificar estado del pedido alrestaurante
app.get('/api/cliente/verificar-pedido-restaurante', (req, res) => {
  const id = req.query.pedidoId;
  const pedido = { id };
  const error = !pedidos.some(pedido => pedido.id == id);
  const mensaje = error ? `No se encontró el pedido con id ${id}` : `Pedido en proceso`;
  res.send({error, codigo: 200, mensaje, pedido})
})

//Endpoint para verificar estado del pedido al repartidor
app.get('/api/cliente/verificar-pedido-repartidor', (req, res) => {
  const id = req.query.pedidoId;
  const pedido = { id };
  const error = !pedidos.some(pedido => pedido.id == id);
  const mensaje = error ? `No se encontró el pedido con id ${id}` : `Pedido en proceso`;
  res.send({error, codigo: 200, mensaje, pedido})
})

//Iniciamos el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})