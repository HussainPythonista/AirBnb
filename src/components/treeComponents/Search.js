import React,{ useState } from 'react';
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { Button } from "@material-ui/core"
import { PeopleIcon } from "@material-ui/icons/People"


//Date Picker Components

function Search() {
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
            <DateRangePicker ranges={[selectionRange]} onChange={handleSelect}></DateRangePicker>
            <h2>Number Of Guests <PeopleIcon></PeopleIcon> </h2>
        </div>
    )
}

export default Search
