import {createSlice} from "@reduxjs/toolkit";
import {setIsErrorConnection, setIsLoading} from "./app-reducer";
import {booksAPI} from "../api/api";


const InitialState = {}
const slice = createSlice({
    name: 'singleBook',
    initialState: InitialState,
    reducers: {
        setSingleBook(state, action) {
            return action.payload.value
        }
    }
})

export const singleBookReducer = slice.reducer
export const {setSingleBook} = slice.actions


export const setSingleBookThunk = (id) => async (dispatch) => {
    dispatch(setIsLoading({value: true}))
    try {
        const data = await booksAPI.getSingleBook(id)
        dispatch(setSingleBook({value: data.data}))
    } catch {
        dispatch(setIsErrorConnection({value: true}))
    } finally {
        dispatch(setIsLoading({value: false}))
    }
}

