var express=require("express");
var bodyParser=require('body-parser');
var app = express();
var ControllerAutenticador=require('./controllers/autenticador');
var ControllerRegistro=require('./controllers/registrador');
console.log("Iniciando Servidor ADV SYSTEM API....\n --------------------\n Developed By Guilherme \n[+]-----------------------------------------------------------[+]");
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
/* route to handle login and registration */
//app.post('/api/register',ControllerRegistro.registro);
app.post('/api/regist_adv',ControllerRegistro.registro_advogado);
app.post('/api/regist_agenda/',ControllerRegistro.registro_agenda);
app.post('/api/login',ControllerAutenticador.autentica);
app.listen(8000);