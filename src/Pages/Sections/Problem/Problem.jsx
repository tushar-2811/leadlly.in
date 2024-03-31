import React from "react";
import { motion } from "framer-motion";
import { image } from "@nextui-org/react";



export default function BouncyCardsFeatures(){
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      {/* <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
        <h2 className="max-w-lg text-4xl font-bold md:text-5xl">
          Grow faster with our
          <span className="text-blue-400"> all in one solution</span>
        </h2>
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="whitespace-nowrap rounded-lg bg-slate-900 px-4 py-2 font-medium text-white shadow-xl transition-colors hover:bg-slate-700"
        >
          Learn more
        </motion.button>
      </div> */}
      <div className="mb-4 grid grid-cols-12 gap-4">
      <motion.div className="col-span-12 md:col-span-4" 
       initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}>
        <motion.div  whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 col-span-12 md:col-span-4 backdrop-blur-md`}
      style={{ background: "url('./imgs/sections/backlogs.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}  >
       
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-tl from-purple-200 to-rose-100 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle>
            Are you buried under the <b>backlogs,</b></CardTitle>
           
          </div>
        </motion.div>
        </motion.div>

        <motion.div className="col-span-12 md:col-span-8"
       initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
      
       transition={{ duration: 0.5 }}>
        <motion.div  whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 col-span-12 md:col-span-8 `}
      style={{ background: "url('./imgs/sections/distractions.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
        
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-tr from-slate-200 to-slate-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle>bombarded by <br/> <b> Distractions </b>and feeling <b> isolated </b>and <b> unheard?</b></CardTitle>
          </div>
        </motion.div>
      </motion.div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <motion.div className="col-span-12 md:col-span-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.div  whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 col-span-12 md:col-span-8 `}
      style={{ background: "url('./imgs/sections/procastination.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
       
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-tr from-slate-200 to-slate-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle> Lacking a Proper<br/><b> Schedule</b> and <b>Procastinate</b>  a lot</CardTitle>
          </div>
        </motion.div>
        </motion.div>
        <motion.div className="col-span-12 md:col-span-4"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <motion.div  whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 col-span-12 md:col-span-4 `}
      style={{ background: "url('./imgs/sections/anxiety.jpg')", backgroundSize: "cover", backgroundPosition: "center"}}>
       
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-slate-200 to-slate-600 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle>which only adds on the<b> anxiety!</b> </CardTitle>
          </div>
        </motion.div>
        </motion.div>
      </div>
    </section>
  );
};


const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto  text-slate-800 text-center text-3xl font-semibold">{children}</h3>
  );
};