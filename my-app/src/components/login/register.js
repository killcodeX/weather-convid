import React, { useState } from 'react';
import './register.css';

function Register (props) {

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [checkb, setCheckb] = useState('false');

    const handleSubmit =(e) =>{
        e.preventDefault();
        // alert(`Submitting Name ${name}`);
        // alert(`Submitting Email ${email}`);
        // alert(`Submitting Passowrd ${password}`);
        // alert(`Submitting Cpassword ${cpassword}`);
        alert(`Submitting Checkbox ${checkb}`);
    }

    return (
        <div>
            <section className="section" id="register">
                <div className="container">
                    <div className="box">
                        <div className="columns">
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
                                            <input className="input" type="text" placeholder="Your Email"
                                            value={email} onChange={e => setEmail(e.target.value)}/>
                                            <span className="icon is-small is-left">
                                                <i class="fas fa-envelope"></i>
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
                                    </div>
                                    <div className="field">
                                        <p className="control has-icons-left">
                                            <input className="input" type="password" placeholder="Repeat your Password"
                                            value={cpassword} onChange={e => setCpassword(e.target.value)}/>
                                            <span className="icon is-small is-left">
                                                <i class="fas fa-lock"></i>
                                            </span>
                                        </p>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <label className="checkbox">
                                                <input type="checkbox" onChange={e=> setCheckb(e.target.checked)} /> I agree all the statements in <a href="#">Terms of service</a>
                                            </label>
                                        </div>
                                    </div>
                                    <div className="field">
                                        <div className="control">
                                            <button className="button is-link" type='submit'>Register</button>
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



export default Register;
