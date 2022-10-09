import styled from 'styled-components';

export const HeaderContainer = styled.header`
   display: flex;
   justify-content: space-between;
   align-items: center;
   
   width: 100%;
   padding: 3.2rem 0;
   
   > img {
      height: 4.0rem;
   }
`;

export const Actions = styled.div`
   display: flex;
   justify-content: flex-end;
   align-items: center;
   gap: 1.2rem;
`;

export const Location = styled.div`
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.4rem;
   
   border-radius: 6px;
   padding: 0.8rem;
   
   background-color: ${props => props.theme['purple-light']};
   
   > span {
      color: ${props => props.theme['purple-dark']};
      font-size: 1.4rem;
      line-height: 1.6;
   }
`;

export const ShoppingCartButton = styled.div`
   position: relative;
   
   display: flex;
   justify-content: center;
   align-items: center;
   
   border-radius: 6px;
   padding: 0.8rem;
   
   background-color: ${props => props.theme['yellow-light']};
   
   > svg {
      color: ${props => props.theme['yellow-dark']};
   }
`;

export const TotalProductsAmount = styled.span`
   position: absolute;
   top: 0;
   right: 0;
   transform: translate(50%, -50%);
   
   width: 2.0rem;
   height: 2.0rem;
   
   display: flex;
   justify-content: center;
   align-items: center;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 700;
   font-size: 1.2rem;
   line-height: 1.3;
   
   border-radius: 50%;
   
   color: ${props => props.theme['white']};
   background-color: ${props => props.theme['yellow-dark']};
`;