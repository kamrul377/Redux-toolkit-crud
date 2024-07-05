import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useDispatch, useSelector } from 'react-redux'
import { decrement, increment, reset, setValue } from './features/counterSlice'
import Todo from './components/Todo'
import PostsView from './components/PostsView'
import { Route, Routes } from 'react-router-dom'
import TodoDetails from './components/TodoDetails'

function App() {

  const { count } = useSelector(state => state.counter)
  const dispatch = useDispatch()

  return (
    <>
      {/* <h1>Count : {count} </h1>
      <button onClick={() => dispatch(increment())}>increment</button>
      <button onClick={() => dispatch(decrement())}>decrement</button>
      <button onClick={() => dispatch(reset())}>reset</button>
      <button onClick={() => dispatch(setValue(40))}>ADD 50</button>
      <div style={{
        width: `${count}%`,
        backgroundColor: "yellow",
        margin: "40px"
      }}>
        {count} %
      </div> */}
      <Routes>

        <Route path='/' element={<Todo />} />
        <Route path='/:id' element={<TodoDetails />} />
      </Routes>

      {/* <PostsView /> */}
    </>
  )
}

export default App
