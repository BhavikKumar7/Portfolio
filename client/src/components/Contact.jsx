import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import countryCodes from "../data/countryCode.js";

const Contact = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const dialCode = document.getElementById("dialDisplay").textContent;

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: `${dialCode} ${e.target.phone.value}`,
      message: e.target.message.value,
    };

    try {
      const res = await fetch("https://portfolio-t3uw.onrender.com/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

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
      className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-b from-black via-gray-950 to-black px-5 sm:px-10 md:px-16 lg:px-20 xl:px-32 py-16 space-y-10"
    >
      <div className="text-center md:text-left w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          viewport={{ once: false }}
          className="inline-block"
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-100">
            Contact Me
          </h2>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            viewport={{ once: false }}
            className="h-[3px] bg-teal-400 mt-1"
          />
        </motion.div>
      </div>

      {/* Form & Success Message */}
      <div className="w-full max-w-3xl lg:max-w-4xl mx-auto px-2 sm:px-4">
        <AnimatePresence mode="wait">
          {!isSubmitted ? (
            <motion.form
              key="form"
              onSubmit={handleSubmit}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gray-900/40 backdrop-blur-lg rounded-2xl shadow-lg p-6 sm:p-8 border border-gray-800 space-y-6 w-full"
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
                  className="w-full p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-500 text-sm sm:text-base"
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
                  className="w-full p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-500 text-sm sm:text-base"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Phone Number
                </label>
                <div className="flex flex-col sm:flex-row sm:space-x-3 space-y-3 sm:space-y-0">
                  <div className="relative w-full sm:w-32">
                    <select
                      id="countrySelect"
                      className="absolute inset-0 opacity-0 cursor-pointer appearance-none bg-gray-900/90 text-gray-100 backdrop-blur-lg"
                      onChange={(e) => {
                        const selectedCode = e.target.value;
                        document.getElementById("dialDisplay").textContent =
                          selectedCode;
                      }}
                      defaultValue="+91"
                      required
                    >
                      {[...countryCodes]
                        .sort((a, b) => a.name.localeCompare(b.name))
                        .map(({ name, dial_code, code }) => (
                          <option
                            key={code}
                            value={dial_code}
                            className="bg-gray-900 text-gray-100"
                          >
                            {name} ({dial_code})
                          </option>
                        ))}
                    </select>

                    <div
                      id="dialDisplay"
                      className="w-full bg-gray-800 text-gray-200 rounded-xl px-3 py-3 flex items-center justify-between focus:outline-none focus:ring-2 focus:ring-teal-400 text-sm sm:text-base"
                    >
                      +91
                      <span className="text-gray-400 text-xs">▼</span>
                    </div>
                  </div>

                  <input
                    type="tel"
                    name="phone"
                    placeholder="Enter phone number"
                    className="flex-1 p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-500 text-sm sm:text-base"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-gray-300 mb-2">
                  Query / Collaboration
                </label>
                <textarea
                  rows="5"
                  name="message"
                  placeholder="Tell me about your project or query..."
                  className="w-full p-3 bg-gray-800 text-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-teal-400 placeholder-gray-500 text-sm sm:text-base resize-none min-h-[120px]"
                  required
                ></textarea>
              </div>

              <motion.button
                whileHover={!loading ? { scale: 1.03 } : {}}
                whileTap={!loading ? { scale: 0.97 } : {}}
                disabled={loading}
                type="submit"
                className={`w-full flex justify-center items-center gap-2 bg-teal-500 hover:bg-teal-400 text-black font-semibold text-base sm:text-lg py-3 rounded-xl transition-all duration-300 shadow-md ${
                  loading
                    ? "opacity-60 cursor-not-allowed"
                    : "hover:shadow-teal-500/30"
                }`}
              >
                {loading ? (
                  <>
                    <svg
                      className="animate-spin h-5 w-5 text-black"
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <circle
                        className="opacity-25"
                        cx="12"
                        cy="12"
                        r="10"
                        stroke="currentColor"
                        strokeWidth="4"
                      ></circle>
                      <path
                        className="opacity-75"
                        fill="currentColor"
                        d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
                      ></path>
                    </svg>
                    <span>Sending...</span>
                  </>
                ) : (
                  "Send Message"
                )}
              </motion.button>
            </motion.form>
          ) : (
            <motion.div
              key="success"
              initial={{ opacity: 0, scale: 0.9, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              className="bg-gray-900/50 backdrop-blur-lg border border-gray-800 rounded-2xl p-10 text-center shadow-lg"
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring", stiffness: 150 }}
                className="text-teal-400 text-5xl mb-4"
              >
                ✓
              </motion.div>
              <h3 className="text-2xl font-semibold text-gray-100 mb-2">
                Message Sent Successfully!
              </h3>
              <p className="text-gray-400">
                I’ll reach out to you as soon as possible. Thank you for getting
                in touch.
              </p>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default Contact;
