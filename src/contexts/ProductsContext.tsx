import { useReducer, createContext, ReactNode } from 'react';
import { IProduct, IProductTag } from '../interfaces/product';
import { productsReducer } from '../reducers/products/reducer';
import {
	updateProductAmountAction,
	insertNewProductAction, 
	removeProductAction,
} from '../reducers/products/actions';


const initialState = {
	products: [],
};

interface IProductsContext {
   products: IProduct[]; 
   productsTotalAmount: number;
   productsTotalPrice: number;
   
   updateProductAmount: (productTag: IProductTag) => void
   removeProduct: (productTag: IProductTag) => void;
   checkIfProductAlreadyExists: (id: number) => boolean;
   insertNewProduct: (newProduct: IProduct) => void;
}

export const ProductsContext = createContext({} as IProductsContext);

interface IProductsContextProviderProps {
   children: ReactNode
}

export const ProductsContextProvider = ({ 
	children 
}: IProductsContextProviderProps) => {
	const [productsState, dispatch] = useReducer(productsReducer, initialState);
   
	const { products } = productsState;
   
	const productsTotalAmount = products.reduce((prevAcc: number, product) => {
		return prevAcc + product.amount;
	}, 0);
   
	const productsTotalPrice = products.reduce((prevAcc, product) => {
		return prevAcc + (product.amount * product.price);
	}, 0);
   
	const insertNewProduct = (newProduct: IProduct) => {
		dispatch(insertNewProductAction(newProduct));
	};
   
	const removeProduct = (productTag: IProductTag) => {
		dispatch(removeProductAction(productTag));
	};
   
	const updateProductAmount = (productTag: IProductTag) => {
		dispatch(updateProductAmountAction(productTag));
	};
   
	const checkIfProductAlreadyExists = (id: number) => {
		return products.some(product => product.id === id);
	};
   
	return (
		<ProductsContext.Provider
			value={{
				products,
				removeProduct,
				insertNewProduct,
				productsTotalPrice,
				productsTotalAmount,
				updateProductAmount,
				checkIfProductAlreadyExists,
			}}
		>
			{children}
		</ProductsContext.Provider>
	);
};
