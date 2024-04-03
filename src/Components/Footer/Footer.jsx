import React from "react";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";

import smily from "./../../imgs/smily.png"

export default function Footer(){


    return(
        <div className="flex flex-shrink  bg-purple-100  ">
            <div className="flex  flex-col w-[30vw] h-[40vh] justify-start gap-[5%] ">

            <div className="inline-block  ml-[3vw] pt-3 "><img className="h-8" src="./imgs/logos/Group 122.svg" alt="" /></div>
            <div className="md:w-[30vw] w-[40vw] px-[3vw] "><p className="text-purple-950 text-[1rem] ">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit doloremque sapiente vitae aperiam quas, quaerat accusamus non provident obcaecati quod ipsam perspiciatis</p></div>
            </div>
            
            <div className="flex flex-col w-[30vw] h-full ">

            <div className="mx-auto"><h1 className="mt-[30%]  font-sans text-indigo-800 text-[2rem] font-bold ">FOLLOW US: <br /></h1></div>

            <div className="flex flex-shrink  justify-center gap-3 mx-auto  bg-purple-100  ">
            
            <div className="inline-block h-8 w-8 my-auto cursor-pointer "><a ><FaInstagram className="size-8 "/></a></div>
            <div className="inline-block h-8 w-8 my-auto cursor-pointer"><a><FaLinkedin className="size-8"/></a></div>
            <div className="inline-block  h-8 w-8 my-auto cursor-pointer"><a><FaSquareXTwitter className="size-8"/></a></div>
            <div className="inline-block  h-8 w-8 my-auto cursor-pointer"><a> <FaYoutube className="size-8"/></a></div>
           </div></div>

          <div className="w-[15vw] ml-[20vw]  h-auto "> <img src={smily} alt="" /></div>
        </div>
    )

}