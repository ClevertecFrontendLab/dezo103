import {applyMiddleware, combineReducers, createStore} from "redux";
import thunkMiddleware from 'redux-thunk';
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



export const store = createStore(rootReducer, applyMiddleware(thunkMiddleware))


window.store=store
