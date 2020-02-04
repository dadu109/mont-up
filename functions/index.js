const functions = require('firebase-functions');
const cors = require('cors')({ origin: true });
const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: functions.config().gmail.username,
        pass: functions.config().gmail.password
    }
});

module.exports.sendMail = functions.https.onRequest((req, res) => {
    cors(req, res, () => {
        console.log(req.body);

        const mailOptions = {
            from: req.body.email,
            to: 'miczekdev@gmail.com',
            subject: 'Nowa próba kontaktu z twojej strony!',
            html: `
                <div style="text-align:center;font-size:20px;font-family: 'Montserrat', sans-serif;">
                <p >Próba kontaktu: <span style='font-weight:bold'>${req.body.iin}</span></p>
                <p >E-mail: <span style='font-weight:bold'>${req.body.email}</span></p>
                <p>Numer telefonu: <span style='font-weight:bold'>${req.body.nr}</span></p>
                <br />
                <p>Treść: <span style='font-weight:bold'> ${req.body.text}</span></p>
                <div>
            `
        };

        return transporter.sendMail(mailOptions, (erro, info) => {
            if (erro) {
                return res.send(erro.toString());
            }
            return res.send(req.body);
        });
    });
});
