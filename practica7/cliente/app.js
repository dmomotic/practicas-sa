let express = require("express");

let app1 = express(); // Compliant
app1.disable("x-powered-by");

let helmet = require("helmet");
let app2 = express(); // Compliant
app2.use(helmet.hidePoweredBy());

let pedidoId = 1;
const pedidos = [];

//Para poder acceder los parametros en el body de las peticiones POST
app2.use(express.json());
app2.use(express.urlencoded({ extended: true }));

//Endpoint para simular un pedido realizado por el cliente
app2.post("/api/cliente/solicitar-pedido", (req, res) => {
  const pedido = {
    id: pedidoId++,
    restaurante: req.body.restaurante,
    comida: req.body.comida,
  };
  pedidos.push(pedido);
  res.send({ error: false, codigo: 200, mensaje: "Pedido recibido", pedido });
});

//Endpoint para verificar estado del pedido alrestaurante
app2.get("/api/cliente/verificar-pedido-restaurante", (req, res) => {
  const id = req.query.pedidoId;
  const pedido = { id };
  const error = !pedidos.some((pedido) => pedido.id == id);
  const mensaje = error
    ? `No se encontró el pedido con id ${id}`
    : `Pedido en proceso`;
  res.send({ error, codigo: 200, mensaje, pedido });
});

//Endpoint para verificar estado del pedido al repartidor
app2.get("/api/cliente/verificar-pedido-repartidor", (req, res) => {
  const id = req.query.pedidoId;
  const pedido = { id };
  const error = !pedidos.some((pedido) => pedido.id == id);
  const mensaje = error
    ? `No se encontró el pedido con id ${id}`
    : `Pedido en proceso`;
  res.send({ error, codigo: 200, mensaje, pedido });
});

module.exports = app2;
