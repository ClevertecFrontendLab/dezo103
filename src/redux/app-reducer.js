import {createSlice} from "@reduxjs/toolkit";

const InitialState = {
    isErrorConnection: false,
    isLoading: false
}

const slice = createSlice({
    name: 'app',
    initialState: InitialState,
    reducers: {
        setIsErrorConnection(state, action) {
            /* eslint-disable no-param-reassign */
            state.isErrorConnection = action.payload.value
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload.value
            /* eslint-enable no-param-reassign */
        }
    }
})

export const appReducer = slice.reducer
export const {setIsErrorConnection, setIsLoading} = slice.actions





