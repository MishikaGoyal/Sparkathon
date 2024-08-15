import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method === 'POST') {
    const { name, email, message } = req.body;

    // Create a transporter object using SMTP transport
    const transporter = nodemailer.createTransport({
      service: 'Gmail', // or use a different email service
      auth: {
        user: process.env.EMAIL_USER, // Your email
        pass: process.env.EMAIL_PASS, // Your email password or app-specific password
      },
    });

    try {
      await transporter.sendMail({
        from: email,
        to: 'predefined-email@example.com', // Predefined email address to receive the feedback
        subject: `Feedback from ${name}`,
        text: message,
        html: `<p><strong>Name:</strong> ${name}</p>
               <p><strong>Email:</strong> ${email}</p>
               <p><strong>Message:</strong> ${message}</p>`,
      });

      res.status(200).json({ message: 'Feedback sent successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Error sending feedback', error });
    }
  } else {
    res.status(405).json({ message: 'Method not allowed' });
  }
}
