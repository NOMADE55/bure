import { initialState, getItem } from './selectors'
import { PRODUCT_ADD, PRODUCT_REMOVE, CART_CLEAR } from './actions';

export default (state = initialState, { type, payload = {} }) => {
	switch (type) {
		case PRODUCT_ADD:
			let itemToAdd = getItem(state, payload.item.id);
			while (itemToAdd === undefined) {
				state.items = [ ...state.items, {
					...payload.item,
					quantity: 0
				}]
				itemToAdd = getItem(state, payload.item.id);
			}
			itemToAdd.quantity += payload.quantity;
			return { ...state};
		case PRODUCT_REMOVE:
			const itemToDelete = getItem(state, payload.id);
			if(itemToDelete) {
				const index = state.items.indexOf(itemToDelete);
				state.items.splice(index, 1);
			}
			return {...state};
		case CART_CLEAR:
			return {
				...state,
				items: []
			}
		default:
			return state
	}

}