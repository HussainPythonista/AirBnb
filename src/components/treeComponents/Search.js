import React,{ useState } from 'react';
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from "@material-ui/core"
import PeopleIcon from "@material-ui/icons/People"
import { Icon } from '@material-ui/core/Icon';
import { useHistory } from 'react-router';



//Date Picker Components

function Search() {
    const history=useHistory()

    //To use the datePicker we need two important variable
    //1.Start Date
    const [startDate,setStartDate]=useState(new Date())
    //1.End Date
    const [endDate,setEndDate]=useState(new Date())

    //Selection Range
    const selectionRange={
        startDate:startDate,
        endDate: endDate,
        key:"selection"
    };

    //The below function will handle the selection


    function handleSelect(ranges){
        setStartDate(ranges.selection.startDate)
        setEndDate(ranges.selection.endDate)
    }

    return (
        <div className="Search">
            <DateRangePicker ranges={[selectionRange]} 
            onChange={handleSelect}></DateRangePicker>
            
            <h2>Number of Guests <PeopleIcon></PeopleIcon></h2> 
            <input min={0} defaultValue={2} type="number"></input>
                <Button onClick={()=>history.push("/search")}>Search AirBnB</Button>
            
        </div>
    )
}

export default Search
