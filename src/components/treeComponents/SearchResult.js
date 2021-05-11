import React from 'react'
import "./SearchResult.css"
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder"
import StarIcon from "@material-ui/icons/Star"


function SearchResult({
    img,
    location,
    title,
    description,
    star,
    price,
    total,
}) {
    return (
        <div className="searchResult">
            
            <img src={img} alt=""></img>
            <FavoriteBorderIcon className="heart"></FavoriteBorderIcon>
            <div className="searchResultInfo">
                <div className="infoTop">
                    <h3>{title}</h3>

                    <p>{location}</p>
                    <p>-----------------------</p>
                    <p>{description}</p>
                    
                </div>
                <div className="infoBottom">
                    <div className="searchStars">
                        <StarIcon className="starIcon"></StarIcon>
                        <p><strong>{star}</strong> </p>
                    </div>
                    <div className="price">
                        <h2>{price}</h2>
                        <p>{total}</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default SearchResult
