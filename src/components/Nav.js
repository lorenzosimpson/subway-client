import React from 'react';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';

function Nav(props) {
    return (
        <div className='nav'>
            <Link className='logo' to='/'>transfer<span id='buddy'>Buddy</span></Link>
        </div>
    );
}

export default Nav;