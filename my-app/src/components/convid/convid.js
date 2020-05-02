import React, {useState} from 'react';
import './convid.css';

function Convid() {

    const [city, setCity] = useState('');

    const handleSubmit =(e) =>{
        e.preventDefault();
    }

    return (
        <div>
            <section className="section" id="convid">
                <div className="container">
                    <h1 className="has-text-centered">Total number of cases India</h1>
                    <h1 className="has-text-centered">is: value</h1>
                    <h2 className="has-text-centered">Here are the total cases in each state you can serch it</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="field">
                            <p class="control has-icons-left has-icons-right">
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
