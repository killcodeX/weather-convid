import React, { Component } from 'react';
import Nav from '../nav';
import './weather.css';

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
                        <div class="dropdown">
                            <div class="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu">
                                <span>Dropdown button</span>
                                <span class="icon is-small">
                                    <i class="fas fa-angle-down" aria-hidden="true"></i>
                                </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">Cities</a>
                                    <a class="dropdown-item">Other dropdown it</a>
                                    <a href="#" class="dropdown-item is-active">Active dropdown item</a>
                                    <a href="#" class="dropdown-item">With a divider</a>
                                </div>
                            </div>
                        </div>
                        <div className="date">
                            <p>1 April</p>
                        </div>
                        <div className="columns has-text-centered weather-display">
                            <div className="column">
                                <div className="temp">
                                    <p>Temp</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="rain">
                                    <span><i class="fas fa-cloud-rain"></i>Rain</span>
                                    <p className="has-text-centered">Value</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="wind">
                                    <span><i class="fas fa-wind"></i> Wind</span>
                                    <p className="has-text-centered">Value</p>
                                </div>
                            </div>
                            <div className="column">
                                <div className="humid">
                                    <span> Humidity</span>
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
