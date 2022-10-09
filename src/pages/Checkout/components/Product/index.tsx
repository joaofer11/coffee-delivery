import { useState, useContext } from 'react';
import { ProductsContext } from '../../../../contexts/ProductsContext';

import { IProduct } from '../../../../interfaces/product';

import { Counter } from '../../../../components/Counter';
import * as I from '../../../../styles/icons';
import * as S from './styles';

interface IProductProps {
   product: IProduct;
}

export const Product = ({ product }: IProductProps) => {
	const { removeProduct } = useContext(ProductsContext);
	const [count, setCount] = useState(0);
   
	const resetCount = () => {
		setCount(0);
	};
   
	const decrementCount = () => {
		setCount(state => (state >= 1) ? (state - 1) : state);
	};
   
	const incrementCount = () => {
		setCount(state => {
			if (state < product.amount) {
				return state + 1;
			}
         
			return state;
		});
	};
   
	const handleRemoveProduct = () => {
		const productTag = {
			id: product.id,
			amount: count,
			price: product.price
		};
      
		removeProduct(productTag);
		resetCount();
	};
   
	return (
		<S.Product>
			<S.ImageWrapper>
				<img src={product.imagePath} alt="" />
				<span>{product.amount}</span>
			</S.ImageWrapper>
         
			<S.ProductName>{product.name}</S.ProductName>
         
			<S.Wrapper>
				<Counter 
					count={count}
					onDecrementCount={decrementCount}
					onIncrementCount={incrementCount}
				/>
				<S.RemoveButton onClick={handleRemoveProduct}>
					<I.Trash weight="regular" size={16} />
					<span>remover</span>
				</S.RemoveButton>
			</S.Wrapper>
         
			<S.Price>R$ {product.price}</S.Price>
		</S.Product>
	);
};
