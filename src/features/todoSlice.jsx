import { createSlice } from "@reduxjs/toolkit";


const todoSlice = createSlice({
    name: "Todo",
    initialState: {
        todo: [
            {
                id: 1,
                name: "mango"
            }, {
                id: 2,
                name: "apple"
            }, {
                id: 3,
                name: "orange"
            }
        ]
    },
    reducers: {
        addTodo: (state, action) => {
            const todo = {
                id: action.payload.id,
                name: action.payload.name
            }
            state.todo = [...state.todo, todo]
        },
        deleteTodo: (state, action) => {
            // console.log('delete log')
            state.todo = state.todo.filter((todo) => todo.id !== action.payload)
        },
        updateTodo: (state, action) => {
            // console.log(action.payload)
            const { id, name } = action.payload
            const existingTodo = state.todo.find(todo => todo.id === id);
            if (existingTodo) {
                existingTodo.id = id;
                existingTodo.name = name;
            }
        },
        viewTodo: (state, action) => {
            console.log('view', action.payload)
        }
    },
    
})

export const { addTodo, deleteTodo, updateTodo, viewTodo } = todoSlice.actions
export default todoSlice.reducer