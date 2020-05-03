import React, {useState} from 'react';
import Nav from '../nav';
import stateData from './state_wise_data.csv';
import './convid.css';

function Convid() {
    // hooks to store state names
    const [city, setCity] = useState('');

    // cvs reader
    // const handleForce = (data, fileInfo) => console.log(data, fileInfo);

    const handleSubmit =(e) =>{
        e.preventDefault();
        console.log(city);
    }

    return (
        <div>
            <Nav/>
            <section className="section" id="convid">
                <div className="container">
                    <h1 className="has-text-centered">Total number of cases India</h1>
                    <h1 className="has-text-centered">is: value</h1>
                    <h2 className="has-text-centered">Here are the total cases in each state you can search it</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="text" placeholder="States"
                                value={city} onChange={e => setCity(e.target.value)}/>
                                <span class="icon is-small is-left">
                                    <i class="fas fa-search-location"></i>
                                </span>
                            </p>
                        </div>
                    </form>
                </div>
            </section>
        </div>
    )
}

export default Convid;
