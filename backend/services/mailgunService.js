require('dotenv').config();

const formData = require('form-data');
const Mailgun = require('mailgun.js');

const mailgun = new Mailgun(formData);
console.log("MAILGUN_API_KEY from env:", process.env.MAILGUN_API_KEY);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

exports.sendEmail = async ({ name, email, message }) => {
  const msgData = {
    from: `${name} <${email}>`,
    to: 'dev.esousasilva@gmail.com',
    subject: `Contact Form Message from ${name}`,
    text: message,
  };

  return await mg.messages.create(process.env.MAILGUN_DOMAIN, msgData);
};