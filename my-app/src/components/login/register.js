import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './register.css';

class Register extends Component {
    register(){
        alert('login called');
    }
    render() {
        return (
            <div>
                <section className="section" id="register">
                    <div className="container">
                        <div className="box">
                            <div className="columns">
                                <div className="column">
                                <h1 className="title"> Sign Up</h1>
                                    <form>
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="text" placeholder="Your Name"/>
                                                <span className="icon is-small is-left">
                                                    <i class="fas fa-user"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="text" placeholder="Your Email"/>
                                                <span className="icon is-small is-left">
                                                    <i class="fas fa-envelope"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="password" placeholder="Password"/>
                                                <span className="icon is-small is-left">
                                                    <i class="fas fa-lock"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <p className="control has-icons-left">
                                                <input className="input" type="password" placeholder="Repeat your Password"/>
                                                <span className="icon is-small is-left">
                                                    <i class="fas fa-lock"></i>
                                                </span>
                                            </p>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <label className="checkbox">
                                                    <input type="checkbox"/> I agree all the statements in <a href="#">Terms of service</a>
                                                </label>
                                            </div>
                                        </div>
                                        <div className="field">
                                            <div className="control">
                                                <button className="button is-link" onClick={()=>this.register()}>Register</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div className="column">
                                    <img className="reg-img" src={require('./signup-image.webp')}/>
                                    <a  className="reg" href="#">I am already a member</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

Register.propTypes = {
    name: PropTypes.string
};

export default Register;
