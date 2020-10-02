export const initialState = {
    items: []
}

export const getItems = (state = initialState) => state.items;
export const getItem = (state = initialState, id) => state.items.filter(item => item.id === id)[0];
export const getItemIndex = (state = initialState, id) => state.items.indexOf(getItem(state, id));