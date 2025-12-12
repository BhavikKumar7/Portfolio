import React from 'react'
import { motion } from "framer-motion";
import FlowingMenu from './FlowingMenu';

const Skills = () => {

  const skillItems = [
    { text: 'React', image: 'https://picsum.photos/600/400?random=10' },
    { text: 'JavaScript', image: 'https://picsum.photos/600/400?random=11' },
    { text: 'MongoDB', image: 'https://picsum.photos/600/400?random=12' },
    { text: 'Node.js', image: 'https://picsum.photos/600/400?random=13' }
  ];

  return (
    <section id="skills" className="min-h-screen relative overflow-hidden bg-gradient-to-b from-black via-gray-950 to-black px-6 sm:px-10 md:px-16 lg:px-20 xl:px-32">
      <div className='text-center md:text-left w-full'>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className='inline-block mb-8'
        >
          <h1 className='text-4xl md:text-5xl text-stone-100 font-extrabold tracking-tight'>
            Skills
          </h1>
          <motion.div
            initial={{ scaleX: 0 }}
            whileInView={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.3 }}
            className='h-[3px] bg-gradient-to-r from-teal-400 to-stone-400 mt-1'
          />
        </motion.div>
      </div>

      <div
        style={{ height: "600px" }}
        className="flex items-center justify-center"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6 }}
          className="px-8 py-6 rounded-xl border border-gray-700 bg-gray-900/60 backdrop-blur-md shadow-lg"
        >
          <h2 className="text-xl md:text-2xl font-semibold text-stone-200 tracking-wide">
            Work Under Progress
          </h2>
        </motion.div>
      </div>


    </section>
  )
}

export default Skills