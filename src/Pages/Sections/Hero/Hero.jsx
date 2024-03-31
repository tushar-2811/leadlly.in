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
        
    <div id="About" style={{height:"auto",overflow:"hidden"}} >

      
      
      <Flex  h={"auto"} py={"3vh"} overflow={"hidden"} mx={"5vw"}
          my={"5vh"}
          
          
          
      
      
      backdropBlur={"5px"}
       w={{base: "90vw",
       sm: "90vw",
       md: "90vw",
       lg: "90vw", }}>  


        <Flex h={"auto"} py={"5vh"} direction={"column"} bg={useColorModeValue("#f9f2ff", "gray.700")}  justifyContent={"center"} flexWrap={"wrap"}
        rounded={"5vw"}
        w ={{
          base: "90vw",
          sm: "90vw",
          md: "65vw",
          lg: "55vw", 
        }}>
        <Center  h ={"auto"}
        rounded={"5vw"}
            >
            <Heading zIndex={10} mr={"5rem"} fontFamily={"sans-serif"}  color={"#5900d9"} w={"auto"} h={"auto"}   fontSize={{base:"2.5rem",sm:"2.5rem",md:"2.5rem",lg:"3.5rem"}}>Get your own <Typewriter
  options={{
    strings: ["Bade Bhaiya","Badi Didi"],
    autoStart: true,
    loop: true,
  }}
  
/> to hold your hand
           
            </Heading>  </Center> <Center>
            <Text color={"black"} zIndex={10} mr={"10vw"} fontSize={"1rem"} w={"70%"}>We equip students with personalized learning tools and supportive mentors to conquer academic challenges and thrive in competitive exams </Text>
            </Center>
            

      
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
