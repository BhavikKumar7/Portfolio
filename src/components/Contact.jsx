import React from 'react'
import { motion } from "framer-motion";

const Contact = () => {
  return (
    <section id="contact" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black pt-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 space-y-4">
      <div className='text-center md:text-left w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "anticipate" }}
          viewport={{ once: true }}
          className='inline-block'
        >
          <h2 className="text-4xl sm:text-5xl font-extrabold text-stone-100">
            Contact Me
          </h2>
          <motion.div
            initial={{ scaleX: 0, transformOrigin: "left" }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
            viewport={{ once: true }}
            className='h-[3px] bg-teal-400 mt-1'
          />
        </motion.div>
      </div>

      <div>
        
      </div>

    </section>
  )
}

export default Contact