var nodemailer=require('nodemailer')

var transport=nodemailer.createTransport(
    {
        service:'gmail',
        auth:{
            user:'deepanshuk36@gmail.com',
            pass:'xntfpucvwguwktji'
        }
    }
)
// send out mail

var mailoptions={
     
    from:'deepanshuk36@gmail.com',
    to:'radhe9534990887@gmail.com',
    subject:'hello test email from deepanshu',
    text:'this is sent from nodejs project'

}
transport.sendMail(mailoptions,function(error,info)
{
 if(error)
 {
    console.log(error)
 }
else{
    console.log("email sent"+info.response)
}

})
