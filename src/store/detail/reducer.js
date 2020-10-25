import { initialState } from './selectors';
import { ITEM_DETAIL_OPEN, ITEM_DETAIL_CLOSE } from './actions';

export default (state = initialState, { type, payload = {} }) => {
	switch (type) {
		case ITEM_DETAIL_OPEN:
            return {
                ...state,
                itemDetailOpen: true
            }
		case ITEM_DETAIL_CLOSE:
            return {
                ...state,
                itemDetailOpen: false
            }
		default:
			return state;
	}
}