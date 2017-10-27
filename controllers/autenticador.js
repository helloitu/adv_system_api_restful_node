var connection = require('./../config');
var d = new Date();
var hora = d.getHours();
var minuto = d.getMinutes();
var segundo = d.getSeconds();
var dia = d.getDate();
var mes = d.getMonth();
var ano = d.getFullYear();
var data = hora+":"+minuto+":"+segundo+"|"+dia+"/"+(mes+1)+"/"+ano;


module.exports.autentica=function(req,res){
    var login=req.body.login;
    var senha=req.body.senha;

    console.log("[",data,"] [i] Nova requisição de login por:",login);
    connection.query('SELECT * FROM tbl_usuario WHERE usu_login = ?',[login], function (error, results, fields) {
      if (error) {
          console.log("[",data,"] [i] Requisição de login para ",login," retornou um erro de processamento desconhecido");
          res.json({
            status:false,
            message:'Ocorreram Erros ao Processar a requisição'
            })
      }else{
        if(results.length >0){
            if(senha==results[0].usu_senha){
                 console.log("[",data,"] [i] Requisição de login para ",login," retornou codigo 200, sucesso ao logar!");
                res.json({
                    status:true,
                    message:'Autenticado com Sucesso'
                })
            }else{
                 console.log("[",data,"] [i] Requisição de login para ",login," retornou erro, login ou senha não correspondem");
                res.json({
                  status:false,
                  message:"Login ou senha não correspondem"
                 });
            }
         
        }
        else{
             console.log("[",data,"] [i] Requisição de login para ",login," retornou codigo 404, Login inexistente!");
          res.json({
              status:false,    
            message:"Login inexistente"
          });
        }
      }
    });
}