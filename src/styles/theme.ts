import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  styles: {
    global: {
      html: {
        fontSize: "14px",
      },
      body: {
        bg: "white",
        color: "black",
      },
    },
  },
  fonts: {
    heading: `'Poppins', sans-serif`,
    body: `'Raleway', sans-serif`,
  },
});

export default theme;
