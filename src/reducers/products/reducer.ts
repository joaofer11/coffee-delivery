import { IProduct } from '../../interfaces/product';
import { ActionTypes } from './actions';

interface IProductsState {
   products: IProduct[];
}

export const productsReducer = (state: IProductsState, action: any) => {
	switch(action.type) {
	case ActionTypes.INSERT_NEW_PRODUCT_IN_CART: {
		return {
			products: [...state.products, action.payload.newProduct],
		};
	}
		break;
      
	case ActionTypes.UPDATE_PRODUCT_AMOUNT: {
		const productIndex = state.products.findIndex((product) => {
			return product.id === action.payload.productTag.id;
		});
         
		return {
			products: state.products.map((product, index) => {
				return (index === productIndex)
					?  {
						...product,
						amount: product.amount + action.payload.productTag.amount
					}
					:  product;
			}),
		};
	}
		break;
      
	case ActionTypes.REMOVE_PRODUCT: {
		const productIndex = state.products.findIndex(product => {
			return product.id === action.payload.productTag.id;
		});
         
		const hasRemovedAll = action.payload.productTag.amount
            === state.products[productIndex].amount;
         
         
		if (hasRemovedAll) {
			return {
				products: state.products.filter((_, index) => {
					return index !== productIndex;
				}),
			};
		}
         
		return {
			products: state.products.map((product, index) => {
				return (index === productIndex)
					?  {
						...product,
						amount: product.amount - action.payload.productTag.amount
					}
					:  product;
			}),
		};
	}
		break;
      
	default: 
		return state;
		break;
	}
};
