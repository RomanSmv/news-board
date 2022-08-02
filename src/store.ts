import {applyMiddleware, combineReducers, createStore} from "redux";
import {newsReducer} from "./NewsContent/reducer-news";
import thunk from "redux-thunk";

export const country = {
    Argentina:'ar',
    Australia:'au',
    Austria:'at',
    Belgium: 'be'
}

const appRootReducer = combineReducers({
    newsPage: newsReducer,

})
export const store = createStore(appRootReducer, applyMiddleware(thunk))
export type RootState = ReturnType<typeof store.getState>

