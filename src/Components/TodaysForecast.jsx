/* eslint-disable react/prop-types */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React from 'react'
import TodayReportBox from './TodayReportBox'

const TodaysForecast = ({threehours}) => {
  return (
    <div className='bg-[#202b3b] p-6 w-full md:p-10 rounded-xl text-white'>
      <p className=' text-[1rem] md:text-lg text-gray-300'>Today's Forecast</p>
      <div className='flex flex-col md:flex-row justify-around pt-6'>
        {
            threehours.slice(0,8).map((item,index)=>{
                return (<TodayReportBox key={index} item={item}/>)
            })
        }
      </div>
    </div>
  )
}

export default TodaysForecast
