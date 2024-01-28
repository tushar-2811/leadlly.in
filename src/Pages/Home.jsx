import React from "react";
import {Box ,Spacer,Stack,Flex ,Text,VStack,Grid,GridItem,useColorModeValue , extendTheme} from "@chakra-ui/react"
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
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
    <Navbar/>
    <div id="About" style={{height:"auto"}}>
      <Box   h={{ base: "1300", sm: "1300", md: "1300px", lg: "650px"}} my={5}
      bg={useColorModeValue("gray.1", "gray.800")}
       w={"100vw"}>  
        <Flex h={"auto"} alignItems={"center"} justifyContent={"center"} flexWrap={"wrap"}>
        <Box h ={'600px'}
           w ={{
          base: "80vw",
          sm: "80vw",
          md: "60vw",
          lg: "45vw",
        }} bg={useColorModeValue("gray.300", "gray.700")} ></Box> 
        <Grid h={'600px'} w ={{
          base: "80vw",
          sm: "80vw",
          md: "60vw",
          lg: "45vw",}} templateColumns={'repeat(2, 1fr)'} m={4} gap={4}>

            <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1}} bg={useColorModeValue("gray.300", "gray.700")}  />
            <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1}} bg={useColorModeValue("gray.300", "gray.700")} />
            <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1}} bg={useColorModeValue("gray.300", "gray.700")} />
            <GridItem colSpan={{ base: 2, sm: 2, md: 1, lg: 1}} bg={useColorModeValue("gray.300", "gray.700")} />
          </Grid>
      
        </Flex>
      </Box>
    
    </div>
    <Footer/>
    </>
  );
};

export default Home;
