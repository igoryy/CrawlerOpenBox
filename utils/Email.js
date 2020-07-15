const nodemailer = require('nodemailer');

module.exports = { 
sendEmail() {

    const usuario = 'openboxgameplay@gmail.com'
    const senha = '@igor100'; 
    

    var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: usuario,
            pass: senha
        }
    });

    var destinatario = 'benderwellgamesfoda@gmail.com';

    var mailOptions = {
        from: usuario,
        to: destinatario,
        subject: 'Enviando um email bot',
        text: 'Chora na piroca'
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