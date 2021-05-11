import React from 'react'

import Banner from "./treeComponents/Banner"
import Card from "./treeComponents/Card"
import "./home.css"


function home() {
    return (
        <div className="home">
            
            <Banner></Banner>
            <div className="homeSection">
                <Card title="Online Experience" description="Unique Activities we can do together,led by a world of hosts" src="https://a0.muscache.com/im/pictures/eb9c7c6a-ee33-414a-b1ba-14e8860d59b3.jpg?im_w=720"></Card>
                <Card title="Unique Stays" src="https://a0.muscache.com/im/pictures/15159c9c-9cf1-400e-b809-4e13f286fa38.jpg?im_w=720" 
                description="Spaces that are more than just place to sleep" price=""></Card>
                <Card title="Entire Homes" src="https://a0.muscache.com/im/pictures/fdb46962-10c1-45fc-a228-d0b055411448.jpg?w=720" description="Comfortable private palaces,with room for friends and family"></Card>
           
            </div>
            <div className="homeSection">
                <Card src="https://media.nomadicmatt.com/2018/apartment.jpg" title="3 Bedroom Flat in Bournemouth" 
                description='SuperHost with a stunning view of a beachside in sunny BourneMouth' price='€130/night'></Card>
                <Card src="https://thespaces.com/wp-content/uploads/2017/08/Courtesy-of-Airbnb.jpg"
                title="PentHouse in London" 
                description='Enjoy the amazing sights of London with this stunning pentHouse' price="€350/night"></Card>
                <Card src='https://media.nomadicmatt.com/2019/airbnb_breakup3.jpg'
                title="1 Bedroom apartment" 
                description='SuperHost with great amenties and a fabulous shopping complex nearby' price="€70/night"></Card>
            </div>
            
            

        
        </div>
    )
}

export default home
