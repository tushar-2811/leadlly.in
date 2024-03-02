import React from "react";
import { Link } from "react-router-dom";
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

import "./Navbar.css";
import { Navbar as Navbar_} from "@nextui-org/react";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";


export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  

  return (
    <div id="navFix">
      <Navbar_ maxWidth="full">
      <Box
        
        
        width={["100%"]}
      >
        <Flex h={16} w={"100%"} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
          <Link  to ="/">
                    {" "}
                    
                    
            <Image src={"./imgs/logos/logo1.png"}
            boxSize = {"50px"}
        
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
                as={"nav"}
                spacing={4}
                display={{ base: "none", md: "flex" }}
                id="myDIV"
              >
                

                <Button variant="none"  className="text-3xl font-mono hover:bg-indigo-300">
                  <Link to="/mentors">
                    Our Mentors
                  </Link>
                </Button>
                <Button variant="none"  className="text-3xl font-mono hover:bg-indigo-300">
                  <Link to="/course-details">
                    Courses
                  </Link>
                </Button>
                <div className="divide-x-3">
                <Button variant="none" className="px-4   py-1 hover:bg-indigo-300 text-xl font-mono ">
                  <Link to="/signup">
                    SignUp
                  </Link>
                </Button>
                <Button variant="none" className="px-4  py-1 hover:bg-indigo-300 text-xl font-mono">
               
                <Link to="/login">
                   Login
                  </Link>
                  </Button>
                  </div>

                <Button variant="none" _hover={{bgColor:"#7986CB"}}   className="btnRes">
                  <Link to="/Courses"></Link>
                </Button>
              </HStack>
            </HStack>
          </Flex>

          

          <Flex alignItems={"center"}>
            <Stack direction={"row"} spacing={7}>
              <Button onClick={toggleColorMode}>
                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
              </Button>

              
              
             
            </Stack>
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
