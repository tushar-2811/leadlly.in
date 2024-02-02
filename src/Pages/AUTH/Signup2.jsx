import React from 'react';
import { useState } from 'react';
import {toast,ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Box ,Flex ,Text,VStack,useColorModeValue , extendTheme,Button, Spacer} from "@chakra-ui/react"
import { ArrowForwardIcon } from '@chakra-ui/icons';
import {Input} from "@nextui-org/react";

import isEmail from 'validator/lib/isEmail';




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
export default function Signup() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone:"",
    password: "",
    confirmPassword: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    console.log(e);
    
  };


  const handleSubmit = async (e) => {
        
    e.preventDefault();
    if(!handleValidations()){
      return;
    }
    

    try {
      const response = await fetch('http://localhost:5000/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
    
      if (response.ok) {
        console.log('Signup successful');
        // Handle successful signup, e.g., redirect or display a success message
      } else {
        console.error('Signup failed');
        // Handle signup failure, e.g., display an error message
      }
    } catch (error) {
      console.error('Error during signup:', error);
      // Handle error, e.g., display a generic error message
    }
  };

  const toastOptions = {position: "bottom-right",autoClose: 5000,hideProgressBar: false,closeOnClick: true,pauseOnHover: true,draggable: true,progress: undefined,theme: "dark"}
  const handleValidations = () => {
    const {phone, password, confirmPassword,name } = formData;
    if(phone<9999999999&& phone>1000000000){  
      toast.error("Invalid Phone Number",toastOptions);
    }
    
   
    
    return true;
  }



  
 





  

  return (
    <div class = "Signup" bg = {useColorModeValue("gray.1", "gray.800")}>
          
      <Flex h={"80vh"} alignItems={"center"} justifyContent={"center"} my={5}>
        
        <Box w={ { base: "80vw", sm: "70vw", md: "60vw", lg: "45vw", }}
         h ={{  base: "60vh",sm: "70vh", md: "60vh", lg: "60vh",}}
          bg={useColorModeValue("gray.200", "gray.700")}
          borderRadius={{ base: "15px", sm: "20px", md: "30px", lg: "30px"}}>
          <Flex  direction={"column"} w="100%" h="90%" p={5}  alignItems={"center"} justifyContent={"center"} wrap={"wrap"}>
          <Spacer/><Spacer/>
          <Input
            bg={useColorModeValue("gray.200", "gray.700")}
            value={formData.name}
            type="text"
            label="Full Name"
            variant="bordered"
            onValueChange={handleChange}
            className="max-w-xs"
            name="name"

          /><Spacer/>
          <Input

            value={formData.email}
            type="email"
            label="Email"
            variant="bordered"
            onValueChange={handleChange}
            className="max-w-xs"
            name="email"
          /><Spacer/>
          <Input

            value={formData.phone}
            type="number"
            label="Phone"
            variant="bordered"
            onValueChange={handleChange}
            className="max-w-xs"
            name="phone"
  
            />
    <Spacer/><Spacer/>
        <Button  w={{ base: "70%", sm: "60%", md: "50%", lg: "50%"}}  onClick={handleSubmit} rightIcon={<ArrowForwardIcon />} colorScheme='teal' variant='outline'>SUBMIT</Button>
  
          <Spacer/><Spacer/>
          
          
          </Flex>

        </Box>
        
        
        
      </Flex>

    </div>
  )
}
