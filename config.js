var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : '',
  database : 'bd_adv'
});
connection.connect(function(err){
if(!err) {
    console.log("[+] Banco de dados Conectado");
} else {
    console.log("[-] Erro ao conectar com o banco de dados");
}
});
module.exports = connection;