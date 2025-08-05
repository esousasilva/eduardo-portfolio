const mailgunService = require('../services/mailgunService');

exports.submitContactForm = async (req, res) => {
  const { name, email, message } = req.body;

  try {
    console.log(name + email + message);
    await mailgunService.sendEmail({ name, email, message });
    res.status(200).json({ success: true, message: 'Message sent successfully.' });
  } catch (error) {
    console.error("Mailgun error:", error);
    res.status(500).json({ success: false, error: error.message });
  }
};