const nodemailer = require('nodemailer');
const readJson = require('./readJson')
const listaEmail = "openboxgameplay@gmail.com"


module.exports = { 


sendEmail(teste) {
    const usuario = 'openboxgameplay@gmail.com'
    const senha = '@igor100';
    
    var nomeProduto = "";
    
    teste.forEach(item => {
        nomeProduto += '<strong>' + item +'</strong>'+ '<br>';
        console.log(nomeProduto)
    });

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: usuario,
            pass: senha
        }
    });

        var mailOptions = {
            from: usuario,
            to: listaEmail,
            cc: 'lucas_nascimento1@hotmail.com',
            subject: 'Enviando um email bot',
            html:  '<h1> Produtos da porra do open box </h1> <br> <strong>' + nomeProduto + '</strong>'
        };
        transporter.sendMail(mailOptions, function(error, info){
            if (error) {
                console.log(error);
            } else {
                console.log('Email enviado: ' + info.response);
      
            }
        });
    

    }
}


 