import React from 'react'
//higher order coponent-a component(function) which takes another component(function)
//as an arguement or returns a component (function) is called as a  higher order component

import {connect} from 'react-redux'
import {user} from '../actions/user'//we have not used dispatch method


function User(props){
    console.log(props);
    return(
        <div>
            <ul>
                {
                    props.user.map((ele,i)=>{
                        return (<li key={i}>{ele.id}-{ele.name}-{ele.email}</li>)
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        user:state.user
    }
}

//wrapped Component
//const wrappedComponent=connect(mapStateToProps)(Counter)
//export default wrappedComponent

export default connect(mapStateToProps)(User)