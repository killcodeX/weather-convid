import React, { useState, useEffect } from 'react';
import './register.css';

// dtatabase api
// const SPREADHEET_ID = '1j8CwAzsUhVYNM3C1f3C1NZhV3JFot22FdU-Qkvo_hG0';
// const CLIENT_ID =  '828401526522-tgtqqhkcvbkm87inge2kbt93stl3ro5e.apps.googleusercontent.com';
// const API_KEY = 'AIzaSyDyRXFUYL5LGp0zdxfIAZ9QxVV643yhmUI';
// const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

function Register () {

    // for api
    // useEffect(() => {
    //     // code to run on component mount
    //     window.gapi.load('client:auth2', initClient); 
    //   }, [])


    //   initClient =()=> { //provide the authentication credentials you set up in the Google developer console
    //     gapi.client.init({
    //       'apiKey': API_KEY,
    //       'clientId': CLIENT_ID,
    //       'scope': SCOPE,
    //       'discoveryDocs': ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    //     }).then(()=> {
    //       gapi.auth2.getAuthInstance().isSignedIn.listen(updateSignInStatus); //add a function called `updateSignInStatus` if you want to do something once a user is logged in with Google
    //       updateSignInStatus(gapi.auth2.getAuthInstance().isSignedIn.get());
    //     });
    //   }
    // hooks for validation
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [cpassword, setCpassword] = useState('');
    const [checkb, setCheckb] = useState('false');

    const validateForm = () =>{
        var bool = false;
        if(name == ''){
            alert('please enter your name');
            return bool;
        }
        else if((email == '') || (typeof email !== "undefined")){
                let lastAtPos = email.lastIndexOf('@');
                let lastDotPos = email.lastIndexOf('.');
     
                if (!(lastAtPos < lastDotPos && lastAtPos > 0 && email.indexOf('@@') == -1 && lastDotPos > 2 && (email.length - lastDotPos) > 2)) {
                   alert("Email is not valid");
            }  
        }
        else if (password == ''){
            alert("please enter password")
            return bool;
        }
        else if (password != cpassword){
            alert("password dosen't match")
            return (bool);
        }
        else if (checkb == false){
            alert("please checkin the checkbox");
            return bool;
        }
    }
    const handleSubmit =(e) =>{
        e.preventDefault();
        if(validateForm() == false){
            alert('this not works');
        }
        else{
            let data = {
                name: name,
                email: email,
                password: password,
                cpassword: cpassword
            };
            // alert(JSON.stringify(data));
            fetch("https://sheetsu.com/apis/v1.0su/ac25abd2d8c3", {
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: "POST",
                body: JSON.stringify(data)
                }).then( (response) => {
                    return response.json()
                }).then( (json) => {
                    console.log(json);
                });
        }
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
