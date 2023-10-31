import React, { useState } from 'react'
import Axios from 'axios'
import Output from './Output';

const key = '74dbc13e07bcdaecc76954b7e07637a3';


const Header = () => {
    const [city, setCity] = useState("");
    const [data, setData] = useState();
    const fetchDate = async () => {
        try {
            const response = await Axios.get(`https://api.openweathermap.org/data/2.5/weather?units=metric&q=${city}&appid=${key}`);
            setData(response.data);
        }
        catch (err) {
            alert('Please enter the city Name')
        }
    }
    return (
        <div className='App'>
            <h1 className='title'>Weather App</h1>
            <div className='input-container'>
                <input type="text"
                    className='input'
                    value={city}
                    onChange={e => setCity(e.target.value)}
                    placeholder='Enter your city Name'
                />

                <button onClick={fetchDate}>check</button>


            </div>
            <div>
                <Output
                    data={data}
                />
            </div>

        </div>
    )
}

export default Header