import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
    fonts: {
        body: `'IBM Plex Sans'`,
        heading: `'IBM Plex Sans'`
    },
    colors: {
          "green": 
          {
            50: '#effae5',
            100: '#d8ebc5',
            200: '#c0dca2',
            300: '#a6ce7e',
            400: '#8ebf5a',
            500: '#74a641',
            600: '#5a8131',
            700: '#3f5c22',
            800: '#253712',
            900: '#091300',
          }
        }
})

export default theme;