import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
   * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
   }
   
   html {
      height: 100%;
      height: -webkit-fill-available;
      
      font-size: 62.5%;
   }
   
   body {
      width: 100%;
      height: 100%;
      
      min-height: 100vh;
      min-height: -moz-available;
      min-height: -webkit-fill-available;
      
      -webkit-font-smoothing: antialiased;
      
      background-color: ${props => props.theme['background-color']};
   }
   
   body, input, button {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
      
      @media only screen (min-width: 480px) {
         font-size: 1.5rem;
      }
      
      @media only screen (min-width: 768px) {
         font-size: 1.6rem;
      }
   }
   
   ul {
      list-style: none;
   }
   
   input:focus {
      outline: 0;
      box-shadow: 0 0 0 2px ${props => props.theme['yellow-dark']};
   }
   
   #root {
      width: 100%;
      height: 100%;
      background-color: transparent;
   }
`;
