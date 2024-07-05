import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./features/counterSlice";
import todoReducer from "./features/todoSlice";
import postReducer from "./features/postsSlice";


const store = configureStore({
    reducer: {
        counter: counterReducer,
        todo: todoReducer, 
        posts: postReducer
    }
})

export default store