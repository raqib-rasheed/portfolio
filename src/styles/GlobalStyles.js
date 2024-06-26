import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --white: #e6e9ed;
    --grey: #858589;
    font-family: 'Inter Variable', sans-serif !important;
  }
* {
  -webkit-user-select: none;
  }

  body {
    margin:0;
    padding:0;
    font-family: 'Inter Variable', sans-serif !important;
  }
  
  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
`;
export default GlobalStyles;
