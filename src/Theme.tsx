import React, { createContext } from 'react'
import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'
// Version 1: Using objects
const Theme = extendTheme({
  colors: {
    paragraph: '#ffffff',
    brand: {
      'dblue': "#424360",
      'lgrey': "#bfbfbf",
      'dgrey': "#8c8d9d",
      'hblue': "#4dabf7",
    },

  },
})
export default Theme
