import React, { useState } from 'react';
import Axios from 'axios';

function Form(props) {
    // const [origin, origin] = useState('')
    // const [destination, setDestination] = useState('')
    const [request, setRequest] = useState()
    const { setRoute } = props;

    const handleChange = e => {
        setRequest({
            ...request,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async(e) => {
        e.preventDefault()
        try {
            const res = await Axios.post('https://subway-graph-api-heroku.herokuapp.com/route', request)
            console.log(res)
            setRoute(res.data[0])
        }
        catch(err) {
            console.log(err)
        }
    }
    
    return (
        <form 
        onChange={handleChange}
        onSubmit={handleSubmit}
        >
            <input 
            placeholder='Origin'
            name='origin'
            ></input>

            <input 
            placeholder='Destination'
            name='destination'
            ></input>

        <button type='submit'>Route</button>
        <button type='reset'>Clear</button>
            
        </form>
    );
}

export default Form;