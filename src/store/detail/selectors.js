export const initialState = {
    open: false,
    loading: false,
    success: true,
    product: {},
}

// console.log(initialState);
export const isOpen = (state = initialState) => state.open === true;
export const isClosed = (state = initialState) => state.open === false;
export const isLoading = (state = initialState) => state.loading === true;
export const product = (state = initialState) => state.product;
