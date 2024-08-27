/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React from 'react'
import sun from "../assets/sun.png"
const DayForecast = ({item}) => {
  const weatherIcon = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`
  return (
    <div className='flex w-full flex-row justify-between border-b border-b-[#273447] items-center mt-3'>
      <p>{new Date(item.dt * 1000).toLocaleDateString()}</p>
      <img src={weatherIcon} alt='' className='w-[50px] h-[50px] mb-2'/>
      <p>{item.weather[0].description}</p>
      <p>{Math.round(item.main.temp)}° C</p>
    </div>
  )
}

export default DayForecast
