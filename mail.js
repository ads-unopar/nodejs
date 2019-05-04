var nodemailer = require("nodemailer");

var transporter = nodemailer.createTransport({
    host: "mail.cvs.com.br",
    port: 465,
    secure: true,
    auth: {
        user: "teste@cvs.com.br",
        pass: "teste123"
    }
});

var mailOptions = {
    from: '<cristiano.vs@hotmail.com>',
    to: "gabrielmendes96@hotmail.com",
    subject: "Nodejs - Envio de e-mail",
    text: "Segue o texto do e-mail"
}

transporter.sendMail(mailOptions, function(err, info){
    if(err){
        console.log(err);
    }else{
        console.log("Mensagem enviada com sucesso");
    }
});