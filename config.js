var mysql      = require('mysql');
var d = new Date();
var hora = d.getHours();
var minuto = d.getMinutes();
var segundo = d.getSeconds();
var dia = d.getDate();
var mes = d.getMonth();
var ano = d.getFullYear();
var data = hora+":"+minuto+":"+segundo+"|"+dia+"/"+(mes+1)+"/"+ano;
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'adv_sys'
});
connection.connect(function(err){
if(err) {
    console.log("[",data,"][-] Erro ao conectar com o banco de dados");
    
} else {
    console.log("[",data,"][+] Banco de dados Conectado \n Sistema Iniciado");
}
});
module.exports = connection;
