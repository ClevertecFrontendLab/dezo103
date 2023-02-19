import {createSlice} from "@reduxjs/toolkit";
import {setIsErrorConnection, setIsLoading} from "./app-reducer";
import {booksAPI} from "../api/api";


const InitialState = []

const slice = createSlice({
    name: 'books',
    initialState: InitialState,
    reducers: {
        setBooks(state, action) {
            return action.payload.value
        }
    }
})

export const booksReducer = slice.reducer
export const {setBooks} = slice.actions

export const setBooksThunk = () => async (dispatch) => {
    dispatch(setIsLoading({value: true}))
    try {
        const data = await booksAPI.getBooks()
        dispatch(setBooks({value: data.data}))
    } catch {
        dispatch(setIsErrorConnection({value: true}))
    } finally {
        dispatch(setIsLoading({value: false}))
    }
}
