var connection = require('./../config');
const Joi = require('joi');


module.exports.registro_advogado=function(req,res){
    var novo_advogado={
          "adv_login":req.body.adv_login,
          "adv_senha":req.body.adv_senha,
          "adv_nome":req.body.adv_nome,
          "adv_end":req.body.adv_end,
          "adv_tel":req.body.adv_tel,
          "adv_cpf":req.body.adv_cpf,
          "adv_rg":req.body.adv_rg,
          "adv_reg_oab":req.body.adv_reg_oab,
          "adv_data_admissao":req.body.adv_data_admissao,
          "adv_status":req.body.adv_status,
          "adv_casos":req.body.adv_casos,
          "adv_cel":req.body.adv_cel
    }
    connection.query('INSERT INTO tbl_advogado SET ?',novo_advogado, function (error, results, fields) {
      if (error) {
          console.log("[-] ",error);
        res.json({
            status:false,
            message:'Algum erro ocorreu na requisição'
        })
      }else{
          console.log("[i] Novo registro na tabela Advogado foi inserido");
          res.json({
            status:true,
            message:'Novo Advogado inserido com sucesso!'
        })
      }
    });

}

module.exports.registro_agenda=function(req,res){
    var evento_agenda={
          "age_data":req.body.age_data,
          "age_hora":req.body.age_hora,
          "age_nome":req.body.age_nome,
          "age_situacao":req.body.age_situacao,
          "age_assunto":req.body.age_assunto,
          "age_tel":req.body.age_tel
    }

    connection.query('INSERT INTO tbl_agenda SET ?',evento_agenda, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'Algum erro ocorreu na requisição'
        })
      }else{
          console.log("[i] Novo registro na tabela Agenda foi inserido");
          res.json({
            status:true,
            message:'Evento na Agenda foi Cadastrado com sucesso!'
        })
      }
    });

}

module.exports.registro=function(req,res){
    var cad
    var users={
        "name":req.body.name,
        "email":req.body.email,
        "password":req.body.password,
        "created_at":today,
        "updated_at":today
    }
    connection.query('INSERT INTO users SET ?',users, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'there are some error with query'
        })
      }else{
          res.json({
            status:true,
            data:results,
            message:'user registered sucessfully'
        })
      }
    });
}