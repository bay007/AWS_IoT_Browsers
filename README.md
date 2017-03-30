# S3_CRUD_buket

Browser applications connect to AWS IoT using MQTT over the Secure WebSocket Protocol. 
There are some important differences between Node.js and browser environments, so a few adjustments are 
necessary when using this SDK in a browser application.

1-Crear el archivo package.json con npm init
2-Crear un archivo index.js y poner el codigo 

const IoT = require('aws-iot-device-sdk');
module.exports.IoT = IoT;

3-Ejecutar el comando browserify index.js -o aws-iot-device-sdk-4-browser.js
4-Importar el archivo en el archivo HTML <script src="aws-iot-device-sdk-4-browser.js"></script>



En el archivo index.js debajo de las lineas de codigo deberemos comenzar a escribir nuestro codigo de el aplicativo.

-Se puede trabajar con el archivo index.html, pero para pruduccion habra que ejecutar el
comando gulp