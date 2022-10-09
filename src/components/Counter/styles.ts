import styled from 'styled-components';

export const Counter = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.4rem;
   
   border-radius: 6px;
   padding: 0.8rem;
   
   background-color: ${props => props.theme['base-button']};
   
   > span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400,
      font-size: 1.6rem;
      line-height: 1.3;
      text-align: center;
      
      color: ${props => props.theme['base-title']};
   }
   
   > svg {
      color: ${props => props.theme['purple-regular']};
      transition: all 0.2s ease;
   }
   
   > svg:hover {
      color: ${props => props.theme['purple-dark']};
   }
`;
