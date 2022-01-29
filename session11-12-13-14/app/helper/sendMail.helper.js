const nodemailer = require("nodemailer")
const smtpCongfig = {
    service: "gmail",
    auth:{
        user:"marwaradwan666@gmail.com",
        pass:"123@Marwa"
    }
}
const sendMeEMail = (reciverEmail, EmailContent)=>{
    try{
        const transporter = nodemailer.createTransport(smtpCongfig)
        const myEmailOptions= {
            from:"our project app",
            to: reciverEmail,
            subject:"Activation Email",
            html:EmailContent
        }
        transporter.sendMail(myEmailOptions)
    }
    catch(e){
        console.log(e.message)
    }
}
module.exports = sendMeEMail
// sendMeEMail("marwaradwan6@gmail.com", "hello")