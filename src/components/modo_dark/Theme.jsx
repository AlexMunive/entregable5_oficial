import { createGlobalStyle } from "styled-components";

export const lightTheme = {
  body: "#F1F1F1",
  fontColor: "#F52323",
  fontColorB: "#000000",
  
};

export const darkTheme = {
  body: "#000000",
  fontColor: "#F52323",
  fontColorB: "#FFFFFF",

};



export const GlobalStyles = createGlobalStyle`

	body {

		background-color: ${(props) => props.theme.body};
    

	}

`;

