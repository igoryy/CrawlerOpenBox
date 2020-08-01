const rp = require('request-promise');
const cheerio = require('cheerio');
const Util = require('../utils/Util');
const produtoSerice = require('./ProdutosService');
const ProdutosService = require('./ProdutosService');
module.exports = {
  quantidadePaginas(){
    const produtoSerice = new ProdutosService();      
    produtoSerice.buscarProdutos(110);
  }
}