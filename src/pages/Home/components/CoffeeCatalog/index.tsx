import { coffeeCatalog } from '../../../../data/coffeeCatalog';
import { Card } from '../Card';

import {
	CoffeeCatalogContainer,
	CatalogList,
} from './styles';

export const CoffeeCatalog = () => {
	return (
		<CoffeeCatalogContainer>
			<h1>Nossos cafés</h1>
         
			<CatalogList>
				{coffeeCatalog.map((coffeeProduct) => (
					<Card 
						key={coffeeProduct.id} 
						coffeeProduct={coffeeProduct} 
					/>
				))}
			</CatalogList>
		</CoffeeCatalogContainer>
	);
};