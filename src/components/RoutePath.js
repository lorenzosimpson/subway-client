import React from 'react';

function RoutePath(props) {
    const { route, transfers } = props;
    

    return (
        <div className='route-path'>
            {
                route.map(station => (
                    <>
                        {station === route[0] && 
                        <div className='depart-transfer-blk'>
                        <h4 id='depart-arrive'>Depart</h4>
                        <p id='transfers'>{transfers}</p>
                        </div>
                        }
                        {station === route[route.length -1] &&
                        <h4 id='depart-arrive'>Arrive</h4>
                        }
                        <div className='result-station'><span class="material-icons" id='subway'>
                        subway
                        </span>
                            {/* capitalize each word */}
                            {
                                <>
                                {station.split(' ').map(w => w.replace(w[0], w[0].toUpperCase())).join(' ')}
                                {station !== route[0] && station !== route[route.length -1] && 
                                <p className='transfer-flag'>Transfer</p>
                            }
                                </>
                            }</div>
                        
                        {station !== route[route.length - 1] && // removes arrow from last station
                        <span class="material-icons" id='arrow'>
                        arrow_downward
                        </span>
                        }
                    </>
                ))

            }
        </div>
    );
}

export default RoutePath;