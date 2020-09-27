import { initialState } from './selectors'
import { TOGGLE_DARK_THEME } from './actions';

export default (state = initialState, { type, payload = {} }) => {
	switch (type) {
		case TOGGLE_DARK_THEME:
			console.log("darkTheme", !state.darkTheme);
			return {
				...state,
				darkTheme: !state.darkTheme
			}
		default:
			return state
	}
}