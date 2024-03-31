import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import {Box ,Spacer,Stack,Flex ,Text,VStack,Grid,GridItem,useColorModeValue} from "@chakra-ui/react"
export default function Footer(){


    return(
        <div className="flex flex-shrink  bg-purple-100  ">
            <div className="inline-block pb-8 ml-5 pt-3 "><img className="h-8" src="./imgs/logos/Group 122.svg" alt="" /></div>
            <div className="flex flex-shrink justify-center gap-3 mx-auto  bg-purple-100  ">
            
            <div className="inline-block my-auto cursor-pointer"><a><FaInstagram/></a></div>
            <div className="inline-block my-auto cursor-pointer"><a><FaLinkedin/></a></div>
            <div className="inline-block my-auto cursor-pointer"><a><FaSquareXTwitter/></a></div>
            <div className="inline-block my-auto cursor-pointer"><a> <FaYoutube/></a></div>
           </div>
        </div>
    )

}