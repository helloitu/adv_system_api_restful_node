var connection = require('./../config');
module.exports.autentica=function(req,res){
    var login=req.body.login;
    var senha=req.body.senha;
    var desc_user=req.body.desc_usuario;
    console.log("[i] Nova requisição de login por:",login);
    if(desc_user == "1"){
    connection.query('SELECT * FROM tbl_advogado WHERE adv_login = ?',[login], function (error, results, fields) {
      if (error) {
          console.log("[i] Requisição de login para ",login," retornou um erro de processamento desconhecido");
          res.json({
            status:false,
            message:'Ocorreram Erros ao Processar a requisição'
            })
      }else{
        if(results.length >0){
            if(senha==results[0].adv_senha){
                 console.log("[i] Requisição de login para ",login," retornou codigo 200, sucesso ao logar!");
                res.json({
                    status:true,
                    message:'Autenticado com Sucesso'
                })
            }else{
                 console.log("[i] Requisição de login para ",login," retornou erro, login ou senha não correspondem");
                res.json({
                  status:false,
                  message:"Login ou senha não correspondem"
                 });
            }
         
        }
        else{
             console.log("[i] Requisição de login para ",login," retornou codigo 404, Login inexistente!");
          res.json({
              status:false,    
            message:"Login inexistente"
          });
        }
      }
    });
    }else if(desc_user == "2"){
        //login como secretaria
    connection.query('SELECT * FROM tbl_secretaria WHERE sec_login = ?',[login], function (error, results, fields) {
      if (error) {
                    console.log("[i] Requisição de login para ",login," retornou um erro de processamento desconhecido");

          res.json({
            status:false,
            message:'Ocorreram Erros ao Processar a requisição'
            })
      }else{
        if(results.length >0){
            if(senha==results[0].sec_senha){
                                 console.log("[i] Requisição de login para ",login," retornou codigo 200, sucesso ao logar!");

                res.json({
                    status:true,
                    message:'Autenticado com Sucesso'
                })
            }else{
                                 console.log("[i] Requisição de login para ",login," retornou erro, login ou senha não correspondem");

                res.json({
                  status:false,
                  message:"Login ou senha não correspondem"
                 });
            }
         
        }
        else{
                         console.log("[i] Requisição de login para ",login," retornou codigo 404, Login inexistente!");

          res.json({
              status:false,    
            message:"Login inexistente"
          });
        }
      }
    });
    //fim do if de login da secretaria        
    }else{
         res.json({
              status:false,
              message:"Requisição Incorreta!"

         });

    }
}