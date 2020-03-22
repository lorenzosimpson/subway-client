import React from 'react';

function RoutePath(props) {
    const { route, transfers } = props;

    return (
        <div className='route-path'>
            {
                route.map(station => (
                    <>
                        
                        {station == route[0] && 
                        <h4 id='depart-arrive'>Depart</h4>
                        }
                        {station == route[route.length -1] &&
                        <h4 id='depart-arrive'>Arrive</h4>
                        }
                        <div className='result-station'><span class="material-icons" id='subway'>
                        subway
                        </span>
                            {station.toUpperCase()}</div>
                        
                        {station !== route[route.length - 1] && // removes arrow from last station
                        <span class="material-icons">
                        arrow_downward
                        </span>
                        }
                    </>
                ))

            }
            <p>{transfers}</p>
        </div>
    );
}

export default RoutePath;