const nodemailer = require('nodemailer');
require('dotenv').config({ path: "../config.env" });
const transporter = nodemailer.createTransport({
    service: 'hotmail',
    auth: {
        user: process.env.EMAIL,
        pass: process.env.EMAILPASSWORD
    }
});  //creating a transporter or intiliazing ...
// console.log({ 
//     user: process.env.EMAIL,
//     pass: process.env.EMAILPASSWORD
// })

  
//function for sending the mail via api/sendMails
async function sendMails(toEmail, sub, details,attachements) {
    return new Promise(async (resolve, reject) => {
        // console.log(details);
        try{
            mailOption = {
                from: process.env.EMAIL,
                to: toEmail,
                subject: sub,
                
                html:details,
                attachments:attachements
            }
            transporter.sendMail(mailOption, function (err, info) {
                if (err) {
                    resolve({ code: 404, message: err });
                }
                else {
                    resolve({ code: 200, message: 'Mail Delievered' });
                }
            });
        }catch(err){
            reject(err.message)
        }
    })
}

module.exports = sendMails;