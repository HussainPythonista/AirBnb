import React,{useState} from 'react';
import "./Search.css";
import { DateRangePicker } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
//Date Picker Components
function Search() {
    //To use the datePicker we need two important variable
    //1.Start Date
    const [startDate,setstartDate]=useState(new Date())
    //1.End Date
    const [endDate,setendDate]=useState(new Date())
    return (
        <div className="Search">
            <h1>Hello world</h1>
        </div>
    )
}

export default Search
