const nodemailer = require("nodemailer");

module.exports = sendMail = async ({
  sendTo = "",
  subject = "",
  html = "",
}) => {
  let testAccount = await nodemailer.createTestAccount();

  let transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "danghoangson51@gmail.com",
      pass: "jlywspnsuoqfvkiu",
    },
  });

  const mailOptions = {
    from: "danghoangson51@gmail.com",
    to: sendTo,
    subject,
    html,
  };
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    return info.messageId;
  } catch (error) {
    console.error("send mail to", sendTo);
    console.error("send mail error", error);
    return null;
  }
};
