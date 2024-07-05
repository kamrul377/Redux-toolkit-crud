import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletePost, postFetch } from '../features/postsSlice'

const PostsView = () => {

    useEffect(() => {
        dispatch(postFetch())
    }, [])

    const dispatch = useDispatch()
    const { posts, error, isLoading } = useSelector(state => state.posts)

    if (isLoading) {
        return <h1>
            Loading...
        </h1>
    }


    return (
        <div>
            <h1>Posts</h1>
            <h2> {isLoading}</h2>
            {
                posts?.map((post, i) => {
                    return <div key={i} style={{
                        backgroundColor: post.id % 2 == 0 ? "powderblue" : "pink",
                        margin: "10px 0px",
                        fontSize: "14px",

                    }}>
                        <h2>{post.id}</h2>
                        <h3>{post.title}</h3>
                        <h3>{post.body}</h3>
                        <button onClick={() => dispatch(deletePost(post.id))}>Delete </button>
                    </div>
                })
            }
        </div>
    )
}

export default PostsView