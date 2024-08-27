/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";
import sun from "../assets/sun.png";
const TodayReportBox = ({ item }) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
  return (
    <div className="flex flex-row md:flex-col flex-wrap gap-4 justify-evenly p-2 border-b border-[#273447] md:border-none mb-6 items-center">
      <div>
        {new Date(item.dt * 1000).toLocaleTimeString([], {
          hour: "2-digit",
          minute: "2-digit",
        })}
      </div>
      {/* <div>{item.weather[0].description}</div> */}
      <img src={weatherIcon} alt="" className="w-[50px] h-[50px]"/>
      <div>{Math.round(item.main.temp)}° C</div>
    </div>
  );
};

export default TodayReportBox;
