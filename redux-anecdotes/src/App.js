import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import AnecdoteForm from './components/AnecdoteForm.js'
import AnecdoteList from './components/AnecdoteList.js'
import Notification from './components/Notification.js'
import Filter from './components/Filter.js'
import { initializeAnecdotes } from './reducers/anecdoteReducer.js'

const App = () => {
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(initializeAnecdotes())

  },[dispatch])
  

  return (
    <div>
      <Notification/>
      <Filter/>
      <AnecdoteList/>
      <AnecdoteForm/>

      </div>
  )
}

export default App