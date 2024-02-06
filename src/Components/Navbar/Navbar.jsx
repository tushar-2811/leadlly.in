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
  background,

} from "@chakra-ui/react";
import {
  MoonIcon,
  SunIcon,
  HamburgerIcon,
  CloseIcon,
  AddIcon,
} from "@chakra-ui/icons";

import Name from "./Name";
import "./Navbar.css";
import { Navbar as Navbar_} from "@nextui-org/react";

import {Dropdown, DropdownTrigger, DropdownMenu, DropdownItem} from "@nextui-org/react";

export default function Navbar() {
  const { colorMode, toggleColorMode } = useColorMode();
  const { isOpen, onOpen, onClose } = useDisclosure();

  

  return (
    <div id="navFix">
      <Navbar_>
      <Box
        
        px={9}
        width={["100%"]}
      >
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack w="42%">
            <Name />

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
                <Button variant="outline" _hover={{bgColor:"#7986CB"}}  className="btnRes">
                  <Link  to ="/">
                    {" "}
                    <b>Home</b>
                    </Link>
                </Button>

                <Button variant="outline" _hover={{bgColor:"#7986CB"}} className="btnRes">
                  <Link to="/test">
                    <b>TestPage</b>
                  </Link>
                </Button>
                <Button variant="outline" _hover={{bgColor:"#7986CB"}}   className="btnRes">
                  <Link to="/signup">
                    <b>Sign Up</b>
                  </Link>
                </Button>
                

                <Button variant="outline" _hover={{bgColor:"#7986CB"}}   className="btnRes">
                  <Link to="/contact">
                    <b>Contact</b>
                  </Link>
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
                  <DropdownItem key="new">New file</DropdownItem>
                  <DropdownItem key="copy">Copy link</DropdownItem>
                  <DropdownItem key="edit">Edit file</DropdownItem>
                  <DropdownItem key="delete" className="text-danger" color="danger">
                    Delete file
                  </DropdownItem>
                </DropdownMenu>
              </Dropdown>
          
          
          
        </Flex>
      </Box>
      </Navbar_>
    </div>
  );
}
