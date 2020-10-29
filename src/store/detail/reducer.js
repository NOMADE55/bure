import { initialState } from './selectors';
import { ITEM_DETAIL_OPEN, ITEM_DETAIL_CLOSE, ITEM_DETAIL_GET, ITEM_DETAIL_SUCCESS, ITEM_DETAIL_FAILURE } from './actions';

const BODY = document.querySelector('body');

export default (state = initialState, { type, payload = {} }) => {
	switch (type) {
		case ITEM_DETAIL_OPEN:
            BODY.style.overflow = "hidden";
            return {
                ...state,
                open: true
            }
		case ITEM_DETAIL_CLOSE:
            BODY.style.overflow = "";
            return {
                ...state,
                open: false
            }
        case ITEM_DETAIL_GET:
            return {
                ...state,
                loading: true,
                success: null
            }
        case ITEM_DETAIL_SUCCESS:
            return {
                ...state,
                loading: false,
                success: true,
                product: payload
            }
        case ITEM_DETAIL_FAILURE:
            return {
                ...state,
                loading: false,
                success: false,
                product: {}
            }
		default:
			return state;
	}
}