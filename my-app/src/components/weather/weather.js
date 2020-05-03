import React, { Component } from 'react';
import Nav from '../nav';
import './weather.css';
import humd from './atmospheric.png';

// 

export default class weather extends Component {

    componentDidMount = () =>{
        fetch("https://weatherbit-v1-mashape.p.rapidapi.com/current?lang=en&lon=%3Crequired%3E&lat=%3Crequired%3E", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "weatherbit-v1-mashape.p.rapidapi.com",
                "x-rapidapi-key": "cad591884dmsh9083b43b5f826c9p1b7443jsn19c0359bb316"
            }
            })
            .then(response => {
                console.log(response);
            })
            .catch(err => {
                console.log(err);
            });

    }

    render() {
        return (
            <div>
                <Nav/>
                <section className="section" id="weather">
                    <div className="container">
                        <div class="field drop">
                            <div class="control">
                                <div class="select">
                                    <select>
                                        <option>Select dropdown</option>
                                        <option>With options</option>
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
                                    <p>7 c</p>
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
}
