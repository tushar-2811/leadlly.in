import React from "react";
import { Link } from "react-router-dom";
import logo2 from "./../../imgs/logos/Group 122.svg";
import logo from "./../../imgs/logos/logo1.png";
import {
  Box,
  Flex,
  Button,
  useColorModeValue,
  Stack,
  useColorMode,
  Show,
  HStack,
  Text,
  useDisclosure,
  IconButton,
  Hide,
  Divider,
  Image

} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";

import "./Navbar.css"
import { Navbar as Navbar_} from "@nextui-org/react";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  

  return (
    <div id="navFix" className="flex h-30 rounded-2xl  mx-auto ">
      <Navbar_ maxWidth="full" className="rounded-2xl h-16 mt-5 shadow-xl ring-slate-200 ring-2 ring-offset-2" >
      <Box
        
        
        width={["100%"]}
      >
        <Flex h={16} w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
          <Link  to ="/">
                    {" "}
                    
                    
            <Image className="flex" src={logo}

            boxSize = {"30px"}
        
            alt={"logo"}
            onclick = {onClose}

            />
            
            </Link>

            <Show breakpoint="(min-width: 1000px)">
              {" "}
              
            </Show>
          </HStack>

          <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
            {/* <IconButton
              size={"md"}
              icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
              aria-label={"Open Menu"}
              display={{ md: "none" }}
              onClick={isOpen ? onClose : onOpen}
            /> */}
            <HStack spacing={8} alignItems={"center"}>
              <HStack
                bg={useColorModeValue("purple.100","gray-700" )}
                rounded={20}
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
                mx={"2vw"}
              >
                <Button variant="none"  className="text-3xl font-sans hover:bg-[#fefbff]">
                  <Link to="/about-us">
                    About Us
                  </Link>
                </Button>

                <Button variant="none"  className="text-3xl font-sans hover:bg-[#fefbff]">
                  <Link to="/Courses">
                    Courses
                  </Link>
                </Button>
                <Button variant="none"  className="text-3xl font-sans hover:bg-[#fefbff]">
                  <a href="https://forms.gle/rGuHFN2JwULDVVGAA">Contact Us</a>
                </Button>
                

                
              </HStack>
            </HStack>
          </Flex>

          

          
          
          
              <Dropdown >
                <DropdownTrigger>
                <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon />:<HamburgerIcon />  }
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}/>
                </DropdownTrigger>
                <DropdownMenu aria-label="Example with disabled actions" >
               
                  <DropdownItem  onClick={isOpen ? onClose : onOpen} ><Link to="/about-us">
                    <b>About Us</b>
                  </Link></DropdownItem>
                  <DropdownItem  onClick={isOpen ? onClose : onOpen}><Link to="/courses">
                    <b>Courses</b>
                  </Link></DropdownItem>
                  
                  <DropdownItem  onClick={isOpen ? onClose : onOpen}><a href="https://forms.gle/rGuHFN2JwULDVVGAA">Contact Us</a></DropdownItem>
                  
                  

                  
                </DropdownMenu>
              </Dropdown>
          
          
          
        </Flex>
      </Box>
      </Navbar_>
    </div>
  );
}
