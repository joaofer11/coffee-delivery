import styled from 'styled-components';

export const IntroCalling = styled.section`
   position: relative;
   
   display: grid;
   grid-template-columns: 2fr 1.5fr;
   grid-template-rows: repeat(3, auto);
   grid-template-areas: 
   "title    image"
   "subtitle image"
   "list     image";
   column-gap: 3.0rem;

   > img {
      grid-area: image;
      align-self: center;
      width: 100%;
   }
`;

export const Title = styled.h1`
   grid-area: title;
   
   margin-bottom: 1.3rem;
   font-family: 'Baloo 2', sans-serif;
   font-weight: 800;
   font-size: 3.4rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-title']};
`;

export const Subtitle = styled.span`
   grid-area: subtitle;
   
   margin-bottom: 3.7rem;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 2.0 rem;
   line-height: 1.3;
   font-stretch: 100;
   
   color: ${props => props.theme['base-subtitle']};
`;
