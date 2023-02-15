const SET_IS_ERROR_CONNECTION = 'SET_IS_ERROR_CONNECTION'
const SET_IS_LOADING = 'SET_IS_LOADING'

const InitialState = {
    isErrorConnection: false,
    isLoading: false
}

export const appReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_IS_ERROR_CONNECTION:
            return {
                ...state,
                isErrorConnection: action.payload
            }
        case SET_IS_LOADING:
            return {
                ...state,
                isLoading: action.payload
            }
        default:
            return state
    }
}

export const setIsErrorConnection = (isError) => ({
    type: 'SET_IS_ERROR_CONNECTION', payload: isError
})
export const setIsLoading = (isLoading) => ({
    type: 'SET_IS_LOADING',
    payload: isLoading
})




