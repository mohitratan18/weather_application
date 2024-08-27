/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
const CityWeather = ({currentcity}) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${currentcity.icon}@2x.png`
  return (
    <div className="flex  md:flex-row pt-10 pl-3 pr-3 md:p-12 text-white justify-between items-center mb-8">
      <div>
        <div className="flex flex-col space-y-2 gap-6 md:gap-10">
          <div>
            <h1 className="text-3xl md:text-5xl pb-2">{currentcity.name}</h1>
            <p className="text-gray-400">Chances of rain : {currentcity.rain}%</p>
          </div>
          <div>
            <p className="text-3xl md:text-6xl">{Math.round(currentcity.temp) ?? " "}° C</p>
          </div>
        </div>
      </div>    
      <div className="">
        <img src={weatherIcon} alt="" className="md:w-[200px] md:h-[185px] w-[100px] h-[100px]"/>
      </div>
    </div>
  );
};

export default CityWeather;
