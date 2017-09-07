var connection = require('./../config');
const Joi = require('joi');


//registro de caso
module.exports.registro_caso=function(req,res){
    var novo_caso={
        "cas_nat_causa": req.body.cas_nat_causa,
        "cas_vara": req.body.cas_vara,
        "cas_cartorio": req.body.cas_cartorio,
        "cas_pasta_numero": req.body.cas_pasta_numero,
        "cli_cod": req.body.cli_cod,
        "cas_pos_proces": req.body.cas_pos_proces,
        "cas_part_contratante": req.body.cas_part_contratante,
        "cas_end": req.body.cas_end,
        "adv_cod": req.body.adv_cod,
        "cas_data": req.body.cas_data,
        "cas_andamento": req.body.cas_andamento,
        "cas_tipo_pag": req.body.cas_tipo_pag,
        "cas_valor": req.body.cas_valor,
        "cas_historico": req.body.cas_historico  
    }
    connection.query('INSERT INTO tbl_caso SET ?',novo_caso, function (error, results, fields) {
      if (error) {
          console.log("[-] ",error);
        res.json({
            status:false,
            message:'Algum erro ocorreu na requisição'
        })
      }else{
          console.log("[i] Novo registro na tabela Casos foi inserido");
          res.json({
            status:true,
            message:'Novo Caso inserido com sucesso!'
        })
      }
    });

}

// route pra cadastro de clientes
module.exports.registro_cliente=function(req,res){
    var novo_cliente={
        "cli_nome": req.body.cli_nome,
        "cli_end": req.body.cli_end,
        "cli_rg": req.body.cli_rg,
        "cli_cpf": req.body.cli_cpf,
        "cli_cel": req.body.cli_cel,
        "cli_tel": req.body.cli_tel,
        "cli_data_nasc": req.body.cli_data_nasc,
        "cli_email": req.body.cli.cli_email

    }
    connection.query('INSERT INTO tbl_cliente SET ?',novo_cliente, function (error, results, fields) {
      if (error) {
          console.log("[-] ",error);
        res.json({
            status:false,
            message:'Algum erro ocorreu na requisição'
        })
      }else{
          console.log("[i] Novo registro na tabela Clientes foi inserido");
          res.json({
            status:true,
            message:'Novo Cliente inserido com sucesso!'
        })
      }
    });

}

//registro de secretaria
module.exports.registro_secretaria=function(req,res){
    var evento_agenda={
          "sec_nome":req.body.sec_nome,
          "sec_end": req.body.sec_end,
          "sec_cpf": req.body.sec_cpf,
          "sec_rg": req.body.sec_rg,
          "sec_tel": req.body.sec_tel,
          "sec_cel": req.body.sec_cel,
          "sec_login": req.body.sec_login,
          "sec_senha": req.body.sec_senha
    }

    connection.query('INSERT INTO tbl_secretaria SET ?',secretaria_funcionario, function (error, results, fields) {
      if (error) {
        res.json({
            status:false,
            message:'Algum erro ocorreu na requisição'
        })
      }else{
          console.log("[i] Novo registro na tabela Secretaria foi inserido");
          res.json({
            status:true,
            message:'Funcionario da Secretaria foi Cadastrado com sucesso!'
        })
      }
    });

}

//registro de eventos na agenda
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

