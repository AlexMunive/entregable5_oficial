import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#2E5A2A",
  fontColor: "#515A2A",
  theme_color: "#3C1A3E",
  background_color: "#1C3E1A"
};

export const darkTheme = {
  body: "#342A5A",
  fontColor: "#BF1FCC",
  theme_color: "#3E2F1A",
  background_color: "#1A2B3E"
};



export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};
    

	}

`;

