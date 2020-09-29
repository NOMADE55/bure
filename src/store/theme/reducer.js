import { initialState } from './selectors'
import { TOGGLE_DARK_THEME } from './actions';

export default (state = initialState, { type, payload = {} }) => {
	switch (type) {
		case TOGGLE_DARK_THEME:
			const newValue = !state.darkTheme;
			localStorage.setItem('darkTheme', newValue);
			return {
				...state,
				darkTheme: newValue
			}
		default:
			return state
	}
}