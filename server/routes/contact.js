import express from "express";
import nodemailer from "nodemailer";

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, phone, message } = req.body;

    if(!name || !email || !message){
        return res.status(400).json({ message: "All required fields must be filled.."});
    }

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        await transporter.sendMail({
            from: "Portfolio Contact Form",
            to: "bhavikrajputrr2004@gmail.com",
            subject: `New Message from ${name}`,
            text: `
                    You have a new contact form submission:

                    Name: ${name}
                    Email: ${email}
                    Phone: ${phone}
                    Message: ${message}
            `,
        });

        res.status(200).json({ message: "Message Sent successfully.. "})
    } catch (err) {
        console.error("Error sending email: ", err);
        res.status(500).json({ message: "Failed to send message" });
    }
});

export default router;