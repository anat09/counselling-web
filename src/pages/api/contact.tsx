import { NextApiRequest, NextApiResponse } from "next";
const contact = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method Not Allowed'})
  const { email, message, name, token } = req.body

  try {
    const recaptchaResponse = await fetch(
      process.env.RECAPTCHA_URL,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded'
        },
        body: `secret=${process.env.RECAPTCHA_KEY}&response=${token}`,
      }
    );
    const response = await recaptchaResponse.json();
    if (!response.success) return res.status(400).json({ error: "ReCAPTCHA challenge failure"})
  }
  catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'The server failed to process the request' })
  }
  
  const transporter = require('nodemailer').createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true,
    auth : {
      user: process.env.MAIL_HOST,
      pass: process.env.MAIL_PASS,
    },
  })

  const mailData = {
    from: process.env.MAIL_HOST,
    to: process.env.NEXT_PUBLIC_EMAIL_ADDRESS,
    subject: `Message From ${name} at ${email}`,
    text: message,
    html: `<div>${message}</div>`
  };

  try {
    await transporter.sendMail(mailData);
  } catch (err) {
    console.error(err)
    return res.status(500).json({ error: 'The server failed to process the request' })
  }

  return res.json({ success: `Email has been sent successfully` })
}

export default contact;