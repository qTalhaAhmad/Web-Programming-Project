
// module.exports = { nodeMMMs };

// function nodeMMMs(){
const nodemailer = require("nodemailer");
//"use strict";

async function main() {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
      service: "hotmail",
      
    auth: {
        user: "tmhaiislmeyrnode@outlook.com",        //testAccount.user, //
        pass: "tmhaiislmeyr1E"                       //testAccount.pass, //
    }, 
  });

  let info = await transporter.sendMail({
    from: "tmhaiislmeyrnode@outlook.com", // sender address
    to: "f190254@nu.edu.pk, f190113@nu.edu.pk, f190171@nu.edu.pk", // list of receivers
    subject: "Hey there! Your order has been Confirmed", // Subject line
    text: "Hey there! Your order has been Recieved. Thanks for shopping, Come back again soon.", // plain text body
  });

  console.log("Message sent: %s", info.messageId);
  
}

    main().catch(console.error);
// }