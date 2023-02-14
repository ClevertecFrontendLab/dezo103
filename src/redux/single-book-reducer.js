import {setIsErrorConnection, setIsLoading} from "./app-reducer";
import {booksAPI} from "../api/api";

const SET_SINGLE_BOOK = 'SET_SINGLE_BOOK'

const InitialState = {}

export const singleBookReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_SINGLE_BOOK:
            return {...action.payload}
        default:
            return state
    }
}

export const setSingleBook = (singleBook) => ({type: 'SET_SINGLE_BOOK', payload:singleBook})

export const setSingleBookThunk = (id) => (dispatch) => {
    dispatch(setIsLoading(true))
    const data = booksAPI.getSingleBook(id)
        .then((data) => {
                dispatch(setSingleBook(data.data))
            }
        ).catch((err) => {
            dispatch(setIsErrorConnection(true))
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })
}
