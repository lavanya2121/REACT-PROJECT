import React from 'react'
//higher order coponent-a component(function) which takes another component(function)
//as an arguement or returns a component (function) is called as a  higher order component

import {connect} from 'react-redux'
import {userTable} from '../actions/userTable'//we have not used dispatch method


function UserTable(props){
    console.log(props);
    return(
        <div> 
            <table border="1">
            <thead>
                <tr>
                    <th>id</th>
                    <th>Name</th>
                    <th>Email</th>
                </tr>
            </thead>
            <tbody>
                {//to read the redux store value inside the components is via connect
                props.userTable.map(function(emp){
                    return(
                        //we need to get the number of rows dynamically so for rows we need to give the property key={emp.id}
                        <tr key={emp.id}>
                        <td>{emp.id}</td>
                        <td>{emp.name}</td>
                        <td>{emp.email}</td>
                        </tr>
                    )
                    
                })
                }
            </tbody>
            </table>
        </div>
    )
}

const mapStateToProps=(state)=>{
    return {
        userTable:state.userTable
    }
}

//wrapped Component
//const wrappedComponent=connect(mapStateToProps)(Counter)
//export default wrappedComponent

export default connect(mapStateToProps)(UserTable)