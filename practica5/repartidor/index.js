const express = require('express')
const app = express()
const port = 3002;
let pedidoId = 1;
const pedidos = [];

//Para poder acceder los parametros en el body de las peticiones POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//Endpoint para simular un pedido recibido del restaurante
app.post('/api/repartidor/recibir-pedido', (req, res) => {
  const pedido = {
    id: pedidoId++,
    restaurante: req.body.restaurante,
    comida: req.body.comida
  }
  pedidos.push(pedido);
  res.send({error: false, codigo: 200, mensaje: 'Pedido recibido', pedido})
})

//Endpoint para informar estado del pedido al cliente
app.post('/api/repartidor/informar-estado-cliente', (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };
  const error = !pedidos.some(pedido => pedido.id == id);
  const mensaje = error ? `NO PROCESADO` : `EN PROCESO`;
  res.send({error, codigo: 200, mensaje, pedido})
})

//Endpoint para marcar el pedido como entregado
app.post('/api/repartidor/marcar-pedido-entregado', (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };
  const error = !pedidos.some(pedido => pedido.id == id);
  const mensaje = error ? `NO ENTREGADO` : `ENTREGADO`;
  res.send({error, codigo: 200, mensaje, pedido})
})

//Iniciamos el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})