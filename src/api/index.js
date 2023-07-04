import { createEndpoint } from '@sveltejs/kit/api';
import express from 'express';
import nodemailer from 'nodemailer';

export const app = express();
const router = express.Router();

const transporter = nodemailer.createTransport({
  service: 'Gmail',
  auth: {
    user: 'queengui99@gmail.com',
    pass: 'Petitponey93100biatch!'
  }
});

router.post('/send-email', async (req, res) => {
  const { name, email, subject, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'guillaume.gaudin@m2i-group.fr',
    subject: `Nouveau message de contact - ${subject}`,
    text: `Nom: ${name}\nE-mail: ${email}\nMessage: ${message}`
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log('E-mail envoyé : ' + info.response);
    res.status(200).json({ message: 'Votre message a été envoyé avec succès !' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Une erreur est survenue lors de l\'envoi de l\'e-mail.' });
  }
});

app.use('/api', router);

export const endpoint = createEndpoint(app);