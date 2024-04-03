import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import {Box ,Spacer,Stack,Flex ,Text,VStack,Grid,GridItem,useColorModeValue} from "@chakra-ui/react"
export default function Footer(){


    return(
        <div className="flex flex-shrink  bg-purple-100  ">
            <div className="flex  flex-col w-[50vw] h-[40vh] justify-start gap-[5%] ">

            <div className="inline-block  ml-[3vw] pt-3 "><img className="h-8" src="./imgs/logos/Group 122.svg" alt="" /></div>
            <div className="md:w-[30vw] w-[40vw] px-[3vw] "><p className="text-purple-950 text-[1rem] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Velit, earum ipsum minus, necessitatibus, dicta sit assumenda vel corporis laborum sed itaque. Voluptatibus sit omnis, doloribus laboriosam blanditiis pariatur accusamus atque.</p></div>
            </div>

            <div className="flex flex-shrink justify-center gap-3 mx-auto  bg-purple-100  ">
            
            <div className="inline-block my-auto cursor-pointer"><a><FaInstagram/></a></div>
            <div className="inline-block my-auto cursor-pointer"><a><FaLinkedin/></a></div>
            <div className="inline-block my-auto cursor-pointer"><a><FaSquareXTwitter/></a></div>
            <div className="inline-block my-auto cursor-pointer"><a> <FaYoutube/></a></div>
           </div>
        </div>
    )

}