
class Buscar{
const rp = require('request-promise')
const cheerio = require('cheerio')



const options = {
  uri: 'https://www.kabum.com.br/cgi-local/site/listagem/openbox.cgi?ordem=4&limite=100&pagina=1&produto=&categoria=01',
  transform: function (body) {
    return cheerio.load(body)
  }
}

rp(options)
.then(($) => {
  $('input[type=text][name=categoria').each((i, item) => {
  
   console.log(item);
    //console.log($(item).find('#BlocoConteudo').text())
  })
})
//var valorName = $("input[type=text][name=categoria").val();

.catch((err) => {
  console.log(err);
})

}