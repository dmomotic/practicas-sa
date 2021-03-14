const express = require('express')
const axios = require('axios');

//Default values
const app = express()
const port = 3030

const apisClientes = {
  solicitarPedido: [],
  verificarPedidoRest: [],
  verificarPedidoRep: []
};

const apisRepartidores = {
  recibirPedido: [],
  informarEstadoCliente: [],
  marcarPedidoEntregado: []
};

const apisRestaurante = {
  recibirPedido: [],
  informarEstadoCliente: [],
  informarEstadoRepartidor: []
};

//Para poder acceder los parametros en el body de las peticiones POST
app.use(express.json());
app.use(express.urlencoded({ extended: true }));


/**********************************************************************
 *      PARA REGISTRAR LAS APIS DEL MICROSERVICIO CLIENTES
 *********************************************************************/

//Endpoint para registrar api de clientes
app.post('/esb/cliente/solicitar-pedido', (req, res) => {
  apisClientes.solicitarPedido.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para que los clientes soliciten pedidos
app.post('/api/cliente/solicitar-pedido', async (req, res) => {
  const pedido = {
    restaurante: req.body.restaurante,
    comida: req.body.comida
  }

  //Verifico que haya alguna api disponible
  if (apisClientes.solicitarPedido.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisClientes.solicitarPedido[Math.floor(Math.random() * apisClientes.solicitarPedido.length)]

  try {
    const resp = await axios.post(url, pedido);
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }
})

//Endpoint para registrar apli de cliente
app.post('/esb/cliente/verificar-pedido-restaurante', (req, res) => {
  apisClientes.verificarPedidoRest.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para verificar estado del pedido alrestaurante
app.get('/api/cliente/verificar-pedido-restaurante', async (req, res) => {
  const id = req.query.pedidoId;
  const pedido = { id };

  //Verifico que haya alguna api disponible
  if (apisClientes.verificarPedidoRest.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisClientes.verificarPedidoRest[Math.floor(Math.random() * apisClientes.verificarPedidoRest.length)]

  try {
    const resp = await axios.get(url, {params: {pedidoId: id}});
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }
})

//Endpoint para registrar apli de cliente
app.post('/esb/cliente/verificar-pedido-repartidor', (req, res) => {
  apisClientes.verificarPedidoRep.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para verificar estado del pedido al repartidor
app.get('/api/cliente/verificar-pedido-repartidor', async (req, res) => {
  const id = req.query.pedidoId;
  const pedido = { id };

  if (apisClientes.verificarPedidoRep.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisClientes.verificarPedidoRep[Math.floor(Math.random() * apisClientes.verificarPedidoRep.length)]

  try {
    const resp = await axios.get(url, {params: {pedidoId: id}});
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }

})


/**********************************************************************
 *      PARA REGISTRAR LAS APIS DEL MICROSERVICIO REPARTIDOR
 *********************************************************************/
//Endpoint para registrar api de repartidor
app.post('/esb/repartidor/recibir-pedido', (req, res) => {
  apisRepartidores.recibirPedido.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para simular un pedido recibido del restaurante
app.post('/api/repartidor/recibir-pedido', async (req, res) => {
  const pedido = {
    restaurante: req.body.restaurante,
    comida: req.body.comida
  }

  //Verifico que haya alguna api disponible
  if (apisRepartidores.recibirPedido.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisRepartidores.recibirPedido[Math.floor(Math.random() * apisRepartidores.recibirPedido.length)]

  try {
    const resp = await axios.post(url, pedido);
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }

})

//Endpoint para registrar api de repartidor
app.post('/esb/repartidor/informar-estado-cliente', (req, res) => {
  apisRepartidores.informarEstadoCliente.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para informar estado del pedido al cliente
app.post('/api/repartidor/informar-estado-cliente', async (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };

  //Verifico que haya alguna api disponible
  if (apisRepartidores.informarEstadoCliente.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisRepartidores.informarEstadoCliente[Math.floor(Math.random() * apisRepartidores.informarEstadoCliente.length)]

  try {
    const resp = await axios.post(url, {pedidoId: id});
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }
})

//Endpoint para registrar api de repartidor
app.post('/esb/repartidor/marcar-pedido-entregado', (req, res) => {
  apisRepartidores.marcarPedidoEntregado.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para marcar el pedido como entregado
app.post('/api/repartidor/marcar-pedido-entregado', async (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };
  
  //Verifico que haya alguna api disponible
  if (apisRepartidores.marcarPedidoEntregado.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisRepartidores.marcarPedidoEntregado[Math.floor(Math.random() * apisRepartidores.marcarPedidoEntregado.length)]

  try {
    const resp = await axios.post(url, {pedidoId: id});
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }

})

/**********************************************************************
 *      PARA REGISTRAR LAS APIS DEL MICROSERVICIO RESTAURANTE
 *********************************************************************/
//Endpoint para registrar api de restaurante
app.post('/esb/restaurante/recibir-pedido', (req, res) => {
  apisRestaurante.recibirPedido.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para simular un pedido recibido
app.post('/api/restaurante/recibir-pedido', async (req, res) => {
  const pedido = {
    restaurante: req.body.restaurante,
    comida: req.body.comida
  }

  //Verifico que haya alguna api disponible
  if (apisRestaurante.recibirPedido.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisRestaurante.recibirPedido[Math.floor(Math.random() * apisRestaurante.recibirPedido.length)]

  try {
    const resp = await axios.post(url, pedido);
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }

})

//Endpoint para registrar api de restaurante
app.post('/esb/restaurante/informar-estado-cliente', (req, res) => {
  apisRestaurante.informarEstadoCliente.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para informar estado del pedido al cliente
app.post('/api/restaurante/informar-estado-cliente', async (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };

  //Verifico que haya alguna api disponible
  if (apisRestaurante.informarEstadoCliente.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisRestaurante.informarEstadoCliente[Math.floor(Math.random() * apisRestaurante.informarEstadoCliente.length)]

  try {
    const resp = await axios.post(url, {pedidoId: id});
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }
})

//Endpoint para registrar api de restaurante
app.post('/esb/restaurante/informar-estado-repartidor', (req, res) => {
  apisRestaurante.informarEstadoRepartidor.push(req.body.url);
  res.send({error: false, codigo: 200, mensaje: 'URL registrada'})
})

//Endpoint para marcar el pedido como entregado
app.post('/api/restaurante/informar-estado-repartidor', async (req, res) => {
  const id = req.body.pedidoId;
  const pedido = { id };
  
  //Verifico que haya alguna api disponible
  if (apisRestaurante.informarEstadoRepartidor.length === 0) {
    res.send({ error: true, codigo: 200, mensaje: 'No se puede completar la solicitud', pedido })
    return;
  }

  //Realizo la solicitud accediendo a algunos de los microservicios registrados de forma aleatoria
  const url = apisRestaurante.informarEstadoRepartidor[Math.floor(Math.random() * apisRestaurante.informarEstadoRepartidor.length)]

  try {
    const resp = await axios.post(url, {pedidoId: id});
    res.send(resp.data)
  } catch (error) {
    res.send({error: true, codigo: 200, mensaje: 'No fue posible procesar la solicitud', pedido}) 
  }

})

//Iniciamos el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})