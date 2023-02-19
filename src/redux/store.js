import {combineReducers, configureStore} from "@reduxjs/toolkit";
import {categoriesReducer} from "./categories-reducer";
import {appReducer} from "./app-reducer";
import {booksReducer} from "./books-reducer";
import {singleBookReducer} from "./single-book-reducer";


const rootReducer = combineReducers({
    categories: categoriesReducer,
    app: appReducer,
    books: booksReducer,
    singleBook: singleBookReducer
})


export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware()
})


