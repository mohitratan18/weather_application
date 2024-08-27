/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from "react";

const AirConditions = ({conditions}) => {
  return (
    <div className="bg-[#202b3b] p-6 w-full md:p-10 rounded-xl mt-10 text-white">
      <p className="text-gray-300">AIR CONDITIONS</p>
      <div className="flex flex-col md:flex-row gap-4 pt-8 justify-evenly">
        <div className="flex flex-row md:flex-col gap-6 items-center">
          <p className="text-xl ">Real Feel🌡</p>
          <p>{conditions.realfeel ?? ""}° C</p>
        </div>
        <div className="flex flex-row md:flex-col gap-6 items-center">
          <p className="text-xl">Wind 💨</p>
          <p>{conditions.wind ?? " "}</p>
        </div>
        <div className="flex flex-row md:flex-col gap-6 items-center">
          <p className="text-xl">chances of rain ⛈</p>
          <p>{conditions.chancesofrain ?? " "}%</p>
        </div>
        <div className="flex flex-row md:flex-col gap-6 items-center">
          <p className="text-xl">Max Temp🌅</p>
          <p>{conditions.tempmax ?? " "}° C</p>
        </div>
      </div>
    </div>
  );
};

export default AirConditions;
