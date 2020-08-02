const { quantidadePaginas } = require("./service/PaginaService");
const CronJob = require('cron').CronJob
const paginaService = require('./service/PaginaService');
console.log("inciiar projeto")
const job = new CronJob('*/2 * * * *' , () => { 
    var strDate = new Date().getTime();;

    console.log(strDate);
    paginaService.quantidadePaginas();
},null, true);

//Importa as dependências que acabamos de instalar
const express = require('express');
const path = require('path');

const app = express();





// Inicia a aplicação pela porta configurada
app.listen(process.env.PORT || 8080);

