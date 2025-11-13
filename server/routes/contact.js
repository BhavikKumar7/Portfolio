import express from "express";
import axios from "axios";

const router = express.Router();

router.post("/", async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ message: "All required fields must be filled." });
  }

  try {
    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Portfolio Contact Form", email: "bhavikrajputrr2004@gmail.com" },
        to: [{ email: "bhavikrajputrr2004@gmail.com" }],
        subject: `New Message from ${name}`,
        textContent: `
          You have a new contact form submission:
          Name: ${name}
          Email: ${email}
          Phone: ${phone}
          Message: ${message}
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    await axios.post(
      "https://api.brevo.com/v3/smtp/email",
      {
        sender: { name: "Bhavik Kumar", email: "bhavikrajputrr2004@gmail.com" },
        to: [{ email }],
        subject: "Thank you for reaching out!",
        textContent: `
          Hi ${name},

          Thank you for contacting me. I have received your message and will get back to you as soon as possible.

          Regards,
          Bhavik Kumar
        `,
      },
      {
        headers: {
          accept: "application/json",
          "api-key": process.env.BREVO_API_KEY,
          "content-type": "application/json",
        },
      }
    );

    res.status(200).json({ message: "Message sent successfully." });
  } catch (error) {
    console.error("Error sending email:", error.response?.data || error.message);
    res.status(500).json({ message: "Failed to send message", error });
  }
});

export default router;