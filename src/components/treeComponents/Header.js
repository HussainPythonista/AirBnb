import React from 'react'
import "./Header.css"
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language"
import ExpandMore from "@material-ui/icons/ExpandMore"
import { Avatar } from "@material-ui/core"

function Header() {
    return (
        <div className="header">
            
            <img className="logoImage" 
            src="https://cdn.designrush.com/uploads/inspiration_images/4810/990__1511452487_364_Airbnb.png"
            alt=""></img>
            <div className="headerCenter">
                <input type="text">

                </input>
                <SearchIcon></SearchIcon>{/*We got SearchIcon from Materia Ui and  materialIcons */}
            </div>

            <div className="headerRight">
                <p><b><i>Become a host</i></b></p>
                <LanguageIcon></LanguageIcon>
                <ExpandMore>

                </ExpandMore>
                <Avatar></Avatar>
            </div>
        </div>

    )
}

export default Header
