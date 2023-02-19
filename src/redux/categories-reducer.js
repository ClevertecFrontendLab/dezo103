import {createSlice} from "@reduxjs/toolkit";
import {categoryAPI} from "../api/api";
import {setIsErrorConnection, setIsLoading} from "./app-reducer";


const InitialState = []

const slice = createSlice({
    name: 'categories',
    initialState: InitialState,
    reducers: {
        setCategories(state, action) {
            return action.payload.value
        }
    }
})

export const categoriesReducer = slice.reducer
export const {setCategories} = slice.actions


export const setCategoriesThunk = () => async (dispatch) => {
    dispatch(setIsLoading({value: true}))
    try {
        const data = await categoryAPI.getCategories()
        dispatch(setCategories({value: data.data}))
    } catch {
        dispatch(setIsErrorConnection({value: true}))
    } finally {
        dispatch(setIsLoading({value: false}))
    }
}
