import { useContext } from 'react';
import { ProductsContext } from '../../../../contexts/ProductsContext';

import { Product } from '../Product';
import * as S from './styles';

export const Cart = () => {
	const { products, productsTotalPrice } = useContext(ProductsContext);
   
	const formatPrice = (price: number) => price.toFixed(2).replace('.', ',');
   
	return (
		<S.Cart>
			{
				products.map(product => 
					<Product key={product.id} product={product} />
				)
			}
         
			<S.PriceStatistics>
				<S.TotalItems>Total de items</S.TotalItems>
				<S.TotalItemsPrice>
               R$ {formatPrice(productsTotalPrice)}
				</S.TotalItemsPrice>
            
				<S.Delivery>Entrega</S.Delivery>
				<S.DeliveryPrice>R$ 3,50</S.DeliveryPrice>
            
				<S.Total>Total</S.Total>
				<S.TotalPrice>R$ {formatPrice(productsTotalPrice + 3.50)}</S.TotalPrice>
			</S.PriceStatistics>
         
			<S.ConfirmOrderButton type="submit" form="checkoutForm">
            confirmar pedido
			</S.ConfirmOrderButton>
		</S.Cart>
	);
};
