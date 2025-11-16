import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";

export default function ContactMe() {
  const form = useRef();
  const [loading, setLoading] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();
    setLoading(true);

    const name = form.current.user_name.value;
    const email = form.current.user_email.value;
    const message = form.current.message.value;

    emailjs
      .send(
        "service_8f1jhnf",
        "template_yr4jxtg",
        {
          user_name: name,
          user_email: email,
          message,
          subject: `New Message from: ${name} (${email})`,
          reply_to: email,
        },
        "XgLPd4OghrfW_Ighg"
      )
      .then(() => {
        setLoading(false);
        form.current.reset();
      })
      .catch(() => {
        alert("Error sending message");
        setLoading(false);
      });
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center p-6 md:p-12 bg-white">
      <motion.div
        initial={{ opacity: 0, y: 60, scale: 0.9 }}
        whileInView={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.8, type: "spring" }}
        className="w-full max-w-2xl mx-auto backdrop-blur-3xl bg-white shadow-2xl rounded-3xl p-8 md:p-12 space-y-8 border border-gray-200 mt-10 mb-10"
      >
        <motion.h2
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.7 }}
          className="text-3xl md:text-4xl font-extrabold text-center bg-gradient-to-r from-purple-600 to-indigo-600 bg-clip-text text-transparent"
        >
          Contact Me
        </motion.h2>

        <form ref={form} onSubmit={sendEmail} className="space-y-6">
          <div>
            <label className="font-medium">Your Name</label>
            <motion.input
              whileFocus={{ scale: 1.03, borderColor: "#7C3AED" }}
              type="text"
              name="user_name"
              required
              className="w-full p-3 rounded-xl border outline-none transition-all mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Your Email</label>
            <motion.input
              whileFocus={{ scale: 1.03, borderColor: "#3B82F6" }}
              type="email"
              name="user_email"
              required
              className="w-full p-3 rounded-xl border outline-none transition-all mt-1"
            />
          </div>

          <div>
            <label className="font-medium">Message</label>
            <motion.textarea
              whileFocus={{ scale: 1.03, borderColor: "#8B5CF6" }}
              name="message"
              required
              className="w-full p-3 h-36 rounded-xl border outline-none resize-none transition-all mt-1"
            ></motion.textarea>
          </div>

          <motion.button
            type="submit"
            disabled={loading}
            whileHover={{ scale: 1.04 }}
            whileTap={{ scale: 0.96 }}
            animate={loading ? { scale: [1, 1.05, 1] } : {}}
            transition={{ duration: 0.6, repeat: loading ? Infinity : 0 }}
            className="w-full bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-semibold p-3 rounded-xl shadow-lg tracking-wide disabled:opacity-50"
          >
            {loading ? "Sending..." : "Send Message 🚀"}
          </motion.button>
        </form>
      </motion.div>
    </section>
  );
}
