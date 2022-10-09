import styled, { css } from 'styled-components';

export const Cart = styled.div`
   display: grid;
   grid-template-rows: repeat(auto-fit, auto);
   align-items: center;
   row-gap: 2.4rem;
   
   width: 70%;
   border-radius: 6px 44px;
   padding: 4.0rem;
   
   background-color: ${props => props.theme['base-card']};
`;

export const PriceStatistics = styled.div`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(3, auto);
   row-gap: 1.2rem;
`;

const BaseText = styled.span`
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   line-height: 1.3;
   
   color: ${props => props.theme['base-text']};
`;

const PositionedElementsAtEndCSS = css`
   justify-self: end;
`;

export const TotalItems = styled(BaseText)`
   font-size: 1.4rem;
`;

export const TotalItemsPrice = styled(BaseText)`
   font-size: 1.8rem;
   ${PositionedElementsAtEndCSS};
`;

export const Delivery = styled(BaseText)`
   font-size: 1.4rem;
`;

export const DeliveryPrice = styled(BaseText)`
   font-size: 1.8rem;
   ${PositionedElementsAtEndCSS};
`;

const BaseText2 = styled.span`
   font-family: 'Roboto', sans-serif;
   font-weight: 700;
   font-size: 2.0rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-subtitle']};
`;

export const Total = styled(BaseText2)`
`;

export const TotalPrice = styled(BaseText2)`
   ${PositionedElementsAtEndCSS};
`;

export const ConfirmOrderButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   
   border: 0;
   border-radius: 6px;
   padding: 1.2rem 0.8rem;
   
   font-family: 'Roboto', sans-sefif;
   font-weight: 700;
   font-size: 1.4rem;
   line-height: 1.6;
   text-transform: uppercase;
   
   color: ${props => props.theme['white']};
   background-color: ${props => props.theme['yellow-regular']};
`;
