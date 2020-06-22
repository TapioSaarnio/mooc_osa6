import React from 'react'
import { useDispatch } from 'react-redux'


const Filter = () => {

    const dispatch = useDispatch()

    const handleChangeFilter = (event) => {

        
        event.preventDefault()

        console.log(event.target.value)
       
        send({type: 'SET_FILTER', filter: event.target.value})

    }

    const send = (fil) =>{
        dispatch(fil)        
    }

    return(
        <p>Filter
        <input onChange = {handleChangeFilter}  name='filter'/>
        </p>
    )

}

export default Filter