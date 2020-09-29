export const initialState = {
    darkTheme: JSON.parse(localStorage.getItem('darkTheme')) || false
}

export const getDarkTheme = (state = initialState) => JSON.parse(state.darkTheme);