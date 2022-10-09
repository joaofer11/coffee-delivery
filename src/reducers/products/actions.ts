import { IProduct, IProductTag } from '../../interfaces/product';

export enum ActionTypes {
   INSERT_NEW_PRODUCT_IN_CART = 'INSERT_NEW_PRODUCT_IN_CART',
   UPDATE_PRODUCT_AMOUNT = 'UPDATE_PRODUCT_AMOUNT',
   REMOVE_PRODUCT = 'REMOVE_PRODUCT',
}

export const insertNewProductAction = (newProduct: IProduct) => ({
	type: ActionTypes.INSERT_NEW_PRODUCT_IN_CART,
	payload: { newProduct },
});


export const removeProductAction = (productTag: IProductTag) => ({
	type: ActionTypes.REMOVE_PRODUCT,
	payload: { productTag }
});

export const updateProductAmountAction = (productTag: IProductTag) => ({
	type: ActionTypes.UPDATE_PRODUCT_AMOUNT,
	payload: { productTag },
});