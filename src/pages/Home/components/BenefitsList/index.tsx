import {
	ShoppingCart,
	Timer,
	Package,
	Coffee,
} from '../../../../styles/icons';

import { 
	ListContainer,
	ListItem,
	IconContainer,
} from './styles';

export const BenefitsList = () => {
	return (
		<ListContainer>
			<ListItem>
				<IconContainer bg="yellow-dark">
					<ShoppingCart weight="fill" size={16} />
				</IconContainer>
				<span>Compra simples e segura</span>
			</ListItem>
         
			<ListItem>
				<IconContainer bg="base-text">
					<Package weight="fill" size={16} />
				</IconContainer>
				<span>Embalagem mantém o café intacto</span>
			</ListItem>
         
			<ListItem>
				<IconContainer bg="yellow-regular">
					<Timer weight="fill" size={16} />
				</IconContainer>
				<span>Entrega rápida e rastreada</span>
			</ListItem>
         
			<ListItem>
				<IconContainer bg="purple-regular">
					<Coffee weight="fill" size={16}/>
				</IconContainer>
				<span>O café chega fresquinho até você</span>
			</ListItem>
		</ListContainer>
	);
};
