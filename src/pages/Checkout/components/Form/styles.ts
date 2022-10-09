import styled, { css } from 'styled-components';

export const FormWrapper = styled.div`
   display: grid;
   grid-template: 
   "map-icon  title"       auto
   "........  sub-title"   auto
   "form      form"        auto
   / auto     1fr;
   
   
   border-radius: 6px;
   padding: 4.0rem;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   line-height: 1.3;
   
   background-color: ${props => props.theme['base-card']};
   
   > svg {
      grid-area: map-icon;
      margin-right: 0.8rem;
      
      color: ${props => props.theme['yellow-dark']};
   }
`;

export const Title = styled.h1`
   grid-area: title;
   font-size: 1.5rem;
   
   color: ${props => props.theme['base-subtitle']};
`;

export const Subtitle = styled.span`
   grid-area: sub-title;
   font-size: 1.3rem;
   
   color: ${props => props.theme['base-text']};
`;

export const Form = styled.form`
   grid-area: form;
   
   display: grid;
   grid-template:
   "cep              ....              ...."          auto
   "street           street            street"        auto
   "street-number    complement        complement"    auto
   "district         city              country"       auto
   / 4fr             4fr               1fr;
   grid-gap: 1.6rem 1.2rem;
   
   margin-top: 2.7rem;
`;

const baseInput = css`
   border: 0;
   border-radius: 4px;
   padding: 1.2rem;
   
   font-family: 'Roboto', sans-serif;
   font-weight: 400;
   font-size: 1.4rem;
   line-height: 1.3;
   
   color: ${props => props.theme['base-text']};
   background-color: ${props => props.theme['base-input']}
   
   &::placeholder {
      color: ${props => props.theme['base-label']};
   }
`;


const BaseLabel = styled.label`
   > input {
      ${baseInput};
      width: 100%;
   }
   
   > span {
      
      font-family: 'Roboto', sans-serif;
      font-size: 1.0rem;
      font-weight: 700;
      color: ${props => props.theme['yellow-regular']};
   }
`;

export const CepLabel = styled(BaseLabel)`
   grid-area: cep;
   
   > input {
      width: 100%;
   }
`;

export const StreetLabel = styled(BaseLabel)`
   grid-area: street;
`;

export const StreetNumberLabel = styled(BaseLabel)`
   grid-area: street-number;
`;

interface IComplementLabelProps {
   hasComplementInputValue?: boolean;
}

export const ComplementLabel = styled(BaseLabel)<IComplementLabelProps>`
   grid-area: complement;
   align-self: start;
   
   position: relative;
   
   &::after {
      content: "Opcional";
      
      position: absolute;
      top: 50%;
      right: 1.2rem;
      transform: translateY(-50%);
      
      display: ${props => props.hasComplementInputValue ? 'none' : 'block'};
      
      font-style: italic;
      font-size: 1.2 rem;
      
      color: ${props => props.theme['base-label']};
   }
`;

export const DistrictLabel = styled(BaseLabel)`
   grid-area: district;
`;

export const CityLabel = styled(BaseLabel)`
   grid-area: city;
`;

export const CountryLabel = styled(BaseLabel)`
   grid-area: country;
`;
