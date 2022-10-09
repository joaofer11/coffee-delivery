import styled from 'styled-components';

export const ListContainer = styled.ul`
   display: grid;
   grid-template-columns: repeat(2, 1fr);
   grid-template-rows: repeat(2, auto);
   
   row-gap: 1.9rem;
`;

export const ListItem = styled.li`
   display: flex;
   align-items: center;
   
   gap: 1.2rem;
`;

type TDefaultThemeValues = 'yellow-regular' | 'yellow-dark' | 'purple-regular' | 'base-text'
interface IIconContainerProps {
   bg: TDefaultThemeValues;
}

export const IconContainer = styled.div<IIconContainerProps>`
   display: flex;
   justify-content: center;
   align-items: center;
   
   border-radius: 50%;
   padding: 0.8rem;
   
   background-color: ${props => props.theme[props.bg]};
   
   > svg {
      color: ${props => props.theme['background-color']};
   }
`;
