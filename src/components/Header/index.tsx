import { useContext } from 'react';
import { ProductsContext } from '../../contexts/ProductsContext';
import { useNavigate } from 'react-router-dom';
import LogoSVG from '../../assets/Logo.svg';

import { 
	ShoppingCart, 
	MapPin,
} from '../../styles/icons';

import {
	HeaderContainer,
	Actions,
	Location,
	ShoppingCartButton,
	TotalProductsAmount,
} from './styles';

export const Header = () => {
	const { productsTotalAmount } = useContext(ProductsContext);
	const navigate = useNavigate();
   
	return (
		<HeaderContainer>
			<img src={LogoSVG} alt="" />
         
			<Actions>
				<Location>
					<MapPin weight="fill" size={22} />
					<span>Riacho de Santana, RN</span>
				</Location>
				
				<ShoppingCartButton onClick={() => navigate('/checkout')}>
					<ShoppingCart weight="fill" size={22} />
               
					{ !!productsTotalAmount && ( 
						<TotalProductsAmount>
							{productsTotalAmount}
						</TotalProductsAmount> 
					)}
				</ShoppingCartButton>
			</Actions>
         
		</HeaderContainer>
	);
};
