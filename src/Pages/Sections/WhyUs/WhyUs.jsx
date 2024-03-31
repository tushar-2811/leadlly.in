import React from 'react'
import { motion } from "framer-motion";
export default function WhyUs() {
  return (
    <div >
      
        <div className='grid grid-cols-12 grid-rows-12 w-[80vw] h-[90vh] mx-auto my-20 gap-y-4 gap-x-4'>
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.15 }}
        transition={{ duration: 0.5 }} className='col-span-3  row-span-5'><h2 className='font-bold text-[3vw] mt-[40%] text-indigo-600 ' > Don't Stress!</h2><p>we got your back with leadly's powerful learning suite:</p></motion.div>
        <div className='col-span-3  row-span-1'></div>
        
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.10 }}
        transition={{ duration: 0.6 }} className='relative col-span-6 bg-[#faf8fe] row-span-5 rounded-2xl ring-2 ring-purple-100 ring-offset-2 '>
          <h2 className='text-[3vw] mt-[10%] font-mono ml-5 font-semibold font-sans' > Growth<br/> Meter</h2><p className='text-xl px-4'>Track your progress</p>
          <img src="./imgs/sections/Group 166 2 1.png" className='absolute w-[35%] right-0 bottom-0   h-auto '></img> </motion.div>
           
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.10 }}
        transition={{ duration: 0.7 }} className='relative col-span-3 bg-[#faf8fe]  row-span-6 rounded-2xl ring-2 ring-purple-100 ring-offset-2 '>
           <h2 className='text-[2.5vw] mt-[10%] font-mono ml-5 font-bold font-sans' > Revision<br></br> Tracker</h2><p className='px-4'>Stay on top of<br/> your revision</p>
        <img src="./imgs/sections/Group 162 1.png" className='absolute w-[60%] left-[40%] bottom-0   h-auto '></img> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.10  }}
        transition={{ duration: 0.5 }}  className='relative col-span-3  bg-[#faf8fe] row-span-2 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[2.2vw] mt-[7%] font-mono ml-5 font-semibold font-sans' >Workshops</h2><p></p>
        <img src="./imgs/sections/Group 165 1.png" className='absolute w-[25%] right-[1.5vw] bottom-0   h-auto '></img> </motion.div>
        
        

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.10 }}
        transition={{ duration: 0.9}} className='relative col-span-3 bg-[#faf8fe] row-span-6 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className=' text-[2.5vw] mt-[1vw] font-mono ml-5 font-semibold font-sans' > Mentorship& Guidance Session</h2><p className='px-4 text-xl'>guided learning journey</p>
          <img src="./imgs/sections/Vecto 2.png" className='absolute w-[40%] right-0 bottom-0  h-auto '></img> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.10 }}
        transition={{ duration: 1 }} className='relative col-span-3 bg-[#faf8fe] row-span-6 my-10 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[3vw] mt-[50%] font-mono ml-5 font-semibold font-sans' > Error Book </h2><p className='px-4'></p>
          <img src="./imgs/sections/Group 163.png" className='absolute w-[60%] right-0 top-0  h-auto '></img> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        whileHover={{ scale: 1.10 }}
        transition={{ duration: 0.7 }} className='relative col-span-6 bg-[#faf8fe] row-span-5 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[3vw] mt-[10%] font-mono ml-5 font-semibold font-sans' > Personalized<br/> Planner</h2><p className='px-4 text-xl'>Crafting your roadmap</p>
          <img src="./imgs/sections/Group 164.png" className='absolute w-[40%] right-0 bottom-0  h-auto '></img></motion.div>
        </div>
        
    </div>
   
  )
}
