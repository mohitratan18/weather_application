import "./App.css";
import CurrentWeather from "./Components/CurrentWeather";
import SevenDayForecast from "./Components/SevenDayForecast";
import ForecastState from "./Context/ForecastState";
import Searchstate from "./Context/Searchstate";

function App() {

  return (
    <>
      <ForecastState>
        <Searchstate>
          <div
            className="min-w-full min-h-screen bg-[#0b131e] p-6 md:p-12 md:grid grid-cols-7 gap-12"
            style={{
              gridTemplateColumns: "repeat(auto-fill(min-max(1fr,360px)))",
            }}
          >
            <div className="md:col-span-4">
              <CurrentWeather />
            </div>
            <div className="md:col-span-3">
              <SevenDayForecast/>
            </div>
          </div>
        </Searchstate>
      </ForecastState>
    </>
  );
}

export default App;
