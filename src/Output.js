import React from 'react'

const Output = ({ data }) => {
    console.log(data);
    return (
        <div>
            {
                data && (
                    <div className='container'>
                        <h1 className='city-name'>{data.name},{data.sys.country}</h1>
                        <div className='weather-info'>
                            <div className='temp'>{Math.round(data.main.temp)}°c</div>
                            <div className='coordinated'>
                                <div>Lat - {data.coord.lat}</div>
                                <div>Lon - {data.coord.lon}</div>

                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    )
}

export default Output