import {setIsErrorConnection, setIsLoading} from "./app-reducer";
import {booksAPI} from "../api/api";

const SET_BOOKS = 'SET_BOOKS'

const InitialState = []

export const booksReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_BOOKS:
            return action.payload
        default:
            return state
    }
}

export const setBooks = (allBooks) => ({type: 'SET_BOOKS', payload: allBooks})


export const setBooksThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    const data = booksAPI.getBooks()
        .then((data) => {
            dispatch(setBooks(data.data))
        })
        .catch((err) => {
            dispatch(setIsErrorConnection(true))
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })
}
