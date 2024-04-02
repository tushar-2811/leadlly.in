import React from "react";
import { motion } from "framer-motion";
import { image } from "@nextui-org/react";
import bgImage from "./../../../imgs/Vector 60.svg"


export default function BouncyCardsFeatures(){
  return (
    <section className="mx-auto relative  px-4 py-5 h-[400vh]">
      
      <div className="absolute h-auto w-[45vw] top-[30vw] left-[46vw] bg-clip-content">
        <img src={bgImage}></img>
        

      </div>
      {/* <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>

      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(60vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw]  top-[74vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>
      
      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div>
      <motion.div initial={{ width:"0" }} whileInView={{ width:"calc(50vw)"}} transition={{ duration: 1,delay:1.2 }}  className="absolute h-[13vw] left-[9vw] top-[31vw] opacity-50 rounded-3xl z-0 bg-[#ffb35c]"></motion.div> */}
      <div className='flex flex-col md:ml-[10vw] h-full  md:w-auto'>

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
    </section>
  );
};