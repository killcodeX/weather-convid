import React, { useState } from 'react';
import './login.css';

function Login (props) {
    
    return (
        <div>
            <section className="section" id="login">
                <div className="container">
                    <div className="box">
                        <div className="columns">
                            <div className="column">
                                <img className="sign-img" src={require('./signin-image.webp')}/>
                                <a className="nacc" href="#">Create a new account</a>
                            </div>
                            <div className="column">
                                <h1 className="title"> Sign Up</h1>
                                <form>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="text" placeholder="Your Name"
                                            />
                                            <span className="icon is-small is-left">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="password" placeholder="Password"
                                            />
                                            <span className="icon is-small is-left">
                                                <i class="fas fa-lock"></i>
                                            </span>
                                        </p>
                                        <div className="control">
                                            <label className="checkbox">
                                                <input type="checkbox"/> Remember me
                                            </label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-link" onClick={()=>this.login()}>Submit</button>
                                        </div>
                                    </div>
                                </form>
                                <div className="social">
                                    <p>Or login with <i class="fab fa-facebook-square"></i><i class="fab fa-twitter-square"></i><i class="fab fa-google-plus-square"></i></p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Login;
