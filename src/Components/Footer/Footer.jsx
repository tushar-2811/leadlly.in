import React from "react";
import {Box ,Spacer,Stack,Flex ,Text,VStack,Grid,GridItem,useColorModeValue} from "@chakra-ui/react"
export default function Footer(){


    return(
        <div id="footer">
            <Box
            bg={useColorModeValue("gray.200", "gray.900")}
            px={9}
            py={5}
            width={["100%"]} >

        <Flex h={"auto"} alignItems={"center"} justifyContent={"center"} direction ={"row"} flexWrap={"wrap"} >
            <Box  w={"500px"}  bg={useColorModeValue("gray.100", "gray.800")} h={"200px"} m={4}>
                
            </Box>
            
            <Grid
            m={4}
            h={'200px'}
            w={"500px"}
            templateRows={'repeat(2, 1fr)'}
            templateColumns={'repeat(2, 1fr)'}
            gap={4}
            >
                <GridItem colSpan={1}  bg={useColorModeValue("gray.100", "gray.800")}/>
                <GridItem colSpan={1}  bg={useColorModeValue("gray.100", "gray.800")}/>
                <GridItem colSpan={2}  bg={useColorModeValue("gray.100", "gray.800")}/>


            </Grid>
            
        </Flex>
        <Flex  py={5} h={"auto"} alignItems={"center"} justifyContent={"center"}><Box  py= {'10px'} alignContent={"center"}> All Rights Reserved Leadlly @2024</Box></Flex>

            </Box>

        </div>
    )

}