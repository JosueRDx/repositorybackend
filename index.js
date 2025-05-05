require('dotenv').config();          // Carga las variables del archivo .env
const http = require('http');        // Importa el módulo nativo HTTP

function requestController() {       // Función que se ejecutará al recibir una solicitud
  console.log('Bienvenidos al curso');
}

const server = http.createServer(requestController);  // Crea el servidor HTTP

const PORT = process.env.PORT;      // Obtiene el puerto desde el .env

server.listen(PORT, function () {   // Inicia el servidor en el puerto indicado
  console.log("Aplicacion corriendo en: " + PORT);
});
