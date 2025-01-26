import React, { useState } from "react";
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

// CSS Modules, react-datepicker-cssmodules.css
// import 'react-datepicker/dist/react-datepicker-cssmodules.css';

export default function Example({datesUnavailable, selectedDate, updateSelectedDate}){
  const [startDate, setStartDate] = useState(new Date());
  let excludedDates = [];
  for(let i = 0; i < datesUnavailable.length; i++){
    let date = datesUnavailable[i].bookedDate.split("/")
    excludedDates.push(new Date(date[2], Number(date[1])-1, date[0]))
  }
  console.log('new excluded dates', excludedDates)
  return (
    <DatePicker 
    selected={selectedDate} 
    onChange={(date) => updateSelectedDate(date) } 
    minDate={new Date()}
    excludeDates={excludedDates}
    />
  );
};