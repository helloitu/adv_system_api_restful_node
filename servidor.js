var express=require("express");
var bodyParser=require('body-parser');
var adv_api = express();
var ControllerAutenticador=require('./controllers/autenticador');
var ControllerRegistro=require('./controllers/registrador');
var ControllerConsulta=require('./controllers/consultas');
console.log("Iniciando Servidor ADV SYSTEM API....\n --------------------\n Developed By Guilherme \n[+]-----------------------------------------------------------[+]");
adv_api.use(bodyParser.urlencoded({extended:true}));
adv_api.use(bodyParser.json());
//Caminhos para registro
adv_api.post('/api/registro/caso',ControllerRegistro.registro_caso);
adv_api.post('/api/registro/agenda',ControllerRegistro.registro_agenda);
adv_api.post('/api/registro/adv',ControllerRegistro.registro_advogado);
adv_api.post('/api/registro/cliente',ControllerRegistro.registro_cliente);
adv_api.post('/api/registro/secretaria',ControllerRegistro.registro_secretaria);
adv_api.post('/api/registro/usuario',ControllerRegistro.registro_usuario);

//caminho de login
adv_api.post('/api/login',ControllerAutenticador.autentica);

adv_api.listen(8000);