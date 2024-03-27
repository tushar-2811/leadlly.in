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
      <Flex  h={"auto"}  overflow={"hidden"} py={5}
      
      bg={useColorModeValue("#e8f0f9", "black.900")}
       w={"100vw"}>  

        <Flex h={"auto"} direction={"column"}  alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
        <Center p={"2rem"} h ={"auto"}
           w ={{
          base: "100vw",
          sm: "100vw",
          md: "100vw",
          lg: "50vw", 
        }} bg={useColorModeValue("#e8f0f9", "gray.700")} >
            <Heading p={0} w={"auto"} h={"auto"}  fontSize={{base:"2.5rem",sm:"2.5rem",md:"3.5rem",lg:"4rem"}}>Get your own <Typewriter
  options={{
    strings: ["Bade Bhaiya","Badi Didi"],
    autoStart: true,
    loop: true,
  }}
  
/> to hold your hand
           
            </Heading>  </Center> <Center>
            <Text  fontSize={"3xl"} w={{base:"90vw",sm:"90vw",md:"35vw",lg:"35vw"}}> We empower student with personalized mentorship and guidance</Text>

            </Center>
            <Center  display={{sm:"block",base:"block",md:"block",lg:"none"}}>
              <Button variant="outline" rounded={"full"} px="30%" _hover={{bgColor:"purple.300"}}   >
                  <Link to="/signup">
                    Get Started
                  </Link>
                </Button></Center>

      
        </Flex>

        <Flex display={{sm:"none",base:"none",md:"none",lg:"flex"}} direction ={"column"} justifyContent={"center"}
        
        >
          <Center>
          <Image my={"20px"} src={"./imgs/home/learn.svg"} w="100%" h={"auto"}
          ></Image>
          </Center>
          <Center><Button variant="outline" rounded={"full"} px="10%" _hover={{bgColor:"purple.300"}}   >
                  <Link to="/signup">
                    Get Started
                  </Link>
                </Button></Center>
        </Flex>
      </Flex>

    
    </div>
    
   
    </>
  );
};

export default Home;
