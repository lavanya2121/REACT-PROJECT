import React from 'react'
import {Link } from 'react-router-dom'
import {connect} from 'react-redux'

function PostShow(props){
    console.log(props)
    return(
        <div>
            {
                props.post ?(
                    <div>
                        <h2>{props.post.title}</h2>
                        <h2>{props.post.body}</h2>
                        <Link to="/posts">back</Link>
                    </div>

                ):(
                    <p>LOADING</p>
                )
            }
        </div>
    )
}

const mapStateToProps=(state,props)=>{
    const id=props.match.params.id
    return{
        post:state.posts.find(post=>post.id===parseInt(id))
    }
}

export default connect(mapStateToProps)(PostShow)
