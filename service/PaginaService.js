const rp = require('request-promise')
const cheerio = require('cheerio')

class PaginaService{
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
      if(valorHardware[0] =! null){
        qtdDiasPaginas = util.calcularDiasPaginas(parseInt(valorHardware[0]))
      }
        
      ProdutosService.buscarProdutos(qtdDiasPaginas);
    });
  }
}

