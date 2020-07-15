module.exports = class Util{  
    calcularDiasPaginas(qtdProdutos){
        return 1 + parseInt((qtdProdutos/100))
     }

      sendMail() {

      
        Email.send({
          SecureToken : "88014d57-dd7f-4128-a5af-8e40588e34a7",
          To : 'igor.siviero1@gmail.com',
          From : 'igor.siviero1@gmail.com',
          Subject : "This is the subject",
          Body : "And this is the body"
      }).then(
        message => alert(message)
      );
     
  }
}
