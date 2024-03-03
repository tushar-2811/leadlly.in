import React from "react";
import { motion } from "framer-motion";



export default function BouncyCardsFeatures(){
  return (
    <section className="mx-auto max-w-7xl px-4 py-12 text-slate-800">
      <div className="mb-8 flex flex-col items-start justify-between gap-4 md:flex-row md:items-end md:px-8">
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
      </div>
      <div className="mb-4 grid grid-cols-12 gap-4">
      <motion.div className="col-span-12 md:col-span-4" 
       initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
       transition={{ duration: 0.5 }}>
        <BounceCard className="col-span-12 md:col-span-4  " >
          <img src="./imgs/home/incomplete_task.svg" alt="backlog" className="w-60  mx-auto" />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-tl from-blue-100 to-indigo-200 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle>
            Are you drowning in <b>backlogs</b></CardTitle>
           
          </div>
        </BounceCard>
        </motion.div>

        <motion.div className="col-span-12 md:col-span-8"
       initial={{ opacity: 0, scale: 0.5 }}
       whileInView={{ opacity: 1, scale: 1 }}
      
       transition={{ duration: 0.5 }}>
        <BounceCard className="col-span-12 md:col-span-8">
        <img src="./imgs/home/distraction.svg" alt="backlog" className="h-60 mx-auto" />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-tr from-blue-100 to-indigo-200 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle>Are Constantly <br/> <b> Distracted </b></CardTitle>
          </div>
        </BounceCard>
      </motion.div>
      </div>
      <div className="grid grid-cols-12 gap-4">
        <motion.div className="col-span-12 md:col-span-8"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <BounceCard className="col-span-12 md:col-span-8">
        <img src="./imgs/home/schedule.svg" alt="backlog" className="h-40 mx-auto" />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-bl from-blue-100 to-indigo-200 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle>Dont having Proper<br/><b> Schedule</b></CardTitle>
          </div>
        </BounceCard>
        </motion.div>
        <motion.div className="col-span-12 md:col-span-4"
        initial={{ opacity: 0, scale: 0.5 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}>
        <BounceCard className="col-span-12 md:col-span-4">
        <img src="./imgs/home/lonely.svg" alt="backlog" className="h-60 mx-auto" />
          <div className="absolute bottom-0 left-4 right-4 top-32 translate-y-8 rounded-t-2xl bg-gradient-to-br from-blue-100 to-indigo-200 p-4 transition-transform duration-[250ms] group-hover:translate-y-4 group-hover:rotate-[2deg]">
          <CardTitle>which lead you to feel<br/><b> Lonely </b> </CardTitle>
          </div>
        </BounceCard>
        </motion.div>
      </div>
    </section>
  );
};

const BounceCard = ({ className, children }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95, rotate: "-1deg" }}
      className={`group relative min-h-[300px] cursor-pointer overflow-hidden rounded-2xl bg-slate-100 p-8 ${className}`}
    >
      {children}
    </motion.div>
  );
};

const CardTitle = ({ children }) => {
  return (
    <h3 className="mx-auto text-center text-3xl font-semibold">{children}</h3>
  );
};