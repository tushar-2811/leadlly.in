import React from "react";
import { motion } from "framer-motion";
import { image } from "@nextui-org/react";
import bgImage from "./../../../imgs/Vector 60.svg"
import holdingHand from "./../../../imgs/Group 202.png"
import knocking from "./../../../imgs/Group 203.png"

export default function BouncyCardsFeatures(){
  return (<>
    <section className=" hidden md:flex flex-col overflow-hidden  mx-auto   px-4 py-5  h-auto">
      
      <div className="relative h-[400vh] flex-col flex-shrink   bg-clip-content">
      <div className="absolute height-[100vh] top-[50vh] w-[47vw]  left-[46vw] ">
        <img src={bgImage}></img>
        </div>
        

     
      {/* <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>

      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(60vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw]  top-[74vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>
      
      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>
      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div> */}
      <div className='hidden md:flex flex-col md:ml-[10vw] h-full  md:w-auto'>

        <div className="flex flex-col w-[65vw] h-[100vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden md:flex h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[7vw] leading-tight font-bold text-transparent">Are you buried under the <span className="text-transparent text-[10vw]">backlogs?</span> </h1>

      </motion.div>
      </div>
      <div className="flex flex-col w-[70vw] h-[100vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden md:flex h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[7vw] leading-tight font-bold text-transparent">Bombarded by<span className="text-transparent text-[10vw]"> distractions</span> and feeling isolated and Unheard? </h1>

      </motion.div>

      </div>
      <div className="flex flex-col h-[100vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden md:flex w-[65vw] h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[8vw] leading-tight font-bold text-transparent">Lacking a proper Schedule and <span className="text-transparent text-[10vw]">Procastinate</span> a lot? </h1>

      </motion.div>
      </div>
      <div className="flex flex-col h-[100vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" hidden md:flex w-[60vw] h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[8vw]  leading-tight font-bold text-transparent">Which only adds on the <span className="text-transparent text-[10vw]">Anxiety</span> </h1>

      </motion.div>
      </div>

      </div>

      </div>
      </section>
      <section className="mx-auto md:hidden relative  px-4 py-5  h-auto">
{/* phone */}
<div className="absolute w-[65%] top-[25vh] ml-[20%]   bg-clip-content">
        <img src={bgImage}></img>
        
      
      </div>

<div className='flex  flex-col md:ml-[10vw] h-full  md:w-auto'>

        <div className="flex flex-col w-[75vw] h-[40vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" flex md:hidden h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[2.2rem] leading-tight font-bold text-transparent">Are you buried under the <span className="text-transparent text-[2.2rem]">backlogs?</span> </h1>

      </motion.div>
      </div>
      <div className="flex flex-col w-[90vw]  h-[40vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" md:hidden flex h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[2rem] leading-tight font-bold text-transparent">Bombarded by<span className="text-transparent text-[2.2rem]"> distractions</span> and feeling isolated and Unheard? </h1>

      </motion.div>

      </div>
      <div className="flex flex-col w-full mt-[5vh] h-[40vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" md:hidden flex w-[65vw] h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[2rem] leading-tight font-bold text-transparent">Lacking a proper  Schedule and <span className="text-transparent text-[2.2rem]">Procastinate</span> a lot? </h1>

      </motion.div>
      </div>
      <div className="flex flex-col h-[30vh] justify-center">
      <motion.div initial={{ y:"80%" }} whileInView={{ y:"0%"}} transition={{ duration: 1,ease:"easeOut" }} className=" md:hidden mt-[5vh] flex w-[60vw] h-auto justify-center bg-clip-text bg-gradient-to-br from-[#5a10d9] via-indigo-400 to-indigo-900 items-center z-10">
        <h1 className="font-sans text-[2rem]  leading-tight font-bold text-transparent">Which only adds on the <span className="text-transparent text-[10vw]">Anxiety</span> </h1>

      </motion.div>
      </div>

      </div>



    </section></>
  );
};