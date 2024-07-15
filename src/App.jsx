import { useState } from 'react'

import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, setValue } from './features/counterSlice'
import Todo from './components/Todo'
import PostsView from './components/PostsView'
import { Route, Routes } from 'react-router-dom'
import TodoDetails from './components/TodoDetails'
import Header from './components/Header'
import Drop from './components/Drop'
import Navbar from './components/Navbar'
import { Toaster } from 'react-hot-toast'

function App() {

  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>

      <Navbar />

      <Routes>

        <Route path='/' element={<Todo />} />
        <Route path='/:id' element={<TodoDetails />} />
      </Routes>

      {/* <PostsView /> */}

      <Toaster
        position="top-right"
        reverseOrder={false}
      />
    </>
  )
}

export default App
