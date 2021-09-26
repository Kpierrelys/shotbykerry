const express = require("express");
const nodemailer = require("nodemailer");
const app = express();
const cors = require("cors");
require("dotenv").config();
const { google } = require('googleapis');

app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
 console.log(`Server is running on port: ${PORT}`);
});

if(process.env.NODE_ENV === "production") {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
      res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  })
} else {
  app.get('/', (req, res) => {
      res.send('Api running');
  })
}

const oAuth2Client = new google.auth.OAuth2(process.env.OAUTH_CLIENTID, process.env.OAUTH_CLIENT_SECRET, process.env.REDIRECT_URI);

oAuth2Client.setCredentials({ refresh_token: process.env.OAUTH_REFRESH_TOKEN });

const accessToken = oAuth2Client.getAccessToken();

let transporter = nodemailer.createTransport({
 service: "gmail",
 auth: {
   type: "OAuth2",
   user: process.env.EMAIL,
   pass: process.env.WORD,
   clientId: process.env.OAUTH_CLIENTID,
   clientSecret: process.env.OAUTH_CLIENT_SECRET,
   refreshToken: process.env.OAUTH_REFRESH_TOKEN,
   accessToken: accessToken,
 },
});
transporter.verify((err, success) => {
 err
   ? console.log(err)
   : success
});

app.post("/send", function (req, res) {
 let mailOptions = {
   from: `${req.body.mailerState.email}`,
   to: process.env.EMAIL,
   subject: `Message from: ${req.body.mailerState.email}`,
   text: `${req.body.mailerState.message}`,
 };

 transporter.sendMail(mailOptions, function (err, data) {
   if (err) {
     res.json({
       status: "fail",
     });
   } else {
     console.log("== Message Sent ==");
     res.json({
       status: "success",
     });
   }
 });
});