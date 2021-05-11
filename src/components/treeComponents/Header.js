import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core"
import { Link } from "react-router-dom"

function Header() {
    return (
        <div className="header">
            <Link to="/">
                <img className="logoImage" 
                src="https://cdn.designrush.com/uploads/inspiration_images/4810/990__1511452487_364_Airbnb.png"
                alt=""></img>
            </Link>
            
            <div className="headerCenter">
                <input type="text">

                </input>
                <SearchIcon></SearchIcon>{/*We got SearchIcon from Materia Ui and  materialIcons */}
            </div>

            <div className="headerRight">
                <p className="host"><i>Become a host</i></p>
                <div className="language"> 
                    <LanguageIcon></LanguageIcon>
                </div>
                <div className="Expand"> 
                    <ExpandMore>

                    </ExpandMore>
                </div>
                <Avatar></Avatar>
            </div>
        </div>

    )
}

export default Header
