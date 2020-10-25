export const initialState = {
    itemDetailOpen: false
}

// console.log(initialState);
export const isOpen = (state = initialState) => state.itemDetailOpen === true;
export const isClosed = (state = initialState) => state.itemDetailOpen === false;
