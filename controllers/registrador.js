var connection = require('./../config');
const Joi = require('joi');

var d = new Date();
var hora = d.getHours();
var minuto = d.getMinutes();
var segundo = d.getSeconds();
var dia = d.getDate();
var mes = d.getMonth();
var ano = d.getFullYear();
var data = hora+":"+minuto+":"+segundo+"|"+dia+"/"+(mes+1)+"/"+ano;

//registro cliente
module.exports.registro_cliente=function(req,res){
    var novo_cliente={
        "cli_nome":req.body.cli_nome,
        "cli_sexo":req.body.cli_sexo,
        "cli_email":req.body.cli_email,
        "cli_rg":req.body.cli_rg,
        "cli_cpf":req.body.cli_cpf,
        "cli_data_nascimento":req.body.cli_data_nascimento,
        "cli_cidade":req.body.cli_cidade,
        "cli_bairro":req.body.cli_bairro,
        "cli_cep":req.body.cli_cep,
        "cli_estado":req.body.cli_estado,
        "cli_endereco":req.body.cli_endereco,
        "cli_numero":req.body.cli_numero,
        "cli_telefone":req.body.cli_telefone,
        "cli_celular":req.body.cli_celular
    }
   if(novo_cliente){
    connection.query('INSERT INTO tbl_cliente SET ?',novo_cliente, function(error,results,fields){
        if(error){
            console.log("[",data,"] [-]",error);
            res.json({
                status:false,
                message:'Ocorreu algum erro na requisição de cadastro, verifique os campos inseridos\n Talvez esse cliente ja pode ter sido inserido......'
            })
          }else{
              console.log("[",data,"] [i] Novo registro na tabela cliente foi inserido");
              res.json({
                status:true,
                message:'Novo cliente cadastrado com sucesso!'
            })
  
          }
  
    });
}else if(!novo_cliente){
   console.log("[",data,"] Requisição feita sem nenhum parametro");
   res.json({
       status:false,
       message:'Nenhum parametro informado!'
   })

       }
  }



//registro secretaria
module.exports.registro_secretaria=function(req,res){
    var novo_secretaria={
        "sec_nome":req.body.sec_nome,
        "sec_rg":req.body.sec_rg,
        "sec_cpf":req.body.sec_cpf,
        "sec_sexo":req.body.sec_sexo,
        "sec_endereco":req.body.sec_endereco,
        "sec_cep":req.body.sec_cep,
        "sec_bairro":req.body.sec_bairro,
        "sec_cidade":req.body.sec_cidade,
        "sec_estado":req.body.sec_estado,
        "sec_telefone":req.body.sec_telefone,
        "sec_celular":req.body.sec_celular
    }
    if(novo_secretaria){
    connection.query('INSERT INTO tbl_secretaria SET ?',novo_secretaria, function(error,results,fields){
        if(error){
            console.log("[",data,"] [-]",error);
            res.json({
                status:false,
                message:'Ocorreu algum erro na requisição de cadastro'
            })
          }else{
              console.log("[",data,"] [i] Novo registro na tabela secretaria foi inserido");
              res.json({
                status:true,
                message:'Novo registro na secretaria inserido com sucesso!'
            })
  
          }
  
    });
}else if(!novo_secretaria){
    console.log("[",data,"] Requisição feita sem nenhum parametro");
    res.json({
        status:false,
        message:'Nenhum parametro informado!'
    })
 
        }
  }


//registro usuario
module.exports.registro_usuario=function(req,res){
    var login_usu = req.body.login_usu;
    var novo_usuario={
        "usu_nome":req.body.usu_nome,
        "usu_funcao":req.body.usu_funcao,
        "usu_login":req.body.usu_login,
        "usu_senha":req.body.usu_senha
    }

    if(novo_usuario){
        connection.query('INSERT INTO tbl_usuario SET ?',novo_usuario, function(error,results,fields){
            if(error){
                console.log("[",data,"] [-]",error);
                res.json({
                    status:false,
                    message:'Ocorreu algum erro na requisição de cadastro'
                })
              }else{
                  console.log("[",data,"] [i] Novo registro na tabela usuario foi inserido");
                  res.json({
                    status:true,
                    message:'Novo usuario inserido com sucesso!'
                })
      
              }
      
        });

}else if(!novo_usuario){
    console.log("[",data,"] Requisição feita sem nenhum parametro");
    res.json({
        status:false,
        message:'Nenhum parametro informado!'
    })
 
        }
  }




//registro caso
module.exports.registro_caso=function(req,res){
    var novo_caso={
        "caso_causa":req.body.caso_causa,
        "caso_vara":req.body.caso_vara,
        "caso_cartorio":req.body.caso_cartorio,
        "caso_pasta":req.body.caso_pasta,
        "caso_tipo":req.body.caso_tipo,
        "caso_valor":req.body.caso_valor,
        "caso_pagamento":req.body.caso_pagamento,
        "caso_cliente":req.body.caso_cliente,
        "caso_posicao":req.body.caso_posicao,
        "caso_advogado":req.body.caso_advogado,
        "caso_parte_nome":req.body.caso_parte_nome,
        "caso_parte_endereco":req.body.caso_parte_endereco,
        "caso_parte_numero":req.body.caso_parte_numero,
        "caso_parte_telefone":req.body.caso_parte_telefone,
        "caso_parte_celular":req.body.caso_parte_celular,
        "caso_data":req.body.caso_data,
        "caso_andamento":req.body.caso_andamento,
        "caso_data_andamento":req.body.caso_data_andamento
    }
    if(novo_caso){
    connection.query('INSERT INTO tbl_caso SET ?',novo_caso, function(error,results,fields){
        if(error){
            console.log("[",data,"] [-]",error);
            res.json({
                status:false,
                message:'Ocorreu algum erro na requisição de cadastro'
            })
          }else{
              console.log("[",data,"] [i] Novo registro na tabela Caso foi inserido");
              res.json({
                status:true,
                message:'Novo caso inserido com sucesso!'
            })
  
          }
  
    });
}else if(!novo_caso){
    console.log("[",data,"] Requisição feita sem nenhum parametro");
    res.json({
        status:false,
        message:'Nenhum parametro informado!'
    })
 
        }
  }

//registro de agenda
module.exports.registro_agenda=function(req,res){
    var novo_agenda={
        "age_nome":req.body.age_nome,
        "age_data":req.body.age_data,
        "age_horario":req.body.age_horario,
        "age_situacao":req.body.age_situacao,
        "age_assunto":req.body.age_assunto,
        "age_telefone":req.body.age_telefone,
        "age_celular":req.body.age_celular
    }
    if(novo_agenda){
    connection.query('INSERT INTO tbl_agenda SET ?',novo_agenda, function(error,results,fields){
        if(error){
            console.log("[",data,"] [-]",error);
            res.json({
                status:false,
                message:'Ocorreu algum erro na requisição de cadastro'
            })
          }else{
              console.log("[",data,"] [i] Novo registro na tabela Agenda foi inserido");
              res.json({
                status:true,
                message:'Novo evento na agenda inserido com sucesso!'
            })
          }
  
    });
}else if(!novo_agenda){
    console.log("[",data,"] Requisição feita sem nenhum parametro");
    res.json({
        status:false,
        message:'Nenhum parametro informado!'
    })
 
        }
  }



//registro de advogado
module.exports.registro_advogado=function(req,res){
  var novo_advogado={
     "adv_nome":req.body.adv_nome,
     "adv_rg":req.body.adv_rg,
     "adv_cpf":req.body.adv_cpf,
     "adv_sexo":req.body.adv_sexo,
     "adv_email":req.body.adv_email,
     "adv_endereco":req.body.adv_endereco,
     "adv_bairro":req.body.adv_bairro,
     "adv_estado":req.body.adv_estado,
     "adv_cep":req.body.adv_cep,
     "adv_cidade":req.body.adv_cidade,
     "adv_numero":req.body.adv_numero,
     "adv_telefone":req.body.adv_telefone,
     "adv_celular":req.body.adv_celular,
     "adv_especialidade":req.body.adv_especialidade,
     "adv_registro":req.body.adv_registro,
     "adv_data_emissao":req.body.adv_data_emissao,
     "adv_status":req.body.adv_status
  }
  if(novo_advogado){
  connection.query('INSERT INTO tbl_advogado SET ?',novo_advogado, function(error,results,fields){
      if(error){
          console.log("[",data,"] [-]",error);
          res.json({
              status:false,
              message:'Ocorreu algum erro na requisição de cadastro'
          })
        }else{
            console.log("[",data,"] [i] Novo registro na tabela Advogados foi inserido");
            res.json({
              status:true,
              message:'Novo Advogado inserido com sucesso!'
          })

        }

  });
}else if(!novo_advogado){
    console.log("[",data,"] Requisição feita sem nenhum parametro");
    res.json({
        status:false,
        message:'Nenhum parametro informado!'
    })
 
        }
}