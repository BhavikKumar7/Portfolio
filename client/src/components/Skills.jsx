import React from 'react'
import { motion } from "framer-motion";

const Skills = () => {
  return (
    <section id="skills" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black pt-20 px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32 space-y-4">
          <div className='text-center md:text-left w-full'>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity:1, y: 0 }}
              transition={{ duration: 1, ease: "anticipate" }}
              viewport={{ once: false }}
              className='inline-block'
            >
              <h1 className='text-4xl md:text-5xl text-stone-100 font-extrabold'>
                Skills
              </h1>
              <motion.div
                initial={{ scaleX: 0, transformOrigin: "left" }}
                whileInView={{ scaleX: 1 }}
                transition={{ duration: 1, ease: "anticipate", delay: 0.3 }}
                viewport={{ once: false }}
                className='h-[3px] bg-teal-400 mt-1'
              />
            </motion.div>
          </div>
        </section>
  )
}

export default Skills