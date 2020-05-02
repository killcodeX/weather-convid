import React, { Component } from 'react';
import './weather.css';

// 

export default class weather extends Component {
    render() {
        return (
            <div>
                <section className="section" id="weather">
                    <div className="container">
                        <div className="dropdown is-active is-right">
                            <div className="dropdown-trigger">
                                <button class="button" aria-haspopup="true" aria-controls="dropdown-menu2">
                                    <span>Content</span>
                                    <span class="icon is-small">
                                        <i class="fas fa-angle-down" aria-hidden="true"></i>
                                    </span>
                                </button>
                            </div>
                            <div class="dropdown-menu" id="dropdown-menu2" role="menu">
                                <div class="dropdown-content">
                                    <a href="#" class="dropdown-item">Overview</a>
                                    <a href="#" class="dropdown-item">Overview</a>
                                    <a href="#" class="dropdown-item">Overview</a>
                                    <a href="#" class="dropdown-item">Overview</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}
