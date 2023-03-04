import React from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <Button onClick={toggleColorMode}
       h='30px' 
       w={'20px'}
       border='none' 
      _hover={{
        bg:"#2C74B3"
      }}
      borderRadius='5%'
      backgroundColor="#0A2647">
         {colorMode === 'light' ? <SunIcon/> : <MoonIcon/>}

      </Button>
    </header>
  )
};

export default Toggle;