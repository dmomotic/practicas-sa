const app = require('./app');
const port = 3000

//Iniciamos el servidor
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})