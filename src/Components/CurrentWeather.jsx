/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import axios from "axios";
import React, { useContext, useEffect, useRef, useState } from "react";
import CityWeather from "./CityWeather";
import TodaysForecast from "./TodaysForecast";
import AirConditions from "./AirConditions";
import ForecastContext from "../Context/ForecastContext";
import Searchcontext from "../Context/Searchcontext";

const CurrentWeather = () => {
  const [loading, setloading] = useState(false);
  const [alert, setalert] = useState(false);
  const [city, setcity] = useState("jeypore");
  const [currentcity, setcurrentcity] = useState({});
  const [conditions, setconditions] = useState({});
  const { update, sevenforecast } = useContext(ForecastContext);
  const { search, addsearch, deleteitem, clearsearch } =
    useContext(Searchcontext);
  const [threehours, setthreehours] = useState([]);
  const [onFocus, setonFocus] = useState(false);
  const api = import.meta.env.VITE_APIKEY;
  const input = useRef();

  useEffect(() => {
    getweather();
  }, []);

  const getweather = async (e) => {
    e?.preventDefault();
    try {
      setloading(true);
      const { data } = await axios.get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=metric&appid=${api}`
      );
      setloading(false);
      setcity("");
      setthreehours(data.list);
      const dummy = {
        name: city ?? "",
        temp: data.list[0].main.temp,
        rain: Math.round(data.list[0].pop * 100),
        icon: data.list[0].weather[0].icon,
      };
      const AirCondition = {
        realfeel: data.list[0].main.feels_like,
        wind: data.list[0].wind.speed,
        chancesofrain: Math.round(data.list[0].pop * 100),
        tempmax: data.list[0].main.temp_max,
      };
      setconditions(AirCondition);
      setcurrentcity(dummy);
      const dataa = data.list.filter((item, index) => index % 8 === 0);
      update(dataa);
      return true;
    } catch (error) {
      setloading(false);
      return false;
    }
  };

  return (
    <div className="w-full h-full flex flex-col">
      {alert && (
        <div role="alert" className="alert alert-error">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 shrink-0 stroke-current transition-all"
            fill="none"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span>Please enter a valid location</span>
        </div>
      )}

      <div>
        <div className="relative">
          {/* <form> */}
          <input
            ref={input}
            onKeyDown={async (e) => {
              if (e.key == "Enter") {
                const flag = await getweather();
                console.log(flag);

                if (flag) {
                  addsearch(city);
                } else {
                  setalert(true);
                  setTimeout(() => {
                    setalert(false)
                  },1200);
                  alert("Please enter valid city");
                }
                input.current.blur();
              }
            }}
            type="text"
            placeholder="Search for cities"
            className="input input-bordered w-full text-white"
            onChange={(e) => {
              setcity(e.target.value);
            }}
            onFocus={() => {
              setonFocus(true);
            }}
            onBlur={() =>
              setTimeout(() => {
                setonFocus(false);
              }, 500)
            }
            value={city}
          />
          {/* </form> */}
          <div
            className={`absolute bottom-0 w-full max-h-[300px] bg-[#202b3b] shadow-lg overflow-auto translate-y-[calc(100%+15px)] opacity-1 transition-all ${
              onFocus ? "block" : "hidden"
            } rounded-lg`}
          >
            {search?.map((item, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row justify-between p-2 gap-2"
                >
                  <p>{item}</p>
                  <button onClick={() => deleteitem(item)}>X</button>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {loading ? (
        <span className="loading loading-spinner loading-lg self-center m-5"></span>
      ) : (
        <>
          <CityWeather currentcity={currentcity} />
          <TodaysForecast threehours={threehours} />
          <AirConditions conditions={conditions} />
        </>
      )}
    </div>
  );
};

export default CurrentWeather;
