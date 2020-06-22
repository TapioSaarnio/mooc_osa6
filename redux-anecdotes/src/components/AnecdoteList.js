import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import { setNotificationVote } from '../reducers/notificationReducer'
const AnecdoteList = () => {

    const dispatch = useDispatch()
    let anecdotes = useSelector(state => state.anecdotes)
    let filter = useSelector(state => state.filter)

    if(filter === ''){
      console.log('moi')
      console.log('ANECDOTES')
      console.log(anecdotes)
  
    } else{
      anecdotes = anecdotes.filter(anec=> anec.content.toString().toUpperCase().startsWith(filter.toString().toUpperCase()))
    }

    const vote = (id, content) => {

        
        dispatch(voteAnecdote({id}))
        dispatch(setNotificationVote(`you voted '${content}'`, 5))
        /*
        dispatch({
            type: 'SET_NOTIFICATIONS',
            notification: message
        })

        setTimeout(() => {

            const message = ''
            dispatch({
                type: 'SET_NOTIFICATIONS',
                notification: message
            })
    
        }, 5000)

      }
      */
    }

    return(
       <div>
      <h2>Anecdotes</h2>
      {anecdotes.map(anecdote =>
        <div key={anecdote.id}>
          <div>
            {anecdote.content}
          </div>
          <div>
            has {anecdote.votes}
            <button onClick={() => vote(anecdote.id, anecdote.content)}>vote</button>
          </div>
        </div>
      )}
      </div>
    )

}

export default AnecdoteList