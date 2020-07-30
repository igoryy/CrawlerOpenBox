var request = require('request');
const cheerio = require('cheerio');
iconv = require('iconv-lite');
const Util = require('../utils/Util');
const { sendEmail } = require('../utils/Email');
const { encode } = require('iconv-lite');
const Email = require('../utils/Email');

module.exports = class ProdutosService{
 
  buscarProdutos(qtd){
        
    var produtos = [];
    var produtosSemRepeat = [];
    for(var i = 0;i < qtd; qtd--){
          request({ url:'https://www.kabum.com.br/cgi-local/site/listagem/openbox.cgi?ordem=4&limite=100&pagina='+
          qtd + '&produto=&categoria=01',
          encoding: 'utf-8'
        
        },  function (err,res,body){
            if(err) console.log('Erro ' + err);

            var $ = cheerio.load(body);
       

            $('.listagem-titulo_descr').each(function(){
              var nomeProduto = $(this).find('a').text().trim();
              produtos.push(nomeProduto);
            });

            produtosSemRepeat= [...new Set(produtos)];
           
          }) 
        }
        setTimeout(function(){ 
          var arrayProdutos = [];
          produtosSemRepeat.forEach(item => {
            if(item.indexOf("AM4") > 0){

              arrayProdutos.push(item);
            }
          })

          setTimeout(function(){
            Email.sendEmail(arrayProdutos)

          },4000)
           }, 4000);
        
        
       
      }
    }
