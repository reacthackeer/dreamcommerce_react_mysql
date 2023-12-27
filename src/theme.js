import { extendTheme } from "@chakra-ui/react";

// adding my color mode config
const config = {
    initialColorMode: 'dark',
    useSystemColorMode: false
}

// extend the theme
export const theme = extendTheme({ config });
