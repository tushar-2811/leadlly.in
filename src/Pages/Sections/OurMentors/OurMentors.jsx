import React from 'react'
import {motion} from "framer-motion"
export default function OurMentors() {
  return (
    <div>
        <div className=' h-[50vh] w-[100vw] '>
            
            <motion.div  whileInView={{ x:"-40%",scale:1.5, shadow:"xl"}} transition={{duration:1}}

            ><img src="./imgs/sections/backlogs.jpg" className='absolute h-[15vh] w-auto my-[15vh]  left-[44%] '></img></motion.div>

            <motion.div  whileInView={{x:"-20%",scale:1.5, shadow:"xl"}} transition={{duration:1}}
            > <img src="./imgs/sections/backlogs.jpg" className='absolute h-[15vh] w-auto my-[15vh] left-[44%] '></img></motion.div>

            <motion.div  whileInView={{x:"20%",scale:1.5, shadow:"xl"}} transition={{duration:1}}
            ><img src="./imgs/sections/backlogs.jpg" className='absolute h-[15vh] w-auto my-[15vh] left-[44%] '></img></motion.div>

            <motion.div whileInView={{x:"40%",scale:1.5, shadow:"xl"}} transition={{duration:1}}
            ><img src="./imgs/sections/backlogs.jpg" className='absolute h-[15vh] w-auto my-[15vh] left-[44%] '></img></motion.div>

            <motion.div  whileInView={{x:"0%",scale:1.5, shadow:"xl"}} transition={{duration:1}}
            ><img src="./imgs/sections/backlogs.jpg" className='absolute h-[15vh] w-auto my-[15vh] left-[44%] '></img></motion.div>
                 
        </div>
      
    </div>
  )
}
