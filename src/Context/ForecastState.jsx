/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, { useState } from "react";
import ForecastContext from "./ForecastContext";


const ForecastState = (props) => {
    const [sevenforecast, setsevenforecast] = useState([])
    const update = (data)=>{
      setsevenforecast(data);
    }
  return (
   <ForecastContext.Provider value={{sevenforecast , update}}>
    {props.children}
   </ForecastContext.Provider>
  )
}

export default ForecastState
