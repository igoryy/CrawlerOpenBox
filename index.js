const { quantidadePaginas } = require("./service/PaginaService");
const CronJob = require('cron').CronJob
const job = new CronJob('* */5 * * * *' , () => {
    paginaService.quantidadePaginas();
},null, true);

const paginaService = require('./service/PaginaService');

