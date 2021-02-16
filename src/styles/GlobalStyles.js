import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
:root {
    --white: #e6e9ed;
    --grey: #858589;
  }
* {
  -webkit-user-select: none;
  }
  html {
    font-size: 10px;
  }

  body {
    margin:0;
    padding:0;
    font-size: 2rem;
    font-family: 'Oswald', sans-serif;
  }

  fieldset {
    border-color: rgba(0,0,0,0.1);
    border-width: 1px;
  }
  ::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-track {
  box-shadow: inset 0 0 5px grey;
  border-radius: 10px;
}

::-webkit-scrollbar-thumb {
  background: rgb(128, 128, 128);
  border-radius: 10px;
}

::-webkit-scrollbar-thumb:hover {
  background:rgba(128, 128, 128,.33);
}
`;
export default GlobalStyles;
