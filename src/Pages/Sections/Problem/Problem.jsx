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
      <motion.div className="col-span-12 md:col-span-5  h-[30vh] py-15 translate-y-8 rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] " 
       initial={{ x:"calc(-50vh)" }}
       whileInView={{ x:"0"}}
       transition={{ duration: 0.5 }}
       >
          <h3 className="mx-auto   text-slate-800 text-center text-3xl font-semibold">
            Are you buried under the <b>backlogs,</b></h3>
           
    
        
        </motion.div>
        <motion.div className="col-span-12 md:col-span-7  h-[30vh] py-15 translate-y-8 rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] " 
       initial={{ x:"calc(50vh)" }}
       whileInView={{ x:"0"}}
       transition={{ duration: 0.5 }}
       >
          <h3 className="mx-auto   text-slate-800 text-center text-3xl font-semibold">
            bombarded by <b>Distractions</b> and feeling <br/> <b>Isolated</b> and <b>Unheard?</b> </h3>
           
        </motion.div>
        <motion.div className="col-span-12 md:col-span-7 h-[30vh] py-15 translate-y-8 rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] " 
       initial={{ x:"calc(-50vh)" }}
       whileInView={{ x:"0"}}
       transition={{ duration: 0.5 }}
       >
         <h3 className="mx-auto   text-slate-800 text-center text-3xl font-semibold">
           Lacking a proper <b>Schedule</b> and <b>Procastinate</b> a lot </h3>
           
        </motion.div>
        
        <motion.div className="col-span-12 md:col-span-5 align-middle h-[30vh] py-15 translate-y-8 rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg] " 
       initial={{ x:"calc(50vh)" }}
       whileInView={{ x:"0"}}
       transition={{ duration: 0.5 }}
       >
          <h3 className="mx-auto   text-slate-800 text-center text-3xl font-semibold">
            Which only adds on the <br/> <b>Anxiety</b></h3>
           
    
        
        </motion.div>
</div>
    </section>
  );
};


