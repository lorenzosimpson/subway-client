import React from 'react';

function RoutePath(props) {
    const { route } = props;

    return (
        <div>
            {
                route.map(station => (
                    <p>{station}</p>
                ))
            }
        </div>
    );
}

export default RoutePath;