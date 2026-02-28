import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import countryCodes from "../data/countryCode.js";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [dialCode, setDialCode] = useState("+91");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: `${dialCode} ${e.target.phone.value}`,
      message: e.target.message.value,
    };

    try {
      const res = await fetch(
        "https://portfolio-t3uw.onrender.com/api/contact",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(formData),
        }
      );

      if (res.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send message. Please try again later.");
      }
    } catch (error) {
      console.error(error);
      alert("Something went wrong.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen flex flex-col justify-center items-center bg-transparent px-5 sm:px-10 md:px-16 lg:px-20 xl:px-32 py-16"
    >
      {/* Heading */}
      <div className="text-center w-full mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="inline-block"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold text-stone-100 tracking-tight">
            Contact Me
          </h2>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className="h-[3px] bg-gradient-to-r from-teal-400 to-stone-400 mt-1"
          />
        </motion.div>
      </div>

      {/* Two Column Layout */}
      <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-2 gap-12">

        {/* LEFT PANEL */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="bg-gray-900/40 backdrop-blur-lg rounded-2xl border border-gray-800 p-8 space-y-8"
        >
          <div>
            <h3 className="text-2xl font-semibold text-stone-100 mb-4">
              Let’s Connect
            </h3>
            <p className="text-gray-400 leading-relaxed">
              I am open to backend development roles, internships,
              freelance collaborations, and innovative tech discussions.
              Feel free to reach out or connect with me through
              the platforms below.
            </p>
          </div>

          <div className="space-y-12">
            <a
              href="https://linkedin.com/in/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 transition-all p-4 rounded-xl"
            >
              <span className="text-teal-400 text-xl">🔗</span>
              <div>
                <p className="text-gray-200 font-medium">LinkedIn</p>
                <p className="text-gray-400 text-sm">Professional Network</p>
              </div>
            </a>

            <a
              href="https://github.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 transition-all p-4 rounded-xl"
            >
              <span className="text-teal-400 text-xl">💻</span>
              <div>
                <p className="text-gray-200 font-medium">GitHub</p>
                <p className="text-gray-400 text-sm">Projects & Code</p>
              </div>
            </a>

            <a
              href="https://leetcode.com/YOUR_USERNAME"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-4 bg-gray-800 hover:bg-gray-700 transition-all p-4 rounded-xl"
            >
              <span className="text-teal-400 text-xl">🧠</span>
              <div>
                <p className="text-gray-200 font-medium">LeetCode</p>
                <p className="text-gray-400 text-sm">
                  Data Structures & Algorithms
                </p>
              </div>
            </a>
          </div>
        </motion.div>

        {/* RIGHT PANEL - FORM */}
        <div>
          <AnimatePresence mode="wait">
            {!isSubmitted ? (
              <motion.form
                key="form"
                onSubmit={handleSubmit}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.8 }}
                className="bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-lg p-8 border border-gray-800 space-y-6"
              >
                {/* Name */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your name"
                    className="w-full p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>

                {/* Email */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    className="w-full p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
                    required
                  />
                </div>

                {/* Phone */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Phone Number
                  </label>
                  <div className="flex gap-3">
                    <select
                      value={dialCode}
                      onChange={(e) => setDialCode(e.target.value)}
                      className="w-28 bg-gray-800 text-gray-200 rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-teal-400"
                    >
                      {[...countryCodes]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(({ name, dial_code, code }) => (
                          <option key={code} value={dial_code}>
                            {dial_code}
                          </option>
                        ))}
                    </select>

                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter phone number"
                      className="flex-1 p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400"
                      required
                    />
                  </div>
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-semibold text-gray-300 mb-2">
                    Query / Collaboration
                  </label>
                  <textarea
                    rows="5"
                    name="message"
                    placeholder="Tell me about your project or query..."
                    className="w-full p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                    required
                  />
                </div>

                <motion.button
                  whileHover={!loading ? { scale: 1.03 } : {}}
                  whileTap={!loading ? { scale: 0.97 } : {}}
                  disabled={loading}
                  type="submit"
                  className={`w-full flex justify-center items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold py-3 rounded-xl transition-all ${
                    loading ? "opacity-60 cursor-not-allowed" : ""
                  }`}
                >
                  {loading ? "Sending..." : "Send Message"}
                </motion.button>
              </motion.form>
            ) : (
              <motion.div
                key="success"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 text-center"
              >
                <div className="text-teal-400 text-5xl mb-4">✓</div>
                <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                  Message Sent Successfully!
                </h3>
                <p className="text-gray-400">
                  I’ll reach out to you as soon as possible.
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Contact;