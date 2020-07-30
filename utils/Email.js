const nodemailer = require('nodemailer');
const readJson = require('./readJson')
const listaEmail = "openboxgameplay@gmail.com"


module.exports = { 


sendEmail(arrayProdutos) {
    const usuario = 'openboxgameplay@gmail.com'
    const senha = '@igor100';
    
    var nomeProduto = "" ;

    arrayProdutos.forEach(item => {
        nomeProduto += '<strong>' + item +'</strong>'+ '<br>';
    })
    
            
        console.log(nomeProduto)
    
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
            cc: 'lucas_nascimento1@hotmail.com' ,
            subject: 'Produtos Open Box Kabum',
            html:  ` 
            <html>
            <head>
                <title>Open schrödinger</title>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </head>
            <body style="margin: 0; padding: 0;">
                <table border="0" cellpadding="0" cellspacing="0" width="100%"> 
                    <tr>
                        <td style="padding: 10px 0 30px 0;">
                            <table align="center" border="0" cellpadding="0" cellspacing="0" width="600" style="border: 1px solid #cccccc; border-collapse: collapse;">
                                <tr>
                                    <td align="center" bgcolor="#153643" style="padding: 40px 0 30px 0; color: #153643; font-size: 28px; font-weight: bold; font-family: Arial, sans-serif;">
                                        <img src="https://i.ibb.co/RQJgMdn/Whats-App-Image-2020-07-30-at-01-22-17.jpg" alt="Creating Email Magic" width="400" height="330" style="display: block;" />
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#ffffff" style="padding: 40px 30px 40px 30px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="color: #153643; font-family: Arial, sans-serif; font-size: 24px;">
                                                    <b>Produtos openBox KABUM!</b>
                                                </td>
                                            </tr>
                                            <tr>
                                                <td>
                                                    <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                        <tr>
                                                            <td width="260" valign="top">
                                                                <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                                                  <div> ` + nomeProduto +  `
            
                                                                  </div>
                                                                </table>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                                <tr>
                                    <td bgcolor="#ee4c50" style="padding: 30px 30px 30px 30px;">
                                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                            <tr>
                                                <td style="color: #ffffff; font-family: Arial, sans-serif; font-size: 14px;" width="75%">
                                                    &reg; Open schrödinger 2020<br/>
                                                </td>
                                                <td align="right" width="25%">
                                                    <table border="0" cellpadding="0" cellspacing="0">
                                                        <tr>
                                                            <td style="font-size: 0; line-height: 0;" width="20">&nbsp;</td>
                                                            <td style="font-family: Arial, sans-serif; font-size: 12px; font-weight: bold;">
                                                                <a href="https://github.com/igoryy/CrawlerOpenBox" style="color: #ffffff;">
                                                                    <img src="https://i.ibb.co/0FpLkqr/github.png" alt="GitHub" width="70" height="70" style="display: block;" border="0" />
                                                                </a>
                                                            </td>
                                                        </tr>
                                                    </table>
                                                </td>
                                            </tr>
                                        </table>
                                    </td>
                                </tr>
                            </table>
                        </td>
                    </tr>
                </table>
            </body>
            </html>`
                      
                         
                      
            
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


 