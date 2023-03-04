import React from 'react'
import {
    ThemeProvider,
    theme,
    ColorModeProvider,
    CSSReset,
  } from "@chakra-ui/react";
import Toggle from './Toggle';

const Theme = () => {
  return (
    <div>
        <ThemeProvider theme={theme}>
                    <ColorModeProvider>
                      <CSSReset />
                      <Toggle/>
                  </ColorModeProvider>
        </ThemeProvider>
    </div>
  )
}

export default Theme