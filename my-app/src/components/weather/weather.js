import React, { Component } from 'react';
import './weather.css';

// 

export default class weather extends Component {
    render() {
        return (
            <div>
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
                                    <a href="#" class="dropdown-item">Dropdown item</a>
                                    <a class="dropdown-item">Other dropdown it</a>
                                    <a href="#" class="dropdown-item is-active">Active dropdown item</a>
                                    <a href="#" class="dropdown-item">With a divider</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
