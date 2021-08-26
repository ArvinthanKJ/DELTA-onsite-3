var nodemailer = require("nodemailer");
var express = require("express");

const { json } = require("body-parser");
const bodyParser = require("body-parser");
var cors = require("cors");
app = express();
app.use(cors({}));
app.use(express.json());

app.use(
  bodyParser.urlencoded({
    extended: false,
  })
);

app.set("view engine", "ejs");

app.listen(3020, "127.0.0.1");
console.log("reading");
var emailID;
app.post("/", (req, res) => {
  console.log(req.body.com);
  console.log("iiiiiiiiiiiiiiiiiiii");
  var transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "darksideisdope@gmail.com",
      pass: "lukeskywalker",
    },
  });

  var mailOptions = {
    from: "darksideisdope@gmail.com",
    to: emailID,
    subject: "Clipboard Email",
    text: req.body.com,
  };

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
  res.end("cool");
});
app.post("/email", (req, res) => {
  emailID = req.body.email;
  console.log(req.body);
  res.end("SUCCESS, ADDED THIS EMAIL: " + emailID);
});
