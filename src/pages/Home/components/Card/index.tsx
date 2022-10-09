import { useState, useContext } from 'react';
import { ProductsContext } from '../../../../contexts/ProductsContext';
import { ShoppingCart } from '../../../../styles/icons';
import { Counter } from '../../../../components/Counter';

import {
	CardContainer,
	TagsContainer,
	Tag,
	Name,
	Description,
	Price,
	ActionsContainer,
	ShoppingCartButton,
} from './styles';

import { ICoffeeCatalog } from '../../../../interfaces/coffeeCatalog';

interface ICardProps {
   coffeeProduct: ICoffeeCatalog
}

export const Card = ({ coffeeProduct }: ICardProps) => {
	const [count, setCount] = useState(0);
	const { 
		insertNewProduct, 
		updateProductAmount,
		checkIfProductAlreadyExists,
	} = useContext(ProductsContext);
   
	const resetCount = () => {
		setCount(0);
	};
   
	const decrementCount = () => {
		setCount(state => (state >= 1) ? (state - 1) : state);
	};
   
	const incrementCount = () => {
		setCount(state => state + 1);
	};
   
	const handleInsertNewProduct = () => {
		const product = {
			id: coffeeProduct.id,
			imagePath: coffeeProduct.imagePath,
			name: coffeeProduct.name,
			price: coffeeProduct.price,
			amount: count,
		};
      
		const productTag = {
			id: coffeeProduct.id,
			amount: count,
			price: coffeeProduct.price,
		};
      
		if (!checkIfProductAlreadyExists(coffeeProduct.id)) {
			insertNewProduct(product);
			resetCount();
         
			return;
		}
      
		updateProductAmount(productTag);
		resetCount();
	};
   
	return (
		<CardContainer>
			<img src={coffeeProduct.imagePath} alt="" />
         
			<TagsContainer>
				{coffeeProduct.tags.map((tag) => {
					return (
						<Tag key={tag}>{tag}</Tag>
					);
				})}
			</TagsContainer>
         
			<Name>{coffeeProduct.name}</Name>
         
			<Description>{coffeeProduct.description}</Description>
         
			<Price>
				<span>R$</span> 
				<span>{coffeeProduct.price.toString().replace('.', ',')}</span>
			</Price>
         
			<ActionsContainer>
				<Counter
					count={count}
					onIncrementCount={incrementCount}
					onDecrementCount={decrementCount}
				/>
            
				<ShoppingCartButton onClick={handleInsertNewProduct}>
					<ShoppingCart weight="fill" size={22} />
				</ShoppingCartButton>
			</ActionsContainer>
		</CardContainer>
	);
};
