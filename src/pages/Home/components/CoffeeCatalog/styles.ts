import styled from 'styled-components';

export const CoffeeCatalogContainer = styled.section`
   display: flex;
   flex-direction: column;
   align-items: flex-start;
   gap: 3.5rem;
   
   margin-top: 11.0rem;
   
   > h1 {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 3.4rem;
      line-height: 1.3;
      
      color: ${props => props.theme['base-subtitle']};
   }
`;
export const CatalogList = styled.ul`
   display: grid;
   column-gap: 1.9rem;
   row-gap: 2.4rem;
   grid-template-columns: repeat(3, 1fr);
`;
