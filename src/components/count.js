import React from 'react'
//higher order coponent-a component(function) which takes another component(function)
//as an arguement or returns a component (function) is called as a  higher order component

import {connect} from 'react-redux'
import {increment,decrement,reset} from '../actions/count'

function Counter(props){
    console.log(props);
    return(
        <div>
            <h1>{props.count}</h1>
            <button onClick={()=>{
                props.dispatch(increment())
            }}>UP</button>
             <button onClick={()=>{
                props.dispatch(decrement())
            }}>DOWN</button>
              <button onClick={()=>{
                props.dispatch(reset())
            }}>RESET</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        count:state.count
    }
}

export default connect(mapStateToProps)(Counter)

