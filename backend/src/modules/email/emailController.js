import nodemailer from 'nodemailer';

export const emailController = (req, res) => {
  let smtpConfig = {
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    auth: {
      user: 'prevencemasmysl.team01',
      pass: process.env.EMAIL_PASSWORD,
    },
  };
  let transporter = nodemailer.createTransport(smtpConfig);
  let mailOptions = {
    from: `"${req.body.name}" <${req.body.email}>`,
    to: 'prevencemasmysl.team01@gmail.com',
    subject: 'Prevence má smysl',
    text: `${req.body.text} ${req.body.email}`,
  };
  transporter.sendMail(mailOptions, error => {
    if (error) {
      return console.log(error);
    } else {
      res.json({ status: 'email send' });
    }
  });
};
