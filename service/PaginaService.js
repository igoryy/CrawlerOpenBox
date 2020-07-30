const rp = require('request-promise');
const cheerio = require('cheerio');
const Util = require('../utils/Util');
const produtoSerice = require('./ProdutosService');
const ProdutosService = require('./ProdutosService');
module.exports = {
  quantidadePaginas(){
    const uriKabum = {
    uri: 'https://www.kabum.com.br/cgi-local/site/listagem/openbox.cgi?ordem=4&limite=100&pagina='+
    1 + '&produto=&categoria=01',
      transform: function (body) {
        return cheerio.load(body)
      }
    }
    const valorHardware = [];
    const qtdDiasPaginas = 0;
    
    rp(uriKabum)
    .then(($) => {
      $('select[name=categoria] option:selected').each((i, item) => {
        const select = $(item).text().replace(/[^0-9]/g,'');
        valorHardware.push(select);
      })
      const util = new Util();
      if(valorHardware[0]){
         
        const produtoSerice = new ProdutosService();      
        produtoSerice.buscarProdutos(util.calcularDiasPaginas(valorHardware[0]));
      } 
    
    });
  }
}