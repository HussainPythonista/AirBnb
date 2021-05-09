import React from 'react'
import "./Banner.css"
import { Button } from "@material-ui/core"
function Banner() {
    return (
        <div className="Banner">
            <div className="bannerSearch">
                <Button className="searchButton" 
                variant='outlined'><b>Search Dates</b>
                </Button>
            </div>
            <div className="BannerInfo">
                <h1>Get Out and Streach your Imagination</h1>
                <h5>
                    Plan a different Kind Of gateway to uncover the hidden gems near you
                </h5>
                <Button variant='outlined'><b>Explore NearBy</b></Button>
            </div>
            
        </div>
    )
}

export default Banner
