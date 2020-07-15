const rp = require('request-promise');
const cheerio = require('cheerio');
const Util = require('../utils/Util');
const email  = require('../utils/Email')
module.exports = class ProdutosService{
   
  buscarProdutos(qtd){

        for(var i = 0 ; i < qtd ; qtd--){
        const options = {
          uri: 'https://www.kabum.com.br/cgi-local/site/listagem/openbox.cgi?ordem=4&limite=100&pagina='+
          qtd + '&produto=&categoria=01',
        
          transform: function (body) {
            return cheerio.load(body)
          }
        }
        console.log(options.uri);
        const produtos = [];
        
        rp(options)
        .then(($) => {
          $('.listagem-titulo_descr').each((i, item) => {
           produtos.push($(item).find('a').text());
          })
          
          const array = [...new Set(produtos)];

          const testeJson = JSON.parse(JSON.stringify({array}));
          console.log(testeJson);
          
          email.sendEmail();
          
       
        })

        .catch((err) => {
            console.log(err);
          });

        }

        
    }
}