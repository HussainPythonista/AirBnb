import React, {useState} from 'react'
import "./Banner.css"
import { Button } from "@material-ui/core"
function Banner() {
    const [showSearch,setShowSearch]=useState(false)
    return (
        <div className="Banner">
            {showSearch && <h1>fuck you</h1>}
            
            <div className="bannerSearch">
            <Button ></Button>
            <Button onClick={()=>setShowSearch(!showSearch)}//We use !variable instead of showSearch=true,because ReactDom Does not assign the value
            
            className="searchButton" 
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
