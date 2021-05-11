import React from 'react'
import "./Card.css"

function Card({src,title,description,price}) {
    return (
        <div className="Card">
            <img src={src} alt=""></img>
            <div className="cardInfo">
                <h3>{title}</h3>
                <p>{description}</p>
                <h1>{price}</h1>
            </div>
        </div>
    )
}

export default Card
