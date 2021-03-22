# Software Avanzado

Repositorio que contiene todas las practicas del curso, correspondiente al primer semestre del año 2021.

Las practicas se encuentran cada una en su respectiva rama.

- [Práctica 1](https://github.com/dmomotic/practicas-sa/tree/practica1)
- [Práctica 2](https://github.com/dmomotic/practicas-sa/tree/practica2)
  - [parte 1](https://github.com/dmomotic/practicas-sa/tree/practica2/practica2/parte1)
  - [parte 2](https://github.com/dmomotic/practicas-sa/tree/practica2/practica2/parte2)
- [Práctica 3](https://github.com/dmomotic/practicas-sa/tree/practica3)
- [Práctica 4](https://github.com/dmomotic/practicas-sa/tree/practica4)
- [Práctica 5](https://github.com/dmomotic/practicas-sa/tree/practica5)
- [Práctica 6](https://github.com/dmomotic/practicas-sa/tree/practica6)
- [Práctica 7](https://github.com/dmomotic/practicas-sa/tree/practica7)



### Práctica 1

Aplicación de consola desarrollada con **Nodejs** donde se hace uso de peticiones http con los métodos: **post**, **get**, **patch** y **delete** para: **crear**, **listar**, **editar** y **eliminar** un usuario, haciendo uso de la **API** que nos proporciona el sitio [https://gorest.co.in/](https://gorest.co.in/)

1. Descargar código desde el siguiente enlace: [https://github.com/dmomotic/practicas-sa/tree/practica1](https://github.com/dmomotic/practicas-sa/tree/practica1)

2. Descomprimir el contenido y dirigirse a la carpeta "practica1"

3. Renombrar el archivo `.env.example` a `.env` y colocar la "API Key" generada en GoRest.

4. Ejecutar el comando: `node index.js`

5. Se mostrará un menú en consola, el cual puede ser utilizado para realizar las operaciones correspondientes.

6. Las pruebas de funcionamiento pueden encontrarse en el siguiente enlace: [Pruebas de funcionamiento](https://github.com/dmomotic/practicas-sa/blob/practica1/practica1/documentacion/Pruebas%20de%20funcionalidad.pdf)




### Práctica 2

##### Parte 1

Aplicación de consola desarrollada con **Nodejs** donde se solicita nombre y carnet al usuario, para generar una key secret de 32 caracteres en base al carnet del usuario y proporciona un **JWT**.

La aplicación permite validar tokens ingresados decodificando el **payload** del token ingresado y buscando en memoria el secret generado por cada carnet ingresado para realizar una verificación si el token es valido o no.

- [Pruebas de funcionamiento](https://github.com/dmomotic/practicas-sa/blob/practica2/practica2/parte1/documentacion/Pruebas%20de%20funcionalidad.pdf)

##### Parte 2

Aplicación de consola desarrollada con **Nodejs**, solicita 2 números al usuario y realiza el consumo de un web service **SOAP** proporcionado por: [http://www.dneonline.com/calculator.asmx](http://www.dneonline.com/calculator.asmx)

[Al](https://github.com/dmomotic/practicas-sa/tree/practica3/) ingresar los números la aplicación realizará una petición para obtener los resultados de la suma, resta, división y multiplicación. Si el usuario no ingresa datos validos se utilizará por defecto los números 15 y 20.

- [Pruebas de funcionamiento](https://github.com/dmomotic/practicas-sa/blob/practica2/practica2/parte2/documentacion/Pruebas%20de%20funcionalidad.pdf)

##### Instrucciones para replicar la práctica

1. Descargar código: [https://github.com/dmomotic/practicas-sa/tree/practica2](https://github.com/dmomotic/practicas-sa/tree/practica2)
2. Descomprimir el contenido y dirigirse a la carpeta "practica2"
3. Ejecutar el comando `node index.js`ya sea en la carpeta "parte1" o "parte2" para ejecutar la aplicación.
4. Se mostrará una consola interactiva donde se podrá ingresar la información solicitada.



### Práctica 3

Aplicación de consola desarrollada con **Nodejs** que simula 3 microservicios para: **clientes**, **restaurantes** y **repartidores**. Los microservicios no están comunicados en esta práctica, únicamente se simula una comunicación interna a través de sus propios endpoints. 

- [Pruebas de funcionamiento](https://github.com/dmomotic/practicas-sa/blob/practica3/practica3/documentacion/Pruebas%20de%20funcionalidad.pdf)

- [Video demostrativo](https://drive.google.com/file/d/1LrCD9PdbI_9bDajW0ssSNDW2pyNT8r64/view?usp=sharing)

##### Instrucciones para replicar la práctica

1. Descargar código de: [https://github.com/dmomotic/practicas-sa/tree/practica3/](https://github.com/dmomotic/practicas-sa/tree/practica3/)

2. Descomprimir el contenido y dirigirse a la carpeta "practica3"

3. Ejecutar en una consola el comando `node index.js` para cada uno de los microservicios.

4. Puede utilizar la herramienta **postman**  para probar el funcionamiento de cada endpoint.

5. **Microservicio Cliente**

   - POST: http://localhost:3000/api/cliente/solicitar-pedido

     - Body:

       ```json
       {
           "restaurante": "Del Puente",
           "comida": ["hamburguesa", "papas", "fresco"]
       }
       ```

       

   - GET: http://localhost:3000/api/cliente/verificar-pedido-restaurante?pedidoId=1

     - Params

       ```
       pedidoId: 1
       ```

       

   - GET: http://localhost:3000/api/cliente/verificar-pedido-repartidor?pedidoId=1

     - Paramas

       ```
       pedidoId: 1
       ```

       

6. **Microservicio Restaurante**

   - POST: http://localhost:3001/api/restaurante/recibir-pedido

     - Body:

       ```json
       {
           "restaurante": "Del Puente",
           "comida": ["hamburguesa", "papas", "fresco"]
       }
       ```

       

   - POST: http://localhost:3001/api/restaurante/informar-estado-cliente

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

   - POST: http://localhost:3001/api/restaurante/informar-estado-repartidor

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

7. **Microservicio Repartidor**

   - POST: http://localhost:3002/api/repartidor/recibir-pedido

     - Body:

       ```json
       {
           "restaurante": "Del Puente",
           "comida": ["hamburguesa", "papas", "fresco"]
       }
       ```

       

   - POST: http://localhost:3002/api/repartidor/informar-estado-cliente

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

   - POST: http://localhost:3002/api/repartidor/marcar-pedido-entregado

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

### Práctica 4

Aplicación de consola desarrollada con **Nodejs** que simula el uso de un **Enterprise Service Bus** y 3 microservicios para: **clientes**, **restaurantes** y **repartidores**.  

- [Pruebas de funcionamiento](https://github.com/dmomotic/practicas-sa/blob/practica4/practica4/documentacion/Pruebas%20de%20funcionalidad.pdf)
- [Video demostrativo](https://drive.google.com/file/d/12heuYXyt1xZE33QN2R6pjnyVwYRc3q3_/view?usp=sharing)

##### Instrucciones para replicar la práctica

1. Descargar código de: [https://github.com/dmomotic/practicas-sa/tree/practica4](https://github.com/dmomotic/practicas-sa/tree/practica4)

2. Descomprimir el contenido y dirigirse a la carpeta "practica4"

3. Ejecutar en una consola el comando `node index.js` para cada uno de los microservicios y el enterprise service bus.

4. Puede utilizar la herramienta **postman**  para probar el funcionamiento de cada endpoint.

5. **Microservicio Cliente**

   - POST: http://localhost:3030/api/cliente/solicitar-pedido

     - Body:

       ```json
       {
           "restaurante": "Del Puente",
           "comida": ["hamburguesa", "papas", "fresco"]
       }
       ```

       

   - GET: http://localhost:3030/api/cliente/verificar-pedido-restaurante?pedidoId=1

     - Params

       ```
       pedidoId: 1
       ```

       

   - GET: http://localhost:3030/api/cliente/verificar-pedido-repartidor?pedidoId=1

     - Paramas

       ```
       pedidoId: 1
       ```

       

6. **Microservicio Restaurante**

   - POST: http://localhost:3030/api/restaurante/recibir-pedido

     - Body:

       ```json
       {
           "restaurante": "Del Puente",
           "comida": ["hamburguesa", "papas", "fresco"]
       }
       ```

       

   - POST: http://localhost:3030/api/restaurante/informar-estado-cliente

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

   - POST: http://localhost:3030/api/restaurante/informar-estado-repartidor

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

7. **Microservicio Repartidor**

   - POST: http://localhost:3030/api/repartidor/recibir-pedido

     - Body:

       ```json
       {
           "restaurante": "Del Puente",
           "comida": ["hamburguesa", "papas", "fresco"]
       }
       ```

       

   - POST: http://localhost:3030/api/repartidor/informar-estado-cliente

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

   - POST: http://localhost:3030/api/repartidor/marcar-pedido-entregado

     - Body:

       ```json
       {
           "pedidoId": 1
       }
       ```

       

### Práctica 5

Aplicación de consola desarrollada con **Nodejs** donde se crea un *artefacto* para cada microservicio, por medio de la compresión de archivos.  

- [Pruebas de funcionamiento](https://github.com/dmomotic/practicas-sa/blob/practica5/practica5/documentacion/Pruebas%20de%20funcionalidad.pdf)

##### Instrucciones para replicar la práctica

1. Descargar código de: [https://github.com/dmomotic/practicas-sa/tree/practica5](https://github.com/dmomotic/practicas-sa/tree/practica5)
2. Descomprimir el contenido y dirigirse a la carpeta *practica5* y luego a la carpeta *builder*
3. Ejecutar el comando `npm install` para instalar las dependencias necesarias para el funcionamiento del proyecto
4. Ejecutar en una consola el comando `node index.js`
5. Se crearán 3 archivos comprimidos *.zip* uno por cada microservicio dentro de la carpeta `dist` con el contenido necesario para la ejecución de los mismos



### Práctica 6

Aplicación de consola desarrollada con **Nodejs** donde se implementaron pruebas unitarias para el microservicio **cliente** con la herramienta **jest** y se realizo un análisis al microservicio con **Sonarqube**.  

- [Pruebas de funcionamiento](https://drive.google.com/file/d/1Bb28jqMSbDtikDmNnm3qzLe48FSb6UT_/view?usp=sharing)

##### Instrucciones para replicar la práctica

1. Descargar código de: [https://github.com/dmomotic/practicas-sa/tree/practica6](https://github.com/dmomotic/practicas-sa/tree/practica6)
2. Descomprimir el contenido y dirigirse a la carpeta *practica6* y luego a la carpeta *cliente*
3. Ejecutar el comando `npm install` para instalar las dependencias necesarias para el funcionamiento del proyecto
4. Ejecutar en una consola el comando `node index.js`
5. Si se desea ejecutar las pruebas unitarias se puede ejecutar el comando `jest`



### Práctica 7

- [Pruebas de funcionamiento](https://drive.google.com/file/d/1HzG2zBGFDJXT8NfZPO_DTNS4AHjgsoeI/view?usp=sharing)

Aplicación de consola desarrollada con **Nodejs** donde se implementaron pruebas de sistema para el microservicio **cliente** con la herramienta **jest** y se implementó un **pipeline** en **Gitlab** el cual consta de las siguientes etapas:

- Ejecución de pruebas
- Revisión de estándares y calidad del código  
- Construcción y publicación de artefactos

##### Repositorio de Gitlab

- [https://gitlab.com/dmomotic/sa-practica7/-/tree/master](https://gitlab.com/dmomotic/sa-practica7/-/tree/master)

##### Pipeline

- [https://gitlab.com/dmomotic/sa-practica7/-/pipelines](https://gitlab.com/dmomotic/sa-practica7/-/pipelines)

##### Artefactos

- [https://gitlab.com/dmomotic/sa-practica7/-/jobs/1115617667/artifacts/download](https://gitlab.com/dmomotic/sa-practica7/-/jobs/1115617667/artifacts/download)



1. Descargar código de: [https://github.com/dmomotic/practicas-sa/tree/practica7](https://github.com/dmomotic/practicas-sa/tree/practica7)
2. Descomprimir el contenido y dirigirse a la carpeta *practica7* y luego a la carpeta *cliente*
3. Ejecutar el comando `npm install` para instalar las dependencias necesarias para el funcionamiento del proyecto
4. Ejecutar en una consola el comando `node index.js`
5. Si se desea ejecutar las pruebas unitarias se puede ejecutar el comando `npm run test`
6. Para generar el artefacto manualmente, dirigirse a la carpeta *builder* y ejecutar `npm install`
7. Ejecutar el comando `node index.js` y dentro de la carpeta *dist* se creará el archivo *cliente.zip*