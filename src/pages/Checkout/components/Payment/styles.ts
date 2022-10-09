import styled from 'styled-components';

export const Payment = styled.div`
   display: grid;
   grid-template-areas: 
   "wrapper    wrapper     ......."
   "button1    button2     button3";
   
   grid-template-columns: repeat(3, 1fr);
   grid-template-rows: repeat(2, auto);
   grid-gap: 3.2rem 1.2rem;
   
   border-radius: 6px;
   padding: 4.0rem;
   
   background-color: ${props => props.theme['base-card']};
`;

export const Wrapper = styled.div`
   grid-area: wrapper;
   
   display: grid;
   grid-template-areas: 
   "icon    title"
   "....    sub-title";
   
   grid-template-columns: auto auto;
   grid-template-rows: repeat(2, auto);
   grid-gap: 0.2rem 0.8rem;
   
   > svg {
      grid-area: icon;
      color: ${props => props.theme['purple-regular']};
   }
`;

export const Title = styled.h1`
   grid-area: title;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 1.5rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-subtitle']};
`;

export const Subtitle = styled.span`
   grid-area: sub-title;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 1.3rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-text']};
`;

export const basePaymentWrapper = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 1.2rem;
   
   border: 0;
   border-radius: 6px;
   padding: 1.6rem;
   
   background-color: ${props => props.theme['base-button']};
   
   transition: all 0.2s ease;
   
   &:has(input:checked) {
      border: 1px solid ${props => props.theme['purple-regular']};
      background-color: ${props => props.theme['purple-light']};
   }
   
   > input {
      display: none;
   }
   
   > svg {
      color: ${props => props.theme['purple-regular']};
   }
   
   > label {
      font-family: 'Roboto', sans-serif;
      font-size: 1.2rem;
      font-weight: 400;
      line-height: 1.6;
      text-transform: uppercase;
      
      color: ${props => props.theme['base-text']}:
   }
   
   &:hover {
      background-color: ${props => props.theme['base-hover']};
      
      > label {
         color: ${props => props.theme['base-subtitle']};
      }
   }
`;


export const CreditCardWrapper = styled(basePaymentWrapper)`
   grid-area: button1;
`;

export const DebitCardWrapper = styled(basePaymentWrapper)`
   grid-area: button2;
`;

export const MoneyWrapper = styled(basePaymentWrapper)`
   grid-area: button3;
`;

