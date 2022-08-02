import React from 'react';
import './App.css';
import {Header} from './Header/header';
import {NewsContent} from './NewsContent/NewsContent';
import {useDispatch, useSelector} from "react-redux";


function App() {
    const dispatch = useDispatch()
    // @ts-ignore
    const cash = useSelector(state => state.cash)

    const add = (cash: any) => {
        dispatch({type: "ADD-MONY", payload: cash})
    }

    const rem = (cash: any) => {
        dispatch({type: "REMOVE-MONY", payload: cash})
    }


    return (
        <div className="App">
            <Header/>
            <NewsContent/>
            <div>{cash}</div>
            <button onClick={() => add(Number(prompt()))}>ADD</button>
            <button onClick={() => rem(Number(prompt()))}>REMove</button>
        </div>

    );
}

export default App;
