import styled from 'styled-components';

export const Product = styled.div`
   display: grid;
   grid-template-areas:
   "image   product-name   price"
   "image   wrapper        .....";
   
   grid-template-columns: auto 1fr auto;
   grid-template-rows: repeat(2, auto);
   justify-items: start;
   column-gap: 2.0rem;
   
   border-bottom: 1px solid ${props => props.theme['base-button']};
   padding: 0.8rem 0.4rem 2.4rem;
   
   background-color: ${props => props.theme['base-card']};
`;

export const ImageWrapper = styled.div`
   grid-area: image;
   
   position: relative;
   width: 6.4rem;
   
   > img {
      display: block;
      width: 100%;
   }
   
   > span {
      position: absolute;
      bottom: 0;
      left: 0;
      
      display: flex;
      justify-content: center;
      align-items: center;
      
      width: 2.0rem;
      height: 2.0rem;
      
      border-radius: 50%;
      
      font-family: 'Roboto', sans-serif;
      font-weight: 700;
      font-size: 1.2rem;
      
      color: ${props => props.theme['white']};
      background-color: ${props => props.theme['yellow-dark']};
   }
`;

export const ProductName = styled.span`
   grid-area: product: name;
   align-self: end;
   
   margin-bottom: 0.8rem;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 1.6rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-subtitle']};
`;

export const Wrapper = styled.div`
   grid-area: wrapper;
   align-self: start;
   
   display: flex;
   gap: 0.8rem;
`;

export const RemoveButton = styled.button`
   display: flex;
   align-items: center;
   gap: 0.4rem;
   
   border: 0;
   border-radius: 6px;
   padding: 0 0.8rem;
   
   background-color: ${props => props.theme['base-button']};
   
   > svg {
      color: ${props => props.theme['purple-regular']};
   }
   
   > span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.2rem;
      line-height: 1.6;
      text-transform: uppercase;
      
      
      color: ${props => props.theme['base-text']};
   }
`;

export const Price = styled.span`
   grid-area: price;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 700;
   font-size: 1.6rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-text']};
`;
