import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { motion } from "framer-motion";
import { User, Mail, Phone, MessageSquare, Send } from "lucide-react"; // Modern Icons
import contactImg from "../assets/contact1.png"; 

export default function ContactMe({ darkMode }) {
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
        alert("Message Sent Successfully! 🚀");
      })
      .catch(() => {
        alert("Error sending message. Please try again.");
        setLoading(false);
      });
  };

  return (
    <section className={`w-full min-h-screen flex flex-col items-center justify-center px-6 py-20 transition-colors duration-500 ${
      darkMode ? "bg-[#0a0a0c]" : "bg-orange-50/20"
    }`}>
      
      {/* Heading Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="text-center mb-12"
      >
        <h2 className={`text-4xl md:text-5xl font-black mb-4 ${darkMode ? "text-white" : "text-gray-900"}`}>
          📞 Get In <span className="text-orange-500">Touch</span>
        </h2>
        <div className="w-20 h-1.5 bg-gradient-to-r from-orange-500 to-yellow-400 mx-auto rounded-full shadow-lg shadow-orange-500/20"></div>
      </motion.div>

      {/* Main Card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className={`w-full max-w-6xl rounded-[2.5rem] border overflow-hidden grid md:grid-cols-2 gap-0 shadow-2xl transition-all duration-500 ${
          darkMode 
          ? "bg-white/5 border-white/10 shadow-black" 
          : "bg-white border-orange-100 shadow-orange-200/40"
        }`}
      >
        
        {/* Left Side: Illustration & Info */}
        <div className={`p-10 flex flex-col items-center justify-center transition-colors duration-500 ${
          darkMode ? "bg-white/5" : "bg-orange-50/50"
        }`}>
          <motion.img
            src={contactImg}
            alt="contact"
            className="w-full max-w-sm object-contain drop-shadow-2xl"
            animate={{ y: [0, -15, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="mt-8 text-center hidden md:block">
            <h4 className={`text-xl font-bold ${darkMode ? "text-white" : "text-gray-800"}`}>Let's talk about everything!</h4>
            <p className={`text-sm mt-2 ${darkMode ? "text-gray-400" : "text-gray-500"}`}>
              Hate forms? Send me an email at <br />
              <span className="text-orange-500 font-bold">nitinhiwale67@gmail.com</span>
            </p>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="p-8 md:p-12">
          <form ref={form} onSubmit={sendEmail} className="space-y-6">
            
            {/* Name Field */}
            <div className="space-y-2">
              <label className={`text-sm font-bold ml-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Full Name</label>
              <div className={`flex items-center border rounded-2xl px-4 py-3 transition-all ${
                darkMode ? "bg-black/20 border-white/10 focus-within:border-orange-500" : "bg-gray-50 border-gray-200 focus-within:border-orange-500"
              }`}>
                <User size={20} className="text-orange-500 mr-3" />
                <input
                  type="text"
                  name="user_name"
                  placeholder="Nitin Hiwale"
                  required
                  className={`w-full bg-transparent outline-none font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                />
              </div>
            </div>

            {/* Email Field */}
            <div className="space-y-2">
              <label className={`text-sm font-bold ml-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Email Address</label>
              <div className={`flex items-center border rounded-2xl px-4 py-3 transition-all ${
                darkMode ? "bg-black/20 border-white/10 focus-within:border-orange-500" : "bg-gray-50 border-gray-200 focus-within:border-orange-500"
              }`}>
                <Mail size={20} className="text-orange-500 mr-3" />
                <input
                  type="email"
                  name="user_email"
                  placeholder="nitin@example.com"
                  required
                  className={`w-full bg-transparent outline-none font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                />
              </div>
            </div>

            {/* Message Field */}
            <div className="space-y-2">
              <label className={`text-sm font-bold ml-1 ${darkMode ? "text-gray-400" : "text-gray-600"}`}>Your Message</label>
              <div className={`flex items-start border rounded-2xl px-4 py-3 transition-all ${
                darkMode ? "bg-black/20 border-white/10 focus-within:border-orange-500" : "bg-gray-50 border-gray-200 focus-within:border-orange-500"
              }`}>
                <MessageSquare size={20} className="text-orange-500 mr-3 mt-1" />
                <textarea
                  name="message"
                  placeholder="How can I help you today?"
                  required
                  className={`w-full bg-transparent outline-none resize-none h-32 font-medium ${darkMode ? "text-white" : "text-gray-800"}`}
                ></textarea>
              </div>
            </div>

            {/* Submit Button */}
            <motion.button
              type="submit"
              disabled={loading}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-gradient-to-r from-orange-500 to-yellow-500 text-white py-4 rounded-2xl font-black shadow-lg shadow-orange-500/30 flex items-center justify-center gap-3 transition-all"
            >
              {loading ? "Sending..." : (
                <>
                  Send Message <Send size={20} />
                </>
              )}
            </motion.button>
          </form>
        </div>
      </motion.div>
    </section>
  );
}