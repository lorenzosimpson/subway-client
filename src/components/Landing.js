import React from 'react';
import main from '../images/main.jpg';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    button: {
        width: '100%',
        height: '50px',
        fontSize: '1.5rem',
        color: 'white',
        background: '#6d78bd',
        minWidth: '140px',
        '&:hover': {
            background: '#a4b0fc'
        }
    }
  }));

function Landing(props) {
    const classes = useStyles()
    return (
        <div className='landing'>
            <p id='main-head'>The subway is tricky</p>
            <img id='main-img' src={main} alt='family looking at map'></img>
            <a className='attr' href="https://www.vecteezy.com/free-vector/person-with-map">Person With Map Vectors by Vecteezy</a>
            <p id='sub-head'>We'll navigate it together</p>
            <Button 
            id='go-btn' 
            color='primary' 
            className={classes.button}
            onClick={() => props.history.push('/route')}
            >Let's Go</Button>
        </div>
    );
} 

export default Landing;