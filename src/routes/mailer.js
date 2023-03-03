const express = require('express');
const nodemailer = require('nodemailer');
const app = express();

const sendotp = (otp, mail) => {
    let otpval = otp;
    let mailid = mail;
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
        subject: "OTP for password reset @Buggify",
        text: `OTP for password change is ${otpval}`
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