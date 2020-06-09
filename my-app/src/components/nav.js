import React from 'react';
import logo from '../logo.png';
import './nav.css';
import {Link} from 'react-router-dom';

const fakeAuthCentralState = {
    isAuthenticated: false,
    authenticate(callback) {
       this.isAuthenticated = true;
       setTimeout(callback, 300);
    },
    signout(callback) {
       this.isAuthenticated = false;
       setTimeout(callback, 300); 
    }
 };

export default function nav() {
    return (
        <div>
            <nav class="navbar" role="navigation" aria-label="main navigation">
                <div class="navbar-brand">
                    <Link to='/'><a class="navbar-item" href='#'>
                    <img src={logo} width="40" height="90"/>
                    </a></Link>

                    <a role="button" class="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="navbarBasicExample">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" class="navbar-menu">
                    <div class="navbar-end">
                        <Link to='/weather'><a class="navbar-item">Weather</a></Link>
                        <Link to='/convid'><a class="navbar-item">Convid</a></Link>
                        {
                            fakeAuthCentralState==true? <Link to='/logout'><a class="navbar-item">Logout</a></Link>
                            : <Link to='/'><a class="navbar-item">Login</a></Link>
                        }
                        <Link to='/register'><a class="navbar-item">Register</a></Link>
                    </div>
                </div>
            </nav>
        </div>
    )
}
