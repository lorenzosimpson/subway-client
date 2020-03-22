import React from 'react';

function RoutePath(props) {
    const { route, transfers } = props;

    return (
        <div className='route-path'>
            <p>{transfers}</p>
            {
                route.map(station => (
                    <>
                        <p>{station.toUpperCase()}</p>

                        {station !== route[route.length - 1] && // removes arrow from last station
                        <span class="material-icons">
                        arrow_downward
                        </span>}
                    </>
                ))

            }
            
        </div>
    );
}

export default RoutePath;