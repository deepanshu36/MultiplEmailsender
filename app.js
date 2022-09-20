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
var emails=['pg3362474@gmail.com','gauravkaushiknitr@gmail.com','radhe9534990887@gmail.com']

var mailoptions={
     
    from:'deepanshuk36@gmail.com',
    to:emails,
    subject:'dont mine this email i am still testing',
    text:'https://github.com/deepanshu36/emailsender'

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
