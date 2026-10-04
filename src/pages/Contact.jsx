import React, { useState } from "react";
import { motion } from "framer-motion";
import emailjs from "emailjs-com";

import githubLogo from "../../public/github.png";
import linkedinLogo from "../../public/linkedin.png";
import gmailLogo from "../../public/gmail.png";
import whatsappLogo from "../../public/whatsapp.png";
import instagramLogo from "../../public/insta.png";
import facebookLogo from "../../public/facebook.png";

import "../CSS/Contact.css";
import "../index.css";

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    contact: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");
  const [sending, setSending] = useState(false);
  const MAX_MESSAGE = 500;

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (sending) return;

    if (!form.name || !form.contact || !form.subject || !form.message) {
      setStatus("⚠️ Please fill in all fields.");
      return;
    }

    const emailPattern = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;
    const isEmail = emailPattern.test(form.contact);

    if (!isEmail && isNaN(form.contact)) {
      setStatus("⚠️ Please enter a valid email or phone number.");
      return;
    }

    setStatus("Sending...");
    setSending(true);

    emailjs
      .send(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        {
          from_name: form.name,
          contact_info: form.contact,
          subject: form.subject,
          message: form.message,
        },
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY
      )
      .then(
        () => {
          setSending(false);
          setStatus("✅ Message sent successfully!");

          setForm({
            name: "",
            contact: "",
            subject: "",
            message: "",
          });
        },
        (error) => {
          console.error("FAILED...", error);
          setSending(false);
          setStatus("❌ Failed to send. Try again later.");
        }
      );
  };

  const quickLinks = [
    {
      img: githubLogo,
      title: "GitHub",
      link: "https://github.com/varsh23-p",
    },
    {
      img: linkedinLogo,
      title: "LinkedIn",
      link: "https://www.linkedin.com/in/varsha-patil23/",
    },
    {
      img: gmailLogo,
      title: "Email",
      link: "mailto:varshadpatil2309@gmail.com",
    },
    {
      img: whatsappLogo,
      title: "WhatsApp",
      link: "https://wa.me/+918669020577",
    },
    {
      img: instagramLogo,
      title: "Instagram",
      link: "https://www.instagram.com/varsha.patil2309/",
    },
  ];

  return (
    <section className="contact-section">
      <motion.h1
        initial={{ opacity: 0, y: -15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        className="contact-title"
      >
        Let’s Connect & Collaborate 🤝
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="contact-subtitle"
      >
        Whether it’s a new project, a collaboration, or just to say hi —
        I’d love to hear from you!
      </motion.p>

      {/* Quick Links */}
      <motion.div className="contact-links">
        {quickLinks.map((item, i) => (
          <motion.a
            key={i}
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 250 }}
          >
            <motion.img
              src={item.img}
              alt={item.title}
              className="social-icon"
              animate={{ y: [0, -6, 0] }}
              transition={{
                duration: 3 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.a>
        ))}
      </motion.div>

      {/* Contact Form */}
      <motion.form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4, duration: 0.9 }}
        className="contact-form"
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="contact"
          placeholder="Your Email or Phone"
          value={form.contact}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={form.subject}
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Your Message..."
          value={form.message}
          onChange={handleChange}
          rows="5"
          maxLength={MAX_MESSAGE}
          required
        />
        <div style={{ textAlign: "right", fontSize: 12, color: "var(--muted)", marginTop: -4 }}>
          {form.message.length}/{MAX_MESSAGE}
        </div>

        <motion.button
          type="submit"
          className="contact-btn"
          disabled={sending}
          whileHover={sending ? undefined : { scale: 1.05 }}
          whileTap={sending ? undefined : { scale: 0.95 }}
          style={sending ? { opacity: 0.6, cursor: "not-allowed" } : undefined}
        >
          {sending ? "Sending…" : "🚀 Send Message"}
        </motion.button>

        {status && (
          <motion.p
            initial={{ opacity: 0, y: 5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className="contact-status"
            role="status"
            aria-live="polite"
          >
            {status}
          </motion.p>
        )}
      </motion.form>
    </section>
  );
}
