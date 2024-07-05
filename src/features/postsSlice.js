import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";


export const postFetch = createAsyncThunk("posts/fetchPost", async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/posts")
    return res.data
})

const postsSlice = createSlice({
    name: "Posts",
    initialState: {
        isLoading: false,
        posts: [],
        error: null,
    },
    reducers: {
        deletePost: (state, action) => {
            // console.log(action.payload)
            state.posts = state.posts.filter((post) => post.id !== action.payload)
        }, 
        addPost : (state,action)=> { 
            
        }
    },
    extraReducers: (builder) => {
        builder.addCase(postFetch.pending, (state) => {
            state.isLoading = true;
        })
        builder.addCase(postFetch.fulfilled, (state, action) => {
            state.isLoading = false;
            state.posts = action.payload
        })
        builder.addCase(postFetch.rejected, (state,action) => {
            state.isLoading = false;
            state.posts = [],
            state.error = action.error.message
        })
    }
})

export default postsSlice.reducer
export const { deletePost } = postsSlice.actions