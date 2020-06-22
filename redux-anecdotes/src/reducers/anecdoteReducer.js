import AnecdoteService from "../services/AnecdoteService"

/*
const anecdotesAtStart = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]
*/ 


/*
const asObject = (anecdote) => {
  return {
    content: anecdote,
    id: getId(),
    votes: 0
  }
}
*/

//const initialState = anecdotesAtStart.map(asObject)


const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)

  switch(action.type) {
    case 'VOTE': 
    const id = action.data.id
    const anecdoteToVote = state.find(n => n.id ===id)
    const votedAnecdote = {
      ...anecdoteToVote,
      votes: anecdoteToVote.votes + 1
    }
    const state2 = state.map(anecdote => 
      anecdote.id !== id ? anecdote : votedAnecdote)

     return state2.sort((a, b) => b.votes - a.votes)
       
    
    case 'NEW_ANECDOTE':

      console.log(action)

      return [...state, action.newAnecdote]

    case 'INIT_NOTES':
       return action.data

     default: return state

    }
}

export const createAnecdote = content => {

  return async dispatch => {
    const newAnecdote = await AnecdoteService.createNew(content)
    console.log('newAnecdoteReducer')
    console.log(newAnecdote)
    dispatch({
      type: 'NEW_ANECDOTE',
      newAnecdote,
    })
  }

}

export const voteAnecdote = id => {
  
    return async dispatch => {
      AnecdoteService.vote(id.id)
      dispatch({
        type: 'VOTE',
        data: id,
      })
    }
  
}


export const initializeAnecdotes = () => {

  return async dispatch => {
    const anecdotes = await AnecdoteService.getAll()
    dispatch({
      type: 'INIT_NOTES',
      data: anecdotes,
    })
  }
}


export default reducer