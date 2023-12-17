require("dotenv").config();
export default function (req, res) {
  const PASSWORD = process.env.password;
  const mailData = {
    from: "demo@demo.com",
    to: "your email",
    subject: `Message From ${req.body.name}`,
    text: req.body.message,
    html: <div>{req.body.message}</div>,
  };
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: "adoos.developer@gmail.com",
      pass: PASSWORD,
    },
    secure: true,
  });
  console.log(req.body);
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
    //   return res.json({ status: "Email Sent!" });
  });
  res.status(200);
}
