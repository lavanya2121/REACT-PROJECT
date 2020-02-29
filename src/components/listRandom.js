import React from 'react'
//higher order coponent-a component(function) which takes another component(function)
//as an arguement or returns a component (function) is called as a  higher order component

import {connect} from 'react-redux'
import {listRandom} from '../actions/listRandom'


function ListRandomGenerator(props){
    console.log(props);
    return(
        <div>
             <h1>{props.random}</h1> 
            <button onClick={()=>{
                const c=Math.round(Math.random()*100)
                props.dispatch(listRandom(c))
            }}>Generate</button>
            <ul>
                {
                    props.listRandom.map((ele,i)=>{
                        return (<li key={i}>{ele}</li>)
                    })
                }
            </ul>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        random:state.listRandom.random,
        listRandom:state.listRandom.numbers,
    }
}

//wrapped Component
//const wrappedComponent=connect(mapStateToProps)(Counter)
//export default wrappedComponent

export default connect(mapStateToProps)(ListRandomGenerator)