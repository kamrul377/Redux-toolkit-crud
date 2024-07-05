import React from 'react'
import { useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

const TodoDetails = () => {

    const { id } = useParams()
    const navigate = useNavigate()


    // const todo = useSelector(state => state.todo.todo.find(todo => todo.id === paramsId))
    const { todo } = useSelector(state => state.todo)
    const singleTodo = todo.find(todo => todo.id === id)


    // console.log(todo)

    return (
        <div>TodoDetails {id}</div>
    )
}

export default TodoDetails