var connection = require('./../config');
var d = new Date();
var hora = d.getHours();
var minuto = d.getMinutes();
var segundo = d.getSeconds();
var dia = d.getDate();
var mes = d.getMonth();
var ano = d.getFullYear();
var data = hora+":"+minuto+":"+segundo+"|"+dia+"/"+(mes+1)+"/"+ano;

module.exports.hellou=function(req,res){
 res.json({
   status:true
 })
  console.log("[",data,"] [I] Checkin da API Requisitado!")

}





//checkin de login
module.exports.checaLogin=function(req,res){
   var consultaLogin = req.body.usu_login;

  if(consultaLogin){
  connection.query('SELECT * FROM tbl_usuario WHERE usu_login = ?',[consultaLogin], function (error, results, fields){
    if(error){
        console.log("[",data,"] [-]",error);
        res.json({
            status:false,
            message:'Ocorreu um erro ao tentar registrar usuario'
        })
    }else{
        if(results.length >0){
            console.log("[",data,"] [i] Requisição de cadastro retornou erro!, usuario: "+consultaLogin+" ja existente");
            res.json({
                status:false
            })
       
        }else{
          console.log("[",data,"] [i] Consulta de login aprovada, aguardando cadastro");
          res.json({
            status:true
          })
        }

    }
    });
  }else{
    res.json({
      status:false,
      message:'Algum parametro nao foi passado corretamente'
    })
 

  }
}
    