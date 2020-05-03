import React, { useState, useEffect } from 'react';
import {
    Redirect, useHistory
  } from "react-router-dom";
import './login.css';
import Nav from '../nav';

function Login () {

    var history = useHistory();
    // hooks for validation
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [data, setData] = useState('');

    useEffect(() => {
        // code to run on component mount
        fetch("https://sheetsu.com/apis/v1.0su/ac25abd2d8c3")
            .then( (response) => {
                return response.json()
            }).then( (json) => {
                setData(json);
            });
      }, []);

      const validateForm = () =>{
        var bool = false;
        if(name == ''){
            alert('please enter your name');
            return bool;
        }
        else if (password == ''){
            alert("please enter password")
            return bool;
        }
        return !bool;
      }
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(validateForm()){
            var log_name = JSON.stringify(data);
            console.log(log_name);
            var current_user = data.filter(row => row.name == name )[0];
            if(current_user){
                console.log('user Exists');
                if(current_user.password == password){
                    history.push('/convid');
                }
                else{
                    alert('password is wrong');
                }
            } else {
                alert('invalid user')
            }
        }
    };


        
    return (
        <div>
            <Nav/>
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
                                <form onSubmit={handleSubmit}>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="text" placeholder="Your Name"
                                            value={name} onChange={e => setName(e.target.value)}/>
                                            <span className="icon is-small is-left">
                                                <i class="fas fa-user"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="password" placeholder="Password"
                                            value={password} onChange={e => setPassword(e.target.value)}/>
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
                                            <button className="button is-link">Submit</button>
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
