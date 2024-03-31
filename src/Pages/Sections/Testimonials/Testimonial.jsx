import React from 'react'
import {motion} from "framer-motion";
export default function Testimonial() {
  return (
    <div>
        <motion.div
        initial={{scale:0.3, opacity:0.3}}
        whileInView={{scale:1, opacity:1}}
        transition={{duration:0.5}}

        className='flex justify-center mb-10 text-6xl font-bold   text-purple-700'>Testimonials </motion.div>
      <div
      className='flex overflow-hidden w-screen h-[180vh]  '>
        <motion.div className='relative left-[50vw]  w-2 rounded-full bg-gradient-to-b from-purple-500 to-pink-500'
        initial={{height:"1vh"}}
        whileInView={{height:"calc(175vh)" }}
        transition={{duration:10}}
        
        >
        </motion.div>
        <motion.div className='relative w-[20%] '
        initial={{opacity:0, x:"calc(0vw)"}}
        whileInView={{opacity:1, x:"calc(25vw)"}}
        transition={{duration:0.7}}
        >
        
          <img class="h-10 w-10 rounded-full mx-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
         
            <h3 class="text-[0.8rem] font-sans text-center font-semibold leading-7 tracking-tight text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut deleniti sed a aliquid doloremque mollitia non alias. Accusamus laboriosam quos eveniet harum ratione sapiente aut vero quisquam saepe eligendi?</h3>
            <p class="text-[0.7rem] text-center font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            <motion.div className='relative overflow-visible h-2 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 left-[23%]'
           initial={{width:"0%"}}
            whileInView={{width:"100%"}}
            transition={{duration:0.7, delay:0.7}}
            >

            </motion.div>
          
     
        </motion.div>

        <motion.div className='relative w-[20%] top-[35vh]'
        initial={{opacity:0, x:"calc(70vw)"}}
        whileInView={{opacity:1, x:"calc(35vw)"}}
        transition={{duration:0.7}}
        >
        
          <img class="h-10 w-10 rounded-full mx-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
         
            <h3 class="text-[0.8rem] text-center font-semibold leading-7 tracking-tight text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut deleniti sed a aliquid doloremque mollitia non alias. Accusamus laboriosam quos eveniet harum ratione sapiente aut vero quisquam saepe eligendi?</h3>
            <p class="text-[0.7rem] text-center font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            <motion.div className='relative overflow-visible h-2 rounded-full bg-purple-600 left-[-25%]'
           initial={{width:"0%"}}
            whileInView={{width:"100%"}}
            transition={{duration:0.7, delay:0.7}}
            >

            </motion.div>
     
        </motion.div>
        <motion.div className='relative w-[20%] left-[-40%] top-[70vh] '
        initial={{opacity:0, x:"calc(0vw)"}}
        whileInView={{opacity:1, x:"calc(25vw)"}}
        transition={{duration:0.7}}
        >
        
          <img class="h-10 w-10 rounded-full mx-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
         
            <h3 class="text-[0.8rem] text-center font-semibold leading-7 tracking-tight text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut deleniti sed a aliquid doloremque mollitia non alias. Accusamus laboriosam quos eveniet harum ratione sapiente aut vero quisquam saepe eligendi?</h3>
            <p class="text-[0.7rem] text-center font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            <motion.div className='relative overflow-visible h-2 rounded-full bg-purple-600 left-[25%]'
           initial={{width:"0%"}}
            whileInView={{width:"100%"}}
            transition={{duration:0.7, delay:0.7}}
            >

            </motion.div>
     
        </motion.div>
        <motion.div className='relative w-[20%] left-[-5%] top-[105vh] '
        initial={{opacity:0, x:"calc(25vw)"}}
        whileInView={{opacity:1, x:"calc(0vw)"}}
        transition={{duration:0.7}}
        >
        
          <img class="h-10 w-10 rounded-full mx-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
         
            <h3 class="text-[0.8rem] text-center font-semibold leading-7 tracking-tight text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut deleniti sed a aliquid doloremque mollitia non alias. Accusamus laboriosam quos eveniet harum ratione sapiente aut vero quisquam saepe eligendi?</h3>
            <p class="text-[0.7rem] text-center font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
            <motion.div className='relative overflow-visible h-2 rounded-full bg-purple-600 left-[-25.5%]'
           initial={{width:"0%"}}
            whileInView={{width:"100%"}}
            transition={{duration:0.7, delay:0.7}}
            ></motion.div>
     
        </motion.div>
        <motion.div className='relative w-[20%] top-[140vh] left-[-79.5%] '
        initial={{opacity:0, x:"calc(0vw)"}}
        whileInView={{opacity:1, x:"calc(25vw)"}}
        transition={{duration:0.7}}
        >
        
          <img class="h-10 w-10 rounded-full mx-auto" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt=""/>
         
            <h3 class="text-[0.8rem] text-center font-semibold leading-7 tracking-tight text-gray-900">Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic ut deleniti sed a aliquid doloremque mollitia non alias. Accusamus laboriosam quos eveniet harum ratione sapiente aut vero quisquam saepe eligendi?</h3>
            <p class="text-[0.7rem] text-center font-semibold leading-6 text-indigo-600">Co-Founder / CEO</p>
          
            <motion.div className='relative overflow-visible h-2 rounded-full bg-purple-600 left-[25%]'
           initial={{width:"0%"}}
            whileInView={{width:"100%"}}
            transition={{duration:0.7, delay:0.7}}
            >

            </motion.div>
        </motion.div>
        

      </div>
    </div>
  )
}
