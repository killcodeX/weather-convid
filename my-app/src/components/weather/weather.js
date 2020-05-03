import React, { useState, useEffect } from 'react';
import Nav from '../nav';
import './weather.css';
import humd from './atmospheric.png';

 
export default function Weather() {
    // hooks to store data
    const [weather_data, setWeather_data] = useState('');
    function getapi(){
            // api link
            const weatherURL = `http://api.openweathermap.org/data/2.5/weather?id=London&appid=6ed85342377d311e711fafea66d4b072`;
    
            fetch(weatherURL)
             .then( (response) => {
                return response.json()
            }).then( (json) => {
                setWeather_data(json);
                console.log(weather_data)
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
                                <select>
                                    <option>New York</option>
                                    <option>London</option>
                                    <option>Delhi</option>
                                    <option>Japan</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="details">
                        <div className="date">
                            <p>1 April <i class="fas fa-arrow-right"></i></p>
                        </div>
                        <div className="city">
                            <p>Ranchi</p>
                        </div>
                    </div>
                    <div className="columns has-text-centered weather-display">
                        <div className="column">
                            <div className="temp">
                                <p>7°c</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="humid">
                                <span><i class="fas fa-cloud-rain"></i> Rain</span>
                                <p className="has-text-centered">Value</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="humid">
                                <span><i class="fas fa-wind"></i> Wind</span>
                                <p className="has-text-centered">Value</p>
                            </div>
                        </div>
                        <div className="column">
                            <div className="humid">
                                <span><img  className="ico" src={humd}/> Humidity</span>
                                <p className="has-text-centered">Value</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
