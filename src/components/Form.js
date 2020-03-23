import React, { useState, useEffect } from 'react';
import Axios from 'axios';
import TextField from '@material-ui/core/TextField';
import { makeStyles } from '@material-ui/core/styles';
import DirectionsIcon from '@material-ui/icons/Directions';
import ClearIcon from '@material-ui/icons/Clear';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles(theme => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '100%',

      },
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
    },
    button: {
        width: '100%',
        height: '50px',
        fontSize: '1.2rem',
        color: 'white'
    },
    buttonClear: {
        width: '100%',
        height: '50px',
        fontSize: '1.2rem',
    },
  }));

function Form(props) {
    const [request, setRequest] = useState()
    const [origin, setOrigin] = useState('')
    const [destination, setDestination] = useState('')
    const { setRoute, setTransfers, stations } = props;
    const [originSearchTerm, setOriginSearchTerm] = useState('')
    const [destinationSearchTerm, setDestinationSearchTerm] = useState('')
    const [originResults, setOriginResults] = useState([])
    const [destinationResults, setDestinationResults] = useState([])
    const classes = useStyles()
    
    const handleOriginChange = e => {
        setOriginSearchTerm(`${e.target.value}`)
        console.log(originSearchTerm)
    }

    const handleDestinationChange = e => {
        setDestinationSearchTerm(`${e.target.value}`)
        console.log(destinationSearchTerm)
    }
    
    useEffect(() => {
        setOriginResults(
            !originSearchTerm.length ? [] : stations.filter(s => s.toLowerCase().includes(originSearchTerm.toLowerCase()))
        )
    }, [originSearchTerm])

    useEffect(() => {
        setDestinationResults(
            !destinationSearchTerm.length ? [] : stations.filter(s => s.toLowerCase().includes(destinationSearchTerm.toLowerCase()))
        )
    }, [destinationSearchTerm])


    const handleSubmit = async(e) => {
        e.preventDefault()
        setRequest({
            ...request
        })
        console.log(request)
        try {
            const res = await Axios.post('https://subway-graph-api-heroku.herokuapp.com/route', request)
            console.log(res.data)
            setRoute(res.data[0]) // set the route to the first part of the response object
            setTransfers(res.data[1]) // a string listing the num of transers
            
        }
        catch(err) {
            console.log(err)
        }
    }

    if (!stations.length) {
        return <p>Loading...</p>
    }
    
    return (
        <>
        <form className={classes.root}
        onSubmit={handleSubmit}
        >
            <TextField id='origin'
            label="Origin" 
            color='primary'
            variant="filled"
            name='originSearchTerm'
            onChange={handleOriginChange}
            ></TextField>

            <div>
                {originResults.map(s => (
                   <p className='selection' onClick={() => {
                    setRequest({
                        ...request,
                        origin: s
                    })
                    setOriginResults([])
                    document.getElementById('origin').value = s // sets the form input to the chosen station
                }}>{s}</p>
            ))}
            </div>

            <TextField id='destination'
            label="Destination"
            variant="filled" 
            name='destination'
            color='secondary'
            onChange={handleDestinationChange}
            ></TextField>
            <div>
                {destinationResults.map(s => (
                    <p className='selection' onClick={() => {
                        setRequest({
                            ...request,
                            destination: s
                        })
                        setDestinationResults([])
                        document.getElementById('destination').value = s // sets the form input to the chosen station
                    }}>{s}</p>
                ))}
            </div>

        <Button
            variant="contained"
            type='submit'
            color='primary'
            className={classes.button}
            startIcon={<DirectionsIcon />}
            >Route</Button>

        <Button
            variant="outlined"
            type='reset'
            id='clear'
            className={classes.buttonClear}
            startIcon={<ClearIcon />}
            >Clear</Button>
        
        </form>
        </>
    );
}

export default Form;