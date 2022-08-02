import React from "react";
import "./NewItem.css"
import {url} from "inspector";

export const NewItem = ({title, des, category, image}: {title:string, des: string, category: string, image:string}) =>
{
    console.log('44444',des, image)
    // @ts-ignore
    return (
        <div className="MainBlock" >

            <span className="CategoryBlock">{category}</span>
            <div className="TextBlock" >
                {/*<img src={image} style={{width:100, height:100}} />*/}
            <span className="TitleBlock">{title}</span>
            </div>

        </div>
    )
}
