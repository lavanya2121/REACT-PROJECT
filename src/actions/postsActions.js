import axios from 'axios'

export const startGetPosts=()=>{
    return(dispatch)=>{
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response=>{
            //console.log(response.data)
            const posts=response.data
            dispatch(setPosts(posts))

        })
    }
}

export const setPosts=(posts)=>{
    return{ type:'SET_POSTS',payload:posts}
}