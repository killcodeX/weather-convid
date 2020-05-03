import React, { useState, useEffect } from 'react';
import Nav from '../nav';
import './weather.css';
import humd from './atmospheric.png';

 
export default function Weather() {
    // hooks to store data
    const [location, setLocation] = useState('');
    const [weather_data, setWeather_data] = useState('');
        // {
        //     "coord":{
        //        "lon":77.6,
        //        "lat":12.98
        //     },
        //     "weather":[
        //        {
        //           "id":802,
        //           "main":"Clouds",
        //           "description":"scattered clouds",
        //           "icon":"03d"
        //        }
        //     ],
        //     "base":"stations",
        //     "main":{
        //        "temp":305.9,
        //        "feels_like":305.63,
        //        "temp_min":304.82,
        //        "temp_max":307.15,
        //        "pressure":1010,
        //        "humidity":34
        //     },
        //     "visibility":6000,
        //     "wind":{
        //        "speed":2.6,
        //        "deg":170
        //     },
        //     "clouds":{
        //        "all":40
        //     },
        //     "dt":1588505416,
        //     "sys":{
        //        "type":1,
        //        "id":9205,
        //        "country":"IN",
        //        "sunrise":1588465676,
        //        "sunset":1588511091
        //     },
        //     "timezone":19800,
        //     "id":1277333,
        //     "name":"Bengaluru",
        //     "cod":200
        //  }

    useEffect(() => {
        console.log(location);
        getapi();
      }, [location]);

    function getapi(){
            
            // // api link
            const weatherURL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&appid=bd42ab78cf92b437fe256adfd646dbd0`;
    
            fetch(weatherURL)
             .then( (response) => {
                return response.json()
            }).then( (json) => {
                setWeather_data(json);
            });
    }
    

    return (
        <div>
            <Nav/>
            <section className="section" id="weather">
                <div className="container">
                    <div class="field drop">
                        <div class="control">
                            <div class="select">
                                <select value={location} onChange={e => setLocation(e.target.value)}>
                                    <option value="">City</option>
                                    <option value="Bengaluru">Bengaluru</option>
                                    <option value="London">London</option>
                                    <option value="Delhi">Delhi</option>
                                    <option value="Tokyo">Tokyo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="date">
                            <p>{new Date().toString().split(' ')[2] + ' ' + new Date().toString().split(' ')[1]} <i class="fas fa-arrow-right"></i></p>
                        </div>
                        <div className="city">
                            <p>{weather_data.name ? weather_data.name : '' }</p>
                        </div>
                    </div>
                    <div className="columns has-text-centered is-vcentered weather-display">
                        <div className="column">
                            <div className="temp">
                                <p>{ weather_data.name ? Math.floor(weather_data.main.temp-273) : ''}°c</p>
                                <span>Feels like { weather_data.name ? Math.floor(weather_data.main.feels_like-273) : ''}°c</span>
                            </div>
                        </div>
                        <div className="column">
                            <div className="humid">
                                <span><i class="fas fa-cloud-rain"></i> Rain</span>
                                <p className="has-text-centered">{weather_data.name ? weather_data.wind.speed : ''} %</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="humid">
                                <span><i class="fas fa-wind"></i> Wind</span>
                                <p className="has-text-centered">{weather_data.name ? weather_data.wind.speed : ''} km/h</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="humid">
                                <span><img  className="ico" src={humd}/> Humidity</span>
                                <p className="has-text-centered">{weather_data.name ? weather_data.main.humidity : ''}</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
