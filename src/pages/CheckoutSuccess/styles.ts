import styled, { css } from 'styled-components';

export const Success = styled.main`
   display: flex;
   flex-direction: column;
   
   margin-top: 4.0rem;
   
   > img {
      display: block;
      align-self: center;
   }
`;

export const Title = styled.h1`
   font-family: 'Baloo 2', sans-serif;
   font-weight: 800;
   font-size: 3.2rem;
   line-height: 1.3;
   
   color: ${props => props.theme['yellow-dark']};
`;

export const Subtitle = styled.h2`
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 2.0rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-subtitle']};
`;

export const OrderInfo = styled.div`
   position: relative;
   
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 3.2rem;
   
   margin: 4.0rem 0;
   border-radius: 6px 36px;
   padding: 4.0rem;
   background-color: ${props => props.theme['background-color']};
   
   &::before {
      content: "";
      
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      
      margin: -0.1rem;
      border-radius: inherit;
      background-image: linear-gradient(90deg, #DBAC2C, #8047F8);
   }
`;

const baseOrderInfoElementsCSS = css`
   display: grid;
   grid-template-columns: repeat(2, auto);
   grid-template-rows: repeat(2, auto);
   column-gap: 1.2rem;
   
   grid-template-areas:
   "icon first-line"
   "icon second-line";
   
   align-items: center;
   
   > span {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.6rem;
      line-height: 1.3;
      
      color: ${props => props.theme['base-text']};
      
      &:first-child {
         grid-area: first-line;
      }
      
      &:last-child {
         grid-area: second-line;
      }
   }
`;

export const Local = styled.div`
   ${baseOrderInfoElementsCSS};
`;

export const Time = styled.div`
   ${baseOrderInfoElementsCSS};
`;

export const Payment = styled.div`
   ${baseOrderInfoElementsCSS};
`;

const defaultTheme = {
	purple: 'purple-regular',
	yellow: 'yellow-regular',
	yellowDark: 'yellow-dark'
} as const;

type TDefaultThemeKeys = keyof typeof defaultTheme

interface IIconWrapperProps {
   bg: TDefaultThemeKeys;
}

export const IconWrapper = styled.div<IIconWrapperProps>`
   grid-area: icon;
   
   display: flex;
   justify-content: center;
   align-items: center;
   
   width: 3.2rem;
   height: 3.2rem;
   
   border-radius: 50%;
   padding: 0.8rem;
   
   background-color: ${props => props.theme[defaultTheme[props.bg]]};
`;
