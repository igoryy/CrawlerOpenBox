const nodemailer = require('nodemailer');
const readJson = require('./readJson')
const listaEmail = "openboxgameplay@gmail.com"


module.exports = { 


sendEmail(arrayProdutos) {
    const usuario = 'openboxgameplay@gmail.com'
    const senha = '@igor100';
    
    var placaMae = "" ;
    var placaVideo = "";
    var waterCooler = "";
    var cooler = "";
    var memoria = "";
    var mouse = "" ;
    var processador ="";
    var teclado ="";
    var headset = "";

    arrayProdutos.placamae.forEach(item => {
        placaMae += '<strong>' + item +'</strong>'+ '<br>';
    })
    
    arrayProdutos.placavideo.forEach(item => {
        placaVideo += '<strong>' + item +'</strong>'+ '<br>';
    })
          
    arrayProdutos.watercooler.forEach(item => {
        waterCooler += '<strong>' + item +'</strong>'+ '<br>';
    })

    arrayProdutos.cooler.forEach(item => {
        waterCooler += '<strong>' + item +'</strong>'+ '<br>';
    })
        
    arrayProdutos.memoria.forEach(item => {
        memoria += '<strong>' + item +'</strong>'+ '<br>';
    })

    arrayProdutos.mouse.forEach(item => {
        mouse += '<strong>' + item +'</strong>'+ '<br>';
    })
    arrayProdutos.processador.forEach(item => {
        processador += '<strong>' + item +'</strong>'+ '<br>';
    })

    arrayProdutos.teclado.forEach(item => {
        teclado += '<strong>' + item +'</strong>'+ '<br>';
    })
    arrayProdutos.headset.forEach(item => {
        headset += '<strong>' + item +'</strong>'+ '<br>';
    })

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
            cc: 'lucas_nascimento1@hotmail.com ; pedrowr1@hotmail.com; '
                + ' igor.siviero1@gmail.com ; gabrieloliveiramagalhaes1@hotmail.com; ' 
                + ' benderwellgamesfoda@gmail.com',
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
                                                                <h1> Placa Mãe </h1>  
                                                                <div style="padding: 10px"> ` + placaMae +  `
            
                                                                  </div>

                                                                  <h1> Placa de video </h1>  
                                                                  <div> ` + placaVideo +  `<br>
              
                                                                    </div>
                                                                    <h1> Water Cooler </h1>  
                                                                    <div> ` + waterCooler +  `<br>
                
                                                                      </div>
                                                                      <h1> Cooler </h1>  
                                                                      <div> ` + cooler +  `<br>
                  
                                                                        </div>
                                                                        <h1> Memoria </h1>  
                                                                        <div> ` + memoria +  `<br>
                    
                                                                          </div>

                                                                          <h1> Mouse </h1>  
                                                                          <div> ` + mouse +  `<br>
                      
                                                                            </div>
                                                                            <h1> Processador </h1>  
                                                                            <div> ` + processador +  `<br>
                                                                            
                        
                                                                              </div> 
                                                                              <h1> Teclado </h1>  
                                                                              <div> ` + teclado +  `<br>
                          
                                                                                </div> 

                                                                                <h1> Headset </h1>  
                                                                                <div> ` + headset +  `<br>
                            
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


 