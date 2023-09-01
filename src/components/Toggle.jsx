import React from "react";
import { Button, Flex, useColorMode } from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { Box } from "chakra-ui-core";
const Toggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  return (
    <header>
      <div onClick={toggleColorMode}
        h='40px'
        w='30px'
        border='none'
        _hover={{
          bg: "#2C74B3"
        }}
        borderRadius='5%'
      // backgroundColor="#0A2647"
      >
        {colorMode === 'light' ? <SunIcon /> : <MoonIcon />}

      </div>
    </header>
  )
};

export default Toggle;