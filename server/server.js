const express = require('express');
const socketIO = require('socket.io');
const http = require('http');
const path = require('path');

const app = express();


//DEFINIMOS EL PUERTO POR DEFECTO.
const port = process.env.PORT || 3000;


//SERVIMOS EL CONTENIDO ESTÁTICO.
const publicPath = path.resolve(__dirname, '../public');
app.use(express.static(publicPath));


//CREAMOS SERVIDOR HTTP, APTO PARA EL USO DE SOCKETS.
let server = http.createServer(app);

server.listen(port, (err) => {
    if (err) throw new Error(err);
    console.log(`Servidor corriendo en puerto ${ port }`);
  });

//CONFIGURAMOS EL SOCKET.
module.exports.io = socketIO(server);

require('./sockets/socket');
