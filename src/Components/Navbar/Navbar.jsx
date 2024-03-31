import React from "react";
import { Link } from "react-router-dom";
import {Typewriter} from 'typewriter-effect';
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
      <Navbar_ maxWidth="full" className="rounded-2xl h-12 mt-5 shadow-xl ring-slate-200 ring-2 ring-offset-2" >
      <Box
        
        
        width={["100%"]}
      >
        <Flex h={16} w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
          <Link  to ="/">
                    {" "}
                    
                    
            <Image src={"./imgs/logos/logo1.png"}
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
                mx={"5vw"}
              >
                

                
                <Button variant="none"  className="text-3xl font-sans hover:bg-[#fefbff]">
                  <Link to="/course-details">
                    Contact Us
                  </Link>
                </Button>
                <Button variant="none"  className="text-3xl font-sans hover:bg-[#fefbff]">
                  <Link to="/course-details">
                    Become a Mentor
                  </Link>
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
                <DropdownMenu aria-label="Example with disabled actions" disabledKeys={["edit", "delete"]}>
               
                  <DropdownItem key="new" onClick={isOpen ? onClose : onOpen} ><Link to="/test">
                    <b>TestPage</b>
                  </Link></DropdownItem>
                  <DropdownItem key="copy" onClick={isOpen ? onClose : onOpen}><Link to="/signup">
                    <b>Sign Up</b>
                  </Link></DropdownItem>
                  <DropdownItem key="edit" onClick={isOpen ? onClose : onOpen}><Link to="/contact">
                    <b>Contact</b>
                  </Link></DropdownItem>
                  
                </DropdownMenu>
              </Dropdown>
          
          
          
        </Flex>
      </Box>
      </Navbar_>
    </div>
  );
}
