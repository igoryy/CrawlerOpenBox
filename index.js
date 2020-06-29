const rp = require('request-promise')
const cheerio = require('cheerio')
const pagina = 1;



function quantidadePaginas(){

  const kabum = {
    uri: 'https://www.kabum.com.br/cgi-local/site/listagem/openbox.cgi?ordem=4&limite=100&pagina='+
    pagina + '&produto=&categoria=01',
    transform: function (body) {
      return cheerio.load(body)
    }
  }
  const valorHardware = [];
  rp(kabum)
  .then(($) => {
    $('select[name=categoria] option:selected').each((i, item) => {
      const select = $(item).text().replace(/[^0-9]/g,'');
      valorHardware.push(select);

    })

  
    var num = valorHardware[0];
  
    num = num / 100;
    
    buscarProdutos(parseInt(num+1));

  });
}
quantidadePaginas()

//const qtdPaginas = quantidadePaginas();

function buscarProdutos(qtd){

for(i = 0 ; i < qtd ; qtd--){

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


})
.catch((err) => {
    console.log(err);
  });
}

}