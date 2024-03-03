import React from 'react'
import {Image} from "@chakra-ui/react"

export default function Mentors() {
  return (
    <div className=' flex-col justify-center  gap-5'>
        <div className='flex bg-gradient-to-b from-blue-200 py-5 flex-wrap align-center justify-evenly gap-5'>

            <div className='sm:w-1/3 w-full h-auto text-xl px-3'>
              <div className='flex justify-center text-2xl text-slate-700 font-mono font-bold mx-auto' > title </div>
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam dolorem porro facere voluptate tempore ipsum asperiores dolor omnis saepe, cupiditate explicabo facilis, aliquid cum eum laudantium impedit aut provident itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore amet fuga dolorem minima animi ratione, perspiciatis tempori</div>
            <div className='sm:w-1/3  h-auto'><Image  src={"./imgs/home/call.svg"}  h={"100%"}></Image></div>
        </div>
        <div className='bg-gradient-to-t from-blue-200 flex flex-wrap-reverse w-full text-xl justify-evenly gap-5 '>
        <div className='sm:w-1/3 w-full h-auto'><Image my={"20px"} src={"./imgs/home/analysis.svg"} w="100%" h={"auto"}></Image></div>
            <div className='sm:w-1/3 w-full h-auto'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquam dolorem porro facere voluptate tempore ipsum asperiores dolor omnis saepe, cupiditate explicabo facilis, aliquid cum eum laudantium impedit aut provident itaque? Lorem ipsum dolor sit amet consectetur adipisicing elit. Nemo dolore amet fuga dolorem minima animi ratione, perspiciatis tempor.</div>
            
        </div>

      
    </div>
  )
}
