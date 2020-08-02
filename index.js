const { quantidadePaginas } = require("./service/PaginaService");
const CronJob = require('cron').CronJob
const paginaService = require('./service/PaginaService');
const job = new CronJob('0 */4 * * *' , () => { 
    var strDate = new Date().getTime();;

    console.log(strDate);
    paginaService.quantidadePaginas();
},null, true);



