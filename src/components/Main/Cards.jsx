
import React from 'react';
import data from "../../helpers/data";
import "./Main.scss";

const Card = (data)=>{
    return (
        <div className="cards">
            <div className="data-title">
                <h1>{data.title}</h1>
            
            </div>
            <img src={data.image} alt="" />
            <div className="card-over">
                <p>
                    {data.desc}
                </p>
            </div>
        </div>
    )
}

export default Card;