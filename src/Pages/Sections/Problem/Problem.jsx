import React from "react";
import { motion } from "framer-motion";
import { image } from "@nextui-org/react";



export default function BouncyCardsFeatures(){
  return (
    <section className="mx-auto  px-4 py-5 text-slate-800">
      
      <div className="mb-4 grid grid-cols-12 grid-rows-12 h-[120vh] md:h-[70vh] gap-4">
      <motion.div className="col-span-12 md:col-span-5 row-span-3 md:row-span-6  py-15  rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4  " 
       initial={{ opacity:0.3, scale:0.3 }}
       whileInView={{ opacity:1, scale:1}}
       transition={{ duration: 0.5 }}
       >
          <h3 className="mx-auto py-10  text-slate-800 text-center  text-3xl font-semibold">
            Are you buried under the <b>backlogs,</b></h3>
           
    
        
        </motion.div>
        <motion.div className="col-span-12 md:col-span-7 row-span-3 md:row-span-6 py-15  rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4 " 
       initial={{ opacity:0.3, scale:0.3 }}
       whileInView={{ opacity:1, scale:1}}
       transition={{ duration: 0.5 }}
       >
          <h3 className="mx-auto py-10  text-slate-800 text-center text-3xl font-semibold">
            Bombarded by <b>Distractions</b> and feeling <br/> <b>Isolated</b> and <b>Unheard?</b> </h3>
           
        </motion.div>
        <motion.div className="col-span-12 md:col-span-7 row-span-3 md:row-span-6 py-15  rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4 " 
      initial={{ opacity:0.3, scale:0.3 }}
      whileInView={{ opacity:1, scale:1}}
       transition={{ duration: 0.5 }}
       >
         <h3 className="mx-auto py-10  text-slate-800 text-center text-3xl font-semibold">
           Lacking a proper <b>Schedule</b> and <b>Procastinate</b> a lot </h3>
           
        </motion.div>
        
        <motion.div className="col-span-12 md:col-span-5 md:row-span-6 row-span-3 align-middle  py-15  rounded-2xl bg-gradient-to-tr from-purple-100 to-pink-50 p-4" 
      initial={{ opacity:0.3, scale:0.3 }}
      whileInView={{ opacity:1, scale:1}}
       transition={{ duration: 0.5 }}
       >
          <h3 className="mx-auto  py-10 text-slate-800 text-center text-3xl font-semibold">
            Which only adds on the <br/> <b>Anxiety</b></h3>
           
    
        
        </motion.div>
</div>
    </section>
  );
};


