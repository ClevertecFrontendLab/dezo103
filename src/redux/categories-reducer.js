import {categoryAPI} from "../api/api";
import {setIsErrorConnection, setIsLoading} from "./app-reducer";
import {setBooksThunk} from "./books-reducer";

const SET_CATEGORIES = 'SET_CATEGORIES'

const InitialState = []

export const categoriesReducer = (state = InitialState, action) => {
    switch (action.type) {
        case SET_CATEGORIES:
            return [...action.payload]
        default:
            return state
    }
}

export const setCategories = (allCategories) => ({type: 'SET_CATEGORIES', payload: allCategories})


export const setCategoriesThunk = () => (dispatch) => {
    dispatch(setIsLoading(true))
    const data = categoryAPI.getCategories()
        .then((data) => {
            dispatch(setCategories(data.data))
            }
        ).catch((err) => {
            dispatch(setIsErrorConnection(true))
        })
        .finally(() => {
            dispatch(setIsLoading(false))
        })
}
