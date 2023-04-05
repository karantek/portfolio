const express = require("express");
const app = express();
const port = 1203;
const nodemailer = require('nodemailer');
const cors = require('cors');

app.use(express.json());
app.use(cors());

const getMailContent = (name) => {
    return `
    Dear ${name},
    <br>
    <br>

    I hope this email finds you well. I wanted to take a moment to express my appreciation for connecting with me. I am grateful for the opportunity to connect with you.
    <br>
    <br>

    If there is anything specific you would like to discuss, please don't hesitate to reach out to me at koolkaran200@gmail.com. I would be more than happy to chat further and explore potential opportunities.

    <br>
    <br>

    Thank you again for connecting with me. I look forward to staying in touch and potentially working together in the future.

    <br>
    <br>

    Best regards,
    
    <br>
    <br>
    
    Karan Tekwani
    `;
}

function getMailContentSelf(name, phone, email, subject, msg) {
    return `
    name: ${name}
    
    <br>
    <br>
    
    phone:${phone}
    
    <br>
    <br>

    email:${email}
    
    <br>
    <br>

    subject:${subject}

    <br>
    <br>

    message:${msg}
`;
}

function sendSelfMail(req) {

    const { name, phone, email, subject, msg } = req.body;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'koolkaran200@gmail.com',
            // pass: 'l@4bnSQCU49Y' // real password
            pass: 'vaxypbbwsmjkazbw' // app password
        }
    });

    const mailOptions = {
        from: 'koolkaran200@gmail.com',
        to: 'koolkaran200@gmail.com',
        subject: 'One new inquiry',
        html: getMailContentSelf(name, phone, email, subject, msg)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent to', req.body.email);
        }
    });
}

function sendmail(req, res) {
    const name = req.body.name;

    const transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
            user: 'koolkaran200@gmail.com',
            // pass: 'l@4bnSQCU49Y' // real password
            pass: 'vaxypbbwsmjkazbw' // app password
        }
    });

    const mailOptions = {
        from: 'koolkaran200@gmail.com',
        to: req.body.email,
        subject: 'Karan Tekwani- Thanks you for connecting',
        html: getMailContent(name)
    };

    transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
            res.status(500).send("some error occured");
            return;
        } else {
            console.log('Email sent to', req.body.email);
            sendSelfMail(req);
            res.send("done");
        }
    });
}

app.get("/", (req, res) => {
    res.send("Server is running ...");
})
app.post("/sendmail", sendmail);

app.listen(port, () => {
    console.log(`Server is listening at http://localhost:${port}`);
})