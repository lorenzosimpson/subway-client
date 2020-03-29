import React from 'react';
import Typography from '@material-ui/core/Typography';

function Nav(props) {
    return (
        <div className='nav'>
            <Typography variant='h4'>transfer<span id='buddy'>Buddy</span></Typography>
        </div>
    );
}

export default Nav;