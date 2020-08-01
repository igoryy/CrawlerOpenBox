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
    
      var url="";
    
    for(var i = 0;i < qtd; qtd--){
          
          request({ url:'https://www.kabum.com.br/cgi-local/site/listagem/openbox.cgi?ordem=4&limite=100&pagina='+
          qtd ,
          encoding: 'utf-8',
          
        
        },  function (err,res,body){
          console.log(request.url);
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
          var arrayProdutos = {
            placamae : [],
            processador : [],
            placavideo : [],
            memoria : [],
            watercooler : [],
            cooler: [],
            mouse: [],
            teclado: [],
            headset: []
          };
          produtosSemRepeat.forEach(item => {
            if(item.indexOf("AM4") > 0 && item.indexOf("Processador")< 0){
              arrayProdutos.placamae.push(item);
            }else if(item.indexOf("RTX") > 0 || item.indexOf("GTX 16") > 0){
              arrayProdutos.placavideo.push(item);
            }else if(item.indexOf("WaterCooler") > 0 && item.indexOf("Water Cooler") > 0 && item.indexOf("Gabinete") < 0){
              arrayProdutos.watercooler.push(item);
            }else if(item.indexOf("Cooler")>0 ){
              arrayProdutos.cooler.push(item);
            }else if(item.indexOf("DDR4,")>0 && item.indexOf("Notebook") < 0 && 
                item.indexOf("4GB") < 0 && item.indexOf("2400MHz,") < 0 && item.indexOf("2133MHz," < 0)) {
              arrayProdutos.memoria.push(item);
            }else if(item.indexOf("DPI") > 0  && item.indexOf("Impressora") < 0){
              arrayProdutos.mouse.push(item);
            }else if(item.indexOf("Ryzen") > 0 && item.indexOf("Processador")> 0){
              arrayProdutos.processador.push(item);
            }else if(item.indexOf("Switch") > 0 && item.indexOf("USB") < 0 && item.indexOf("HDMI") < 0 ){
              arrayProdutos.teclado.push(item);
            }else if((item.indexOf("7.1") > 0 && item.indexOf("Smartphone") < 0) || 
              item.indexOf("Headset Gamer") > 0 ){
              arrayProdutos.headset.push(item);
            }
          })

          setTimeout(function(){
            Email.sendEmail(arrayProdutos)

          },9000)
           }, 9000);
        
        
       
      }
    }
