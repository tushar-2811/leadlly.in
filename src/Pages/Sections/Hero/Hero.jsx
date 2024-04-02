import React from "react";
import {Box,Center ,Spacer,Stack,Flex ,Text,Heading,useColorModeValue ,Image, extendTheme, Button} from "@chakra-ui/react"
import Typewriter from 'typewriter-effect';

import { Link } from "react-router-dom";



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


const Home = () => {
  return (
    <>
        
    <div id="About"    style={{height:"100vh",overflow:"hidden"}} >

      <div className="absolute top-[5vh] z-0"><img className="h-[48vh] "  src="./imgs/home/backimg1.png"></img></div>
      
      <Flex  h={"auto"} py={"3vh"} overflow={"hidden"} mx={"5vw"}
          my={"5vh"} 
          
          
          
      
      
      backdropBlur={"5px"}
       w={{base: "90vw",
       sm: "90vw",
       md: "90vw",
       lg: "90vw", }}>  


        <Flex h={"auto"} py={"5vh"} zIndex={5} opacity={1}   direction={"column"}  backdropBlur={"5px"} bg={useColorModeValue("#f9f2ff", "gray.700")}  justifyContent={"center"} flexWrap={"wrap"}
        rounded={"5vw"}
        w ={{
          base: "90vw",
          sm: "90vw",
          md: "65vw",
          lg: "55vw", 
        }}>
        <div className=" rounded-xl bg-gradient-to-r bg-clip-text from-purple-600 to-[#5900d9] font-sans px-[5vw]"
            >
            <Heading fontWeight={"bold"}  opacity={1} zIndex={10}  color={"transparent"} w={"auto"} h={"auto"}   fontSize={{base:"2.5rem",sm:"2.5rem",md:"2.5rem",lg:"3.5rem"}}>Get your own <Typewriter
  options={{
    strings: ["Bade Bhaiya","Badi Didi"],
    autoStart: true,
    loop: true,
  }}
  
/> to hold your hand
           
            </Heading>  </div> <div>
            < h4 className="text-[1rem] px-[5vw]  md:w-[70%] "> Say goodbye to one-size-fits-all! We tailor study plans and resources to your individual learning style and goals. </h4>
            </div>
            

      
        </Flex>

        <Flex display={{sm:"none",base:"none",md:"flex",lg:"flex"}} direction ={"column"} justifyContent={"center"}
        
        >
          <Center>
          <Image my={"20px"} src={"./imgs/home/onlinelearning.svg"} h={"40vh"} mx={"3vw"} w={"auto"}
          ></Image>
          </Center>
          
         
        </Flex>
      </Flex>

    
    </div>
    
   
    </>
  );
};

export default Home;
