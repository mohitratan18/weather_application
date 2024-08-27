/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { useContext } from "react";
import DayForecast from "./DayForecast";
import ForecastContext from "../Context/ForecastContext";

const SevenDayForecast = () => {
  
  const {sevenforecast} = useContext(ForecastContext);
    
  return (
    <div className="bg-[#202b3b] p-6 w-full md:p-10 rounded-xl text-white mt-8 min-w-full md:mt-0">
      <p className=" text-[1.2rem] md:text-xl text-gray-300">7-Day Forecast</p>
      <div className="flex flex-col justify-between pt-6 gap-2">
        {sevenforecast?.map((item, index) => {
          return <DayForecast key={index} item={item} />;
        })}
      </div>
    </div>
  );
};

export default SevenDayForecast;
