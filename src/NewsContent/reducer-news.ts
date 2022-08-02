import {Action} from "redux";
import {newsApi} from "../api/api";
import {ThunkAction} from "redux-thunk";
import {RootState} from "../store";


type ActionType = ReturnType<typeof chooseCountryAC>
type ResponceType = {}
export type BaseThunkType<ActionType extends Action, Returns = Promise<void>> = ThunkAction<Returns, RootState, unknown, ActionType>
type newsState = typeof initialState
const initialState = {chosenCountry: '', news: [{}]}


export const newsReducer = (state = initialState, action: ActionType) => {
    switch (action.type) {
        case 'CHOOSE-COUNTRY':
            return {...state, news: action.news, chosenCountry: action.country}
        default:
            return state
    }

}
export const chooseCountryAC = (country: string, news: any) => {
    return {type: 'CHOOSE-COUNTRY', country, news}
}

export const getNewsByCountryTC = (country: string): BaseThunkType<ActionType> => {
    return async (dispatch) => {
       const data = await newsApi.filterByCountry(country)
        dispatch(chooseCountryAC(country, data.results))

    }
}