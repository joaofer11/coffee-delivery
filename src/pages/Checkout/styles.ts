import styled from 'styled-components';


export const CheckoutContainer = styled.main`
   display: flex;
   flex-direction: column;
   gap: 2.2rem;
   
   margin-top: 2.9rem;
   
   > section {
      display: flex;
      flex-direction: column;
      gap: 1.2rem;
   }
`;

export const Title = styled.h1`
   font-family: 'Baloo 2', sans-serif;
   font-weight: 700;
   font-size: 1.6rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-subtitle']};
`;