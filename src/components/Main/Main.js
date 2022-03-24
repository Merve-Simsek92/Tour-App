import React from 'react'

import { data } from "../../helpers/data";
import Card from './Cards';

import "./Main.scss"


const Main=()=>{
    return(
        <div className='card-container'>
        {data.map((item,index)=>(<Card {...item} key={index}/>))
        }
        </div>
    )
}
export default Main;