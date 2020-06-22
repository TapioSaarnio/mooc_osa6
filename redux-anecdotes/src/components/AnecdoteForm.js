import React from 'react'
import { useDispatch } from 'react-redux'
import { createAnecdote } from '../reducers/anecdoteReducer'
import { connect } from 'react-redux'
import { setNotificationCreate } from '../reducers/notificationReducer.js'
const AnecdoteForm = (props) => {

    const dispatch = useDispatch()
    
    
    const addAnecdote = async (event) => {
       event.preventDefault()
       const content = event.target.anecdote.value
       event.target.anecdote.value = ''
       console.log('form content')
       console.log(content)
       dispatch(props.createAnecdote(content))
       dispatch(setNotificationCreate(`you created '${content}'`, 5))
      }

    return(

      <div>
      <h2>create new</h2>
      <form onSubmit={addAnecdote}>
        <div><input name="anecdote"/></div>
        <button>create</button>
      </form>
      </div>
    )
}

const mapDispatchToProps = (state) => {
  return {
    createAnecdote
  }
}

const ConnectedAnecdoteForm = connect(mapDispatchToProps)(AnecdoteForm)

export default ConnectedAnecdoteForm