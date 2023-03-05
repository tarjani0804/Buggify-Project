const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const sendotp = (otp, mail) => {
    let msg = otp;
    let mailid = mail;
    let number = "";
      for (let i = 0; i < 20; i++) {
        number += Math.floor(Math.random() * 10);
      }
  const token_id = number
    console.log('op1');
    let mailTransporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "nullify.bug@gmail.com",
            pass: "lhcmjzbneuxgwgre"
        }
    })
    let details = {
        from: "nullify.bug@gmail.com",
        to: `${mailid}`,
        subject: `Token ID:${token_id} from Buggify`,
        text: `${msg}`
    }
    mailTransporter.sendMail(details, (err) => {
        console.log('op here');
        if (err) {
            console.log("It's an error");
        } else {
            console.log("email Has Sent");
        }
    })
}

module.exports = sendotp;