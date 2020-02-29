import React from 'react'
//higher order coponent-a component(function) which takes another component(function)
//as an arguement or returns a component (function) is called as a  higher order component

import {connect} from 'react-redux'
import {random} from '../actions/random'


function RandomGenerator(props){
    console.log(props);
    return(
        <div>
            <h1>{props.random}</h1>
            <button onClick={()=>{
                const rand=Math.round(Math.random()*100)
                props.dispatch(random(rand))
            }}>Genaerate</button>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        random:state.random
    }
}

//wrapped Component
//const wrappedComponent=connect(mapStateToProps)(Counter)
//export default wrappedComponent

export default connect(mapStateToProps)(RandomGenerator)

