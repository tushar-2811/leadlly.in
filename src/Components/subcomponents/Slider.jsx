import { motion, useTransform, useScroll } from "framer-motion";
import { useRef } from "react";
import { extendTheme } from "@chakra-ui/react";


const breakpoints = {
    base: "0px",
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  };
  
  // 3. Extend the theme
  const theme = extendTheme({ breakpoints });
  

export default function Slider () {
  return (
    <div className="bg-">
      
      <HorizontalScrollCarousel />
      
    </div>
  );
};

const HorizontalScrollCarousel = () => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
  });

  const x = useTransform(scrollYProgress, [0, 1], ["1%","-90%"]);

  return (
    <section ref={targetRef} className="relative h-[300vh] bg-blue-50">
      <div className="sticky top-0 flex h-screen items-center overflow-hidden">
        <motion.div style={{ x }} className="flex gap-4">
          {cards.map((card) => {
            return <Card card={card} key={card.id} />;
          })}
        </motion.div>
      </div>
    </section>
  );
};

const Card = ({ card }) => {
  return (
    <div
      key={card.id}
      className="group relative h-[450px] w-[450px] overflow-hidden bg-gradient-to-br rounded-3xl from-indigo-300 to-blue-200"
    >
      <div
        style={{
          backgroundImage: `url(${card.url})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
        className="absolute inset-0 z-0 transition-transform duration-300 group-hover:scale-110"
      ></div>
      <div className="absolute inset-0 z-10 backdrop-blur-lg grid place-content-center  ">
        <div className=" bg-blue-100 rounded-xl h-auto w-3/4 mx-auto rounded-xl">
        <p className="  px-8 py-4 mx-auto text-2xl text-center font-black uppercase text-purple-400">
          {card.title}
        </p>
        <p className=" text-lg text-center mx-8 mb-4 font-black text-slate-700 ">
          {card.para}
        </p></div>
      </div>
    </div>
  );
};


const cards = [
  {
    url: "/imgs/home/schedule.svg",
    title: "personalized guidance",
    para:"talk about your daily problems with your mentor who lead you in righ path",
    id: 1,
  },
  {
    url: "/imgs/abstract/2.jpg",
    title: "Title 2",para:"",
    id: 2,
  },
  {
    url: "/imgs/abstract/3.jpg",
    title: "Title 3",para:"",
    id: 3,
  },
  {
    url: "/imgs/abstract/4.jpg",
    title: "Title 4",para:"",
    id: 4,
  },
  {
    url: "/imgs/abstract/5.jpg",
    title: "Title 5",para:"",
    id: 5,
  },
  {
    url: "/imgs/abstract/6.jpg",
    title: "Title 6",para:"",
    id: 6,
  },
  {
    url: "/imgs/abstract/7.jpg",
    title: "Title 7",para:"",
    id: 7,
  },
];