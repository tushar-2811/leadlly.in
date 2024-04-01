import React from 'react'
import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
export default function WhyUs() {
  return (
    <div >

      {/* for phone */}
      <motion.div 
      initial={{ opacity: 0, scale:0.5 }}
      whileInView={{ opacity: 1,scale:1 }}
      transition={{ duration: 0.8,ease:"easeInOut" }}
       className='block md:hidden bg-gradient-to-r bg-clip-text from-[#5900d9] - bg-purple-400  justify-start  ' ><h2 className='font-bold md:hidden ml-5 text-[3rem] mt-10  text-transparent ' > Don't Stress!</h2></motion.div>
      <div className=' md:hidden grid grid-cols-12 grid-rows-12 w-[95vw] h-[100vh]  mx-auto my-5 gap-y-4 gap-x-4'>
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.5 ,delay:0.2 }} className='   col-span-6  row-span-2'><p className='font-lato font-bold ml-3  text-[0.9rem]'>we got your back with leadly's  powerful learning suite:</p></motion.div>


<motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.5 ,delay:0.2}} className='relative col-span-6 bg-[#faf8fe] row-span-4 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className=' text-[1.5rem] mt-[10%] leading-tight  ml-[3%] font-bold font-sans' > Mentorship& Guidance Session</h2><p className='px-2 text-[0.9rem]'>guided learning journey</p>
          <img src="./imgs/sections/Vecto 2.png" className='absolute w-[40%] right-0 bottom-0  h-auto '></img> </motion.div>
        

          <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.5,delay:0.2 }}  className='relative col-span-6  bg-[#faf8fe] row-span-1 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[1.2rem] mt-[7%] leading-tight ml-2 font-bold font-sans' >Workshops</h2><p></p>
        <img src="./imgs/sections/Group 165 1.png" className='absolute w-[25%] right-[1.5vw] bottom-0   h-auto '></img> </motion.div>
       

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.6 ,delay:0.2 }} className='relative col-span-6 bg-[#faf8fe]  row-span-3 rounded-xl ring-2 ring-purple-100 ring-offset-2 '>
           <h2 className='text-[1.4rem] mt-[5%] leading-tight  ml-2 font-bold font-sans' > Revision<br></br> Tracker</h2><p className='px-2 text-[0.8rem]'>Stay on top of<br/> your revision</p>
        <img src="./imgs/sections/Group 162 1.png" className='absolute w-[50%] right-0 bottom-0   h-auto '></img> </motion.div>
         

        
         <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.7,delay:0.2 }} className='relative col-span-6 bg-[#faf8fe] row-span-2 my-3 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[1.2rem] mt-[20%] leading-tight  ml-2 font-bold font-sans' > Error Book </h2><p className='px-1 text-[0.8rem]'>embrace your mistake</p>
          <img src="./imgs/sections/Group 163.png" className='absolute w-[30%] right-0 top-0  h-auto '></img> </motion.div>
       
        

        
         <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.8, delay:0.4 }} className='relative col-span-12 bg-[#faf8fe] row-span-3 rounded-xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[2rem] mt-[5%]  ml-5  font-bold font-sans leading-tight' > Personalized<br/> Planner</h2><p className='px-5 text-[1rem]'>Crafting your roadmap</p>
          <img src="./imgs/sections/Group 164.png" className='absolute w-[40%] right-0 bottom-0  h-auto '></img></motion.div>
        

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.8 ,delay:0.5 }} className='relative  col-span-12 bg-[#faf8fe] row-span-3 rounded-xl ring-2 ring-purple-100 ring-offset-2 '>
          <h2 className='text-[2rem] mt-[5%]  ml-5 font-bold leading-tight font-sans' > Growth<br/> Meter</h2><p className='text-[1rem] px-4'>Track your progress</p>
          <img src="./imgs/sections/Group 166 2 1.png" className='absolute w-[35%] right-0 bottom-0   h-auto '></img> </motion.div>
          </div>   
         

      {/* for computer */}
      
      <motion.div 
      initial={{ opacity: 0, scale:0.5 }}
      whileInView={{ opacity: 1,scale:1 }}
      transition={{ duration: 1,ease:"easeInOut" }}
       className='md:block w-[60vw] hidden bg-gradient-to-r bg-clip-text  mt-10 from-[#5900d9] - bg-purple-400  ' ><h2 className='font-bold inline ml-[10vw] text-center text-[5rem]  text-transparent ' > Don't Stress!</h2></motion.div>
        <div className='hidden md:grid md:grid-cols-12 md:grid-rows-12 md:w-[80vw] md:h-[90vh] mx-auto mb-10 gap-y-4 gap-x-4'>
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.5 }} className='   md:col-span-3  md:row-span-4'><p className='text-[1.8rem] font-sans font-black  leading-tight'>we got your back with leadly's powerful learning suite:</p></motion.div>
        <div className='col-span-3  row-span-1'></div>
        
        
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.6 }} className='relative  md:col-span-6 bg-[#faf8fe] md:row-span-5 rounded-2xl ring-2 ring-purple-100 ring-offset-2 '>
          <h2 className='text-[3vw] mt-[5%]  leading-tight ml-5 font-semibold font-sans' > Growth<br/> Meter</h2><p className='text-xl px-4'>Track your progress</p>
          <img src="./imgs/sections/Group 166 2 1.png" className='absolute w-[35%] right-0 bottom-0   h-auto '></img> </motion.div>
           
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.7 }} className='relative md:col-span-3 bg-[#faf8fe]  md:row-span-6 rounded-2xl ring-2 ring-purple-100 ring-offset-2 '>
           <h2 className='text-[2.5vw] mt-[10%] font-mono leading-tight ml-5 font-bold font-sans' > Revision<br></br> Tracker</h2><p className='px-4'>Stay on top of<br/> your revision</p>
        <img src="./imgs/sections/Group 162 1.png" className='absolute w-[60%] left-[40%] bottom-0   h-auto '></img> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.5 }}  className='relative md:col-span-3  bg-[#faf8fe] md:row-span-3 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[2.2vw] mt-[7%] font-mono ml-5 leading-tight font-semibold font-sans' >Workshops</h2><p></p>
        <img src="./imgs/sections/Group 165 1.png" className='absolute w-[25%] right-[1.5vw] bottom-0   h-auto '></img> </motion.div>
        
        

        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
       
        transition={{ duration: 0.9}} className='relative md:col-span-3 bg-[#faf8fe] md:row-span-6 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className=' text-[2.5vw] mt-[1vw] font-mono leading-tight ml-5 font-semibold font-sans' > Mentorship& Guidance Session</h2><p className='px-4 text-xl'>guided learning journey</p>
          <img src="./imgs/sections/Vecto 2.png" className='absolute w-[40%] right-0 bottom-0  h-auto '></img> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 1 }} className='relative md:col-span-3 bg-[#faf8fe] md:row-span-6 my-10 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[3vw] mt-[40%] font-mono ml-5 leading-tight font-semibold font-sans' > Error Book </h2><p className='px-4'>embrace your mistake</p>
          <img src="./imgs/sections/Group 163.png" className='absolute w-[50%] right-0 top-0  h-auto '></img> </motion.div>
        <motion.div initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        
        transition={{ duration: 0.7 }} className='relative md:col-span-6 bg-[#faf8fe] md:row-span-5 rounded-2xl ring-2 ring-purple-100 ring-offset-2'>
          <h2 className='text-[3vw] mt-[10%] font-mono ml-5 leading-tight font-semibold font-sans' > Personalized<br/> Planner</h2><p className='px-4 text-xl'>Crafting your roadmap</p>
          <img src="./imgs/sections/Group 164.png" className='absolute w-[40%] right-0 bottom-0  h-auto '></img></motion.div>
        </div>
        
    </div>
   
  )
}
