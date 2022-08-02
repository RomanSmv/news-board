import {country} from "../store";
import {useDispatch} from "react-redux";
import {getNewsByCountryTC} from "./reducer-news";


export const CountrySelector = () => {
    const keys = Object.keys(country)
    const values = Object.values(country)
    const dispatch = useDispatch()
// @ts-ignore
    const onChangeHandlerGetNews = (e: any) => dispatch(getNewsByCountryTC(e.currentTarget.value))


    return (
        <select onChange={onChangeHandlerGetNews}>
            {keys.map((el:string, i)=>{
                return (
                    <option value={values[i]}>{el}</option>
                )
            })}

        </select>
    )
}