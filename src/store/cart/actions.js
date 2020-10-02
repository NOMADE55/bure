export const PRODUCT_ADD = 'PRODUCT_ADD';
export const CART_CLEAR = 'CART_CLEAR';
export const PRODUCT_REMOVE = 'PRODUCT_REMOVE';

export const addProduct = (item, quantity) => ({
	type: PRODUCT_ADD,
	payload: {
		item: item,
		quantity: parseInt(quantity)
	}
});

export const removeProduct = (id) => ({
	type: PRODUCT_REMOVE,
	payload: {
		id: id
	}
});

export const clearCart = () => ({
	type: CART_CLEAR,
	payload: {}
});