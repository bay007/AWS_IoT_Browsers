var AWSIoT = require('aws-iot-device-sdk');
var AWS = require('aws-sdk');

////////////////////////////////////////////////////////

function enviarMensaje(){
			IoT.send('pub/sub',"This is the message one");
			console.log("Mensaje enviado");
		}
		
	AWS.config.region = 'us-east-1'; // Region

	AWS.config.credentials = new AWS.CognitoIdentityCredentials({
		IdentityPoolId: 'us-east-1:73235e35-ef92-4f42-842e-e2e7f57b09f5',
		RoleSessionName: 'web'
	},{
		region: 'us-east-1'
	});
	
	

let client,topic;
var IoT = {
	connect:function(_accessKeyId,_host,_secretKey,_SessionToken,_topic){
		topic=_topic;
		var options = {
			"region":"us-east-1",
			"protocol": 'wss',
			"host":_host,
			"accessKeyId":_accessKeyId,
			"sessionToken":_SessionToken,
			"secretKey":_secretKey,
			"autoResubscribe":true,
			"port": 443
			};
			client = AWSIoT.device(options);
	
		client.on('connect', onConnect);
		 
		 function onConnect(){
			client.subscribe(topic);
			enviarMensaje();
			console.log("cliente suscrito");
		};

		client.on('message', onMessage); 
		function onMessage(topic, message){
			console.log("Mensaje recibido: "+message);
		}

		client.on('close', onClose); 
		function onClose(){
			enviarMensaje();
			console.log("cliente Cerrado");
		}
	},

	send: function(message){
        client.publish(topic, message); // send messages
    }  

};

AWS.config.credentials.get(function(err) {
	if (err){
	return console.log(err);
	} 
	
	let token= AWS.config.credentials.sessionToken;
	let accessKeyId=AWS.config.credentials.accessKeyId;
	let secretKey=AWS.config.credentials.secretAccessKey;
	console.log(AWS.config.credentials);
	IoT.connect(accessKeyId,'acmkfy8e256rg.iot.us-east-1.amazonaws.com',secretKey,token,'/serverless/pubsub');
});
	
module.exports.IoT = IoT;
module.exports.AWS = AWS;