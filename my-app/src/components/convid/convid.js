import React, {useState,  useEffect} from 'react';
import Nav from '../nav';
import * as d3 from 'd3';
import stateData from './state_wise_data.csv';
import './convid.css';

function Convid() {
    // hooks to store state names
    const [location, setLocation] = useState('');
    const [sdata, setSdata] = useState([]);
    const [total, setTotal] = useState(0);
    const [locationData, setLocationData] = useState({
        State: "", 
        Confirmed: "", 
        Recovered: "", 
        Deaths: "", 
        Active: ""
    });

    // cvs reader
    useEffect(() => {
        // code to run on component mount
        d3.csv(stateData, function(data) { 
            let dd =sdata;
            dd.push(data)
            setSdata(dd);
        }).then(function(){
            console.log(sdata);
            setTotal(sdata[0].Confirmed);
        });
      }, []);

    const handleSubmit =(e) =>{
        e.preventDefault();
        let newarr = sdata.filter(s => s.State.toLowerCase() == location.toLowerCase())[0];
        if(newarr){
            setLocationData(newarr);
        }
        else{
            alert('Invalid state name');
        }
    }

    return (
        <div>
            <Nav/>
            <section className="section" id="convid">
                <div className="container">
                    <h1 className="has-text-centered">Total number of cases India</h1>
                    <h1 className="has-text-centered">is: {total}</h1>
                    <h2 className="has-text-centered">Here are the total cases in each state you can search it</h2>
                    <form onSubmit={handleSubmit}>
                        <div class="field">
                            <p class="control has-icons-left">
                                <input class="input" type="text" placeholder="States"
                                value={location} onChange={e => setLocation(e.target.value)}/>
                                {/* <span class="icon is-small is-left">
                                    <i class="fas fa-search-location"></i>
                                </span> */}
                            </p>
                        </div>
                    </form>
                    {locationData.State != ''? 
                    <div className="state-display">
                        <div className='columns has-text-centered'>
                            <div className='column' id='st'>
                            <p className="has-text-centered">State Name: <span>{locationData.State}</span></p>
                            </div>
                        </div>
                        <div className='columns has-text-centered' id='st-details'>
                            <div className='column'>
                                <h4>Confirmed</h4>
                                <p>{locationData.Confirmed}</p>
                            </div>
                            <div className='column'>
                                <h4>Active</h4>
                                <p>{locationData.Active}</p>
                            </div>
                            <div className='column'>
                                <h4>Receovered</h4>
                                <p>{locationData.Recovered}</p>
                            </div>
                            <div className='column'>
                                <h4>Deaths</h4>
                                <p>{locationData.Deaths}</p>
                            </div>
                        </div>
                    </div>:null}
                </div>
            </section>
        </div>
    )
}

export default Convid;
