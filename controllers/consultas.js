var connection = require('./../config');
const Joi = require('joi');


///////////////////////////////////////////////////////
////////   Rotas para consulta de Cliente    //////////
/////////////////////////////////////////////////////
module.exports.consulta_agenda=function(req,res){
    //cod de pesquisa: 1
    var cli_cod = req.body.cli_cod;


    //cod de pesquisa: 2
    var cli_nome = req.body.cli_nome;
    
    //cod de pesquisa: 3
    var cli_end = req.body.cli_end;
    
    //cod de pesquisa: 4
    var cli_rg = req.body.cli_rg;

    //cod de pesquisa: 5
    var cli_cpf = req.body.cli_cpf;
    
    //cod de pesquisa: 6
    var cli_data_nasc  = req.body.cli_data_nasc;

    //cod de pesquisa: 7
    var cli_email = req.body.cli_email;

    //------------------------------------------[+]
    // cod para organização
     var ordem = req.body.ordem;
     
    //cod para identificar o tipo de consulta
    
    var cod_consulta = req.body.cod_pesq;
 
    if(cod_consulta){

        if(cod_consulta == "1"){
            if(cli_cod){
                connection.query('SELECT * FROM tbl_agenda WHERE cli_cod = ?',[cli_cod], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cli_cod:",cli_cod);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cli_cod não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cli_cod não foi informado na requisição!"
                    
                    });

                }

        }else if(cod_consulta == "2"){
            if(age_data){
                connection.query('SELECT * FROM tbl_caso WHERE age_data = ?',[age_data], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_data:",age_data);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_data não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_data não foi informado na requisição!"
                    
                    });

                }

        }else if(cod_consulta == "3"){
            if(age_hora){
                connection.query('SELECT * FROM tbl_caso WHERE age_hora = ?',[age_hora], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_hora:",age_hora);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_hora não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_hora não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "4"){
            if(age_nome){
                connection.query('SELECT * FROM tbl_caso WHERE age_nome = ?',[age_nome], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_nome:",age_nome);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_nome não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_nome não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "5"){
            if(age_situacao){
                connection.query('SELECT * FROM tbl_caso WHERE age_situacao = ?',[age_situacao], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_situacao:",age_situacao);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_situacao não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_situacao não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "6"){
            if(age_assunto){
                connection.query('SELECT * FROM tbl_caso WHERE age_assunto = ?',[age_assunto], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_assunto:",age_assunto);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_assunto não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_assunto não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "7"){
            if(age_assunto){
                connection.query('SELECT * FROM tbl_caso WHERE age_assunto = ?',[age_assunto], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_assunto:",age_assunto);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_assunto não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_assunto não foi informado na requisição!"
                    
                    });

                }

        }else{
            console.log("[",data,"] [i] Requisição realizada sem o identificador de pesquisa")
            res.json({
                status:false,
                message: "Identificador de pesquisa não definido"
            });


        }

    }else{
        console.log("[",data,"] [i] Uma requisição de consulta em: CLIENTE foi negada ou esta mal formada.");
        res.json({
             status:false,
             message:"Requisição de consulta mal formada!"

        })
    }
}












///////////////////////////////////////////////////////
////////   Rotas para consulta de Agenda    //////////
/////////////////////////////////////////////////////
module.exports.consulta_agenda=function(req,res){
    //cod de pesquisa: 1
    var age_cod = req.body.age_cod;
    
    //cod de pesquisa: 2
    var age_data = req.body.age_data;
    
    //cod de pesquisa: 3
    var age_hora = req.body.age_hora;

    //cod de pesquisa: 4
    var age_nome = req.body.age_nome;
    
    //cod de pesquisa: 5
    var age_situacao  = req.body.age_situacao;

    //cod de pesquisa: 6
    var age_assunto = req.body.age_assunto;

    //cod de pesquisa: 7
    var age_tel = req.body.age_tel;
    //------------------------------------------[+]
    // cod para organização
     var ordem = req.body.ordem;
     
    //cod para identificar o tipo de consulta
    
    var cod_consulta = req.body.cod_pesq;
 
    if(cod_consulta){

        if(cod_consulta == "1"){
            if(age_cod){
                connection.query('SELECT * FROM tbl_agenda WHERE age_cod = ?',[age_cod], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_cod:",age_cod);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_cod não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_cod não foi informado na requisição!"
                    
                    });

                }

        }else if(cod_consulta == "2"){
            if(age_data){
                connection.query('SELECT * FROM tbl_caso WHERE age_data = ?',[age_data], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_data:",age_data);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_data não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_data não foi informado na requisição!"
                    
                    });

                }

        }else if(cod_consulta == "3"){
            if(age_hora){
                connection.query('SELECT * FROM tbl_caso WHERE age_hora = ?',[age_hora], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_hora:",age_hora);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_hora não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_hora não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "4"){
            if(age_nome){
                connection.query('SELECT * FROM tbl_caso WHERE age_nome = ?',[age_nome], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_nome:",age_nome);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_nome não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_nome não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "5"){
            if(age_situacao){
                connection.query('SELECT * FROM tbl_caso WHERE age_situacao = ?',[age_situacao], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_situacao:",age_situacao);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_situacao não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_situacao não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "6"){
            if(age_assunto){
                connection.query('SELECT * FROM tbl_caso WHERE age_assunto = ?',[age_assunto], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_assunto:",age_assunto);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_assunto não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_assunto não foi informado na requisição!"
                    
                    });

                }
            
        }else if(cod_consulta == "7"){
            if(age_tel){
                connection.query('SELECT * FROM tbl_caso WHERE age_tel = ?',[age_tel], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de age_tel:",age_tel);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação age_tel não definiu o identificador");
                    res.json({
                        status:false,
                        message:"age_tel não foi informado na requisição!"
                    
                    });

                }
            
        }else{
            console.log("[",data,"] [i] Requisição realizada sem o identificador de pesquisa")
            res.json({
                status:false,
                message: "Identificador de pesquisa não definido"
            });


        }

    }else{
        console.log("[",data,"] [i] Uma requisição de consulta em: AGENDA foi negada ou esta mal formada.");
        res.json({
             status:false,
             message:"Requisição de consulta mal formada!"

        })
    }
}


///////////////////////////////////////////////////////
//////// Rotas para consulta de Caso  ////////////
/////////////////////////////////////////////////////
module.exports.consulta_caso=function(req,res){
   //cod de pesquisa: 1
   var cas_cod = req.body.cas_cod;

   //cod de pesquisa: 2
   var cas_nat_causa = req.body.cas_nat_causa;

   //cod de pesquisa 3
   var cas_vara = req.body.cas_vara;

   //cod de pesquisa 4
   var cas_cartorio = req.body.cas_cartorio;

   //cod de pesquisa 5
   var cas_pasta_numero = req.body.cas_pasta_numero;

   //cod de pesquisa 6
   var cli_cod = req.body.cli_cod;

   //cod de pesquisa 7
   var adv_cod = req.body.adv_cod;

   //cod de pesquisa 8
   var cas_data = req.body.cas_data;

   //cod de pesquisa 9
   var cas_andamento = req.body.cas_andamento;

   //cod de pesquisa 10
   var cas_tipo_pag = req.body.cas_tipo_pag;

     //------------------------------------------[+]
     // cod para organização
     var ordem = req.body.ordem;
     
    //cod para identificar o tipo de consulta 
    var cod_consulta = req.body.cod_pesq;
 
    if(cod_consulta){
          if(cod_consulta == "1"){
            if(cas_cod){
                connection.query('SELECT * FROM tbl_caso WHERE cas_cod = ?',[cas_cod], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_cod:",cas_cod);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_cod não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_cod não foi informado na requisição!"
                    
                    });

                }


          }else if(cod_consulta == "2"){
            if(cas_nat_causa){
                connection.query('SELECT * FROM tbl_caso WHERE cas_nat_causa = ?',[cas_nat_causa], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_nat_causa:",cas_nat_causa);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_nat_causa não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_nat_causa não foi informado na requisição!"
                    
                    });

                }

          }else if(cod_consulta == "3"){
              
              if(cas_vara){
                connection.query('SELECT * FROM tbl_caso WHERE cas_vara = ?',[cas_vara], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_vara:",cas_vara);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_vara não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_vara não foi informado na requisição!"
                    
                    });

                }

          }else if(cod_consulta == "4"){
            if(cas_cartorio){
                connection.query('SELECT * FROM tbl_caso WHERE cas_cartorio = ?',[cas_vara], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_cartorio:",cas_cartorio);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_cartorio não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_cartorio não foi informado na requisição!"
                    
                    });

                }

          }else if(cod_consulta == "5"){
            if(cas_pasta_numero){
                connection.query('SELECT * FROM tbl_caso WHERE cas_pasta_numero = ?',[cas_pasta_numero], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_pasta_numero:",cas_pasta_numero);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_pasta_numero não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_pasta_numero não foi informado na requisição!"
                    
                    });

                }

          }else if(cod_consulta == "6"){
            if(cli_cod){
                connection.query('SELECT * FROM tbl_caso WHERE cli_cod = ?',[cli_cod], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cli_cod:",cli_cod);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cli_cod não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cli_cod não foi informado na requisição!"
                    
                    });

                }

          }else if(cod_consulta == "7"){
            if(adv_cod){
                connection.query('SELECT * FROM tbl_caso WHERE adv_cod = ?',[adv_cod], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de adv_cod:",adv_cod);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação adv_cod não definiu o identificador");
                    res.json({
                        status:false,
                        message:"adv_cod não foi informado na requisição!"
                    
                    });

                }

          }else if(cod_consulta == "8"){

            if(cas_data){
                connection.query('SELECT * FROM tbl_caso WHERE cas_data = ?',[cas_data], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_data:",cas_data);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_data não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_data não foi informado na requisição!"
                    
                    });

                }
          }else if(cod_consulta == "9"){
            if(cas_andamento){
                connection.query('SELECT * FROM tbl_caso WHERE cas_andamento = ?',[cas_andamento], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_andamento:",cas_andamento);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_andamento não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_andamento não foi informado na requisição!"
                    
                    });

                }


          }else if(cod_consulta == "10"){
            if(cas_tipo_pag){
                connection.query('SELECT * FROM tbl_caso WHERE cas_tipo_pag = ?',[cas_tipo_pag], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de cas_tipo_pag:",cas_tipo_pag);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação cas_tipo_pag não definiu o identificador");
                    res.json({
                        status:false,
                        message:"cas_tipo_pag não foi informado na requisição!"
                    
                    });

                }

          }else{//caso o cod de consulta seja maior ou menor que 1-10
            console.log("[",data,"] [i] Requisição realizada sem o identificador de pesquisa")
            res.json({
                status:false,
                message: "Identificador de pesquisa não definido"
            });
          }



          
    }else{ //caso o codigo de consulta não seja informado, retorna erro
        console.log("[",data,"] [i] Uma requisição de consulta em: CASOS foi negada ou esta mal formada.");
        res.json({
             status:false,
             message:"Requisição de consulta mal formada!"

        })
    }

}



///////////////////////////////////////////////////////
//////// Rotas para consulta de ADVOGADO  ////////////
/////////////////////////////////////////////////////
module.exports.consulta_advogado=function(req,res){
     //cod de pesquisa: 1
     var adv_cod = req.body.adv_cod;

     //cod de pesquisa: 2
     var adv_nome = req.body.adv_nome;

     //cod de pesquisa: 3
     var adv_cpf = req.body.adv_cpf;

     //cod de pesquisa: 4
     var adv_rg = req.body.adv_rg;

     //cod de pesquisa: 5
     var adv_status = req.body.adv_status;

     //cod de pesquisa: 6
     var adv_reg_oab = req.body.adv_reg_oab;

     //------------------------------------------[+]
     // cod para organização
     var ordem = req.body.ordem;

     //cod para identificar o tipo de consulta 
     var cod_pesquisa = req.body.cod_pesq;
     
     
      if(cod_pesquisa){
               //if  para pesquisa do adv_cod
      if(cod_pesquisa == "1"){
            //verifica se a variavel adv_cod foi informada
                   if(adv_cod){rio;
                    
                       //cod de pesquisa 5
                       var cas_pasta_numero = req.body.cas_pasta_numero;
                    
                       //cod de pesquisa 6
                       var cli_cod = req.body.cli_cod;
                    
                       //cod de pesquisa 7
                       var adv_cod = req.body.adv_cod;
                    
                       //cod de pesquisa 8
                       var cas_data = req.body.cas_data;
                    
                       //cod de pesquisa 9
                       var cas_andamento = req.body.cas_andamento;
                    
                       //cod de pesquisa 10
                       var cas_tipo_pag = req.body.cas_tipo_pag;
                    
                         //------------------------------------------[+]
                         // cod para organização
                         var ordem = req.body.ordem;
                         
                        //cod para identificar o tipo de consulta 
                        var cod_consulta = req.body.cod_pesq;
                     
                        if(cod_consulta){
                              if(cod_consulta == "1"){
                    
                    
                              }else if(cod_consulta == "2"){
                    
                              }else if(cod_consulta == "3"){
                    
                              }else if(cod_consulta == "4"){
                    
                              }else if(cod_consulta == "5"){
                    
                              }else if(cod_consulta == "6"){
                    
                              }else if(cod_consulta == "7"){
                    
                              }else if(cod_consulta == "8"){
                    
                              }else if(cod_consulta == "9"){
                          //if para ordem alfabetica

                connection.query('SELECT * FROM tbl_advogado WHERE adv_cod = ?',[adv_cod], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de adv_cod:",adv_cod);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação adv_cod não definiu o identificador");
                    res.json({
                        status:false,
                        message:"adv_cod não foi informado na requisição!"
                    
                    });

                }
                //fim do if adv_cod

             }else if(cod_pesquisa == "2"){
                   //verifica se tem algo na variavel adv_nome, evitando erros
                 if(adv_nome){
                connection.query('SELECT * FROM tbl_advogado WHERE adv_nome = ?',[adv_nome], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de adv_nome:",adv_nome);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação adv_nome não definiu o identificador");
                    res.json({
                        status:false,
                        message:"adv_nome não foi informado na requisição!"
                    
                    });

                }

             }else if(cod_pesquisa == "3"){
               //verifica se a variavel adv_cpf esta definido
                if(adv_cpf){
                    connection.query('SELECT * FROM tbl_advogado WHERE adv_cpf = ?',[adv_cpf], function (error, results, fields) {
                        if (error) {
                            console.log("[",data,"] [-] ",error);
                          res.json({
                              status:false,
                              message:'Algum erro ocorreu na requisição',
                              erro:error
                          })
                        }else{
                            console.log("[",data,"] [i] Nova consulta realizada com identificação de adv_cpf:",adv_cpf);
                            res.json({
                              results
                          })
                        }
                      });
                    }else{
                        console.log("[",data,"] [i] Consulta realizada com identificação adv_cpf não definiu o identificador");
                        res.json({
                            status:false,
                            message:"adv_cpf não foi informado na requisição!"
                        
                        });
    
                    }

             }else if(cod_pesquisa == "4"){
                   //verifica se tem algo na variavel adv_rg, evitando erros
                   if(adv_rg){
                    connection.query('SELECT * FROM tbl_advogado WHERE adv_rg = ?',[adv_rg], function (error, results, fields) {
                        if (error) {
                            console.log("[",data,"] [-] ",error);
                          res.json({
                              status:false,
                              message:'Algum erro ocorreu na requisição',
                              erro:error
                          })
                        }else{
                            console.log("[",data,"] [i] Nova consulta realizada com identificação de adv_rg:",adv_rg);
                            res.json({
                              results
                          })
                        }
                      });
                    }else{
                        console.log("[",data,"] [i] Consulta realizada com identificação adv_rg não definiu o identificador");
                        res.json({
                            status:false,
                            message:"adv_rg não foi informado na requisição!"
                        
                        });
    
                    }
                

             }else if(cod_pesquisa == "5"){
               //verifica se a variavel adv_status esta definido
               if(adv_status){
                connection.query('SELECT * FROM tbl_advogado WHERE adv_status = ?',[adv_status], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de adv_status:",adv_status);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação adv_status não definiu o identificador");
                    res.json({
                        status:false,
                        message:"adv_status não foi informado na requisição!"
                    
                    });

                }

             }else if(cod_pesquisa == "6"){
               //verifica se a variavel adv_reg_oab esta definido
               if(adv_reg_oab){
                connection.query('SELECT * FROM tbl_advogado WHERE adv_reg_oab = ?',[adv_reg_oab], function (error, results, fields) {
                    if (error) {
                        console.log("[",data,"] [-] ",error);
                      res.json({
                          status:false,
                          message:'Algum erro ocorreu na requisição',
                          erro:error
                      })
                    }else{
                        console.log("[",data,"] [i] Nova consulta realizada com identificação de adv_reg_oab:",adv_reg_oab);
                        res.json({
                          results
                      })
                    }
                  });
                }else{
                    console.log("[",data,"] [i] Consulta realizada com identificação adv_reg_oab não definiu o identificador");
                    res.json({
                        status:false,
                        message:"adv_reg_oab não foi informado na requisição!"
                    
                    });

                }
             }else{
                 console.log("[",data,"] [i] Requisição realizada sem o identificador de pesquisa")
                 res.json({
                     status:false,
                     message: "Identificador de pesquisa não definido"
                 });
             }
  

     }else{
         console.log("[",data,"] [i] Uma requisição de consulta em: ADVOGADO foi negada ou esta mal formada.");
           res.json({
                status:false,
                message:"Requisição de consulta mal formada!"

           })
     }
   }
 }
}