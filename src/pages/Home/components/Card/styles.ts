import styled from 'styled-components';


export const CardContainer = styled.li`
   position: relative;
   
   display: grid;
   grid-template: 
   "image       image"             auto
   "tags        tags"              auto
   "name        name"              auto
   "description description"       auto
   "price       actions"           auto
   / auto       auto;
   grid-gap: 0.8rem;
   place-items: center;
   
   border-radius: 6px 36px;
   padding: 0 1.3rem 1.3rem;
   
   background-color: ${props => props.theme['base-card']};
   
   > img {
      grid-area: image;
      margin-top: -10%;
   }
`;

export const TagsContainer = styled.div`
   grid-area: tags;
   
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 0.4rem;
   
   &:not( > div + div) {
      gap: 0;
   }
`;

export const Tag = styled.span`
   display: flex;
   justify-content: center;
   align-items: center;
   
   border-radius: 100px;
   padding: 0.4rem 0.8rem;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 800;
   font-size: 1.0rem;
   line-height: 1.3;
   text-transform: uppercase;
   
   
   color: ${props => props.theme['yellow-dark']};
   background-color: ${props => props.theme['yellow-light']};
`;

export const Name = styled.span`
   grid-area: name;
   
   font-family: 'Baloo 2', sans-serif;
   font-weight: 700;
   font-size: 1.8rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-subtitle']};
`;

export const Description = styled.span`
   grid-area: description;
   
   width: 80%;
   margin-bottom: 1.45rem;
   
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 1.2rem;
   line-height: 1.3;
   text-align: center;
   
   color: ${props => props.theme['base-label']};
`;

export const Price = styled.div`
   grid-area: price;
   color: ${props => props.theme['base-text']};
   
   > span:nth-child(1) {
      font-family: 'Roboto', sans-serif;
      font-weight: 400;
      font-size: 1.4rem;
      line-height: 1.3;
   }
   
   > span:nth-child(2) {
      font-family: 'Baloo 2', sans-serif;
      font-weight: 800;
      font-size: 2.3rem;
      line-height: 1.3;
      
      margin-left: 0.4rem;
   }
`;

export const ActionsContainer = styled.div`
   grid-area: actions;
   
   display: flex;
   gap: 0.8rem;
   
   margin-left: 1.1rem;
`;



export const ShoppingCartButton = styled.button`
   display: flex;
   justify-content: center;
   align-items: center;
   
   border: 0;
   border-radius: 6px;
   padding: 0.8rem;
   
   background-color: ${props => props.theme['purple-dark']};
   
   transition: all 0.2s ease;
   
   > svg {
      color: ${props => props.theme['base-card']};
   }
   
   &:hover {
      background-color: ${props => props.theme['purple-regular']};
   }
`;
