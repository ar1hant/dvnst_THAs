import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import {useState} from 'react';
// import {useEffect} from 'react';

function App(){
  const [place, setPlace] = useState("");
  const [placeData, setData] = useState({});

  const updatePlaceData = () => {
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=7574597f23ff40de85d132005210308&q=${place}&days=3`)
    .then(res => res.json())
    .then((data) => {
      setData(data);
      console.log(data);
      setPlace("");
    });
  }

  return(
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-12 form">
            <input type="text" value={place} placeholder="City Name" onChange={(e) => {
              setPlace(e.target.value);
            }}/>
            <button className="btn box" onClick={updatePlaceData}>Go</button>
          </div>
          <div className="col-12 weather">
            <div className="card">
              {
                placeData.location ?
                <div className="container"> 
                  <div className="row">
                    <div className="col-4 name_styling_l">
                      <div>{placeData.location.name}</div>
                      <div>{placeData.location.country}</div>
                    </div>
                    <div className="col-4">
                      <img src={placeData.current.condition.icon} alt="cloud" />
                    </div>
                    <div className="col-4 name_styling_r">
                      <div>{placeData.current.temp_c}&deg;</div>
                      <div>{placeData.location.country}</div>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-4 name_styling_bottom">
                      <div>TODAY</div>
                      <img src={placeData.forecast.forecastday[0].day.condition.icon} alt="cloud" />
                      <div className="max_temp">{placeData.forecast.forecastday[0].day.maxtemp_c}</div>
                      <div className="min_temp">{placeData.forecast.forecastday[0].day.maxtemp_c}</div>
                    </div>
                    <div className="col-4 name_styling_bottom">
                      <div>TOMMOROW</div>
                     <img src={placeData.forecast.forecastday[1].day.condition.icon} alt="cloud" />
                     <div className="max_temp">{placeData.forecast.forecastday[1].day.maxtemp_c}</div>
                      <div className="min_temp">{placeData.forecast.forecastday[1].day.maxtemp_c}</div>
                    </div>
                    <div className="col-4 name_styling_bottom">
                      <div>DAY AFTER TOM.</div>
                      <img src={placeData.forecast.forecastday[2].day.condition.icon} alt="cloud" />
                      <div className="max_temp">{placeData.forecast.forecastday[2].day.maxtemp_c}</div>
                      <div className="min_temp">{placeData.forecast.forecastday[2].day.maxtemp_c}</div>
                    </div>
                  </div>
                </div>
                : <h2>No Place Found</h2>
              }
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default App;