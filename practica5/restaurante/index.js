const express = require('express')
const app = express()
const port = 3001
let pedidoId = 1;
const pedidos = [];

//Para poder acceder los parametros en el body de las peticiones POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoint para simular un pedido recibido
app.post('/api/restaurante/recibir-pedido', (req, res) => {
  const pedido = {
    id: pedidoId++,
    restaurante: req.body.restaurante,
    comida: req.body.comida
  }
  pedidos.push(pedido);
  res.send({error: false, codigo: 200, mensaje: 'Pedido recibido', pedido})
})

//Endpoint para informar estado del pedido al cliente
app.post('/api/restaurante/informar-estado-cliente', (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };
  const error = !pedidos.some(pedido => pedido.id == id);
  const mensaje = error ? `NO PROCESADO` : `EN PROCESO`;
  res.send({error, codigo: 200, mensaje, pedido})
})

//Endpoint para avisar a repartidor
app.post('/api/restaurante/informar-estado-repartidor', (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };
  const error = !pedidos.some(pedido => pedido.id == id);
  const mensaje = error ? `NO PROCESADO` : `EN PROCESO`;
  res.send({error, codigo: 200, mensaje, pedido})
})

//Iniciamos el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})