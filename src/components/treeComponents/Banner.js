import React, {useState} from 'react'
import "./Banner.css"
import { Button } from "@material-ui/core"
import Search from "./Search"
import {useHistory} from "react-router-dom"

function Banner() {
    const history=useHistory()
    const [showSearch,setShowSearch]=useState(false)

    return (
        <div className="Banner">
            {showSearch && <Search></Search>}
            
            <div className="bannerSearch">
            <Button ></Button>
            <Button onClick={()=>setShowSearch(!showSearch)}//We use !variable instead of showSearch=true,because ReactDom Does not assign the value

            className="searchButton" 
                variant='outlined'><b>{showSearch? "Hide":"Search Dates"}</b>
            </Button>
            </div>
            
            <div className="BannerInfo">
                <h1>Get Out and Streach your Imagination</h1>
                <h5>
                    Plan a different Kind Of gateway to uncover the hidden gems near you
                </h5>
                <Button variant='outlined' onClick={()=>history.push("/search")}><b>Explore NearBy</b></Button>
            </div>
            
        </div>
    )
}

export default Banner
