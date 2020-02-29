import React from 'react'
import { connect } from 'react-redux'//6th --to display on the ui
import TaskForm from '../components/TaskForm'//7th and <TaskForm /> as a child of the function component
import { removeTask} from '../actions/tasks'
import {toggleComplete} from '../actions/tasks'
// import {addTask} from '../action/tasks'

//4th is component
function Tasks(props){//it is a function component ,so we create TaskForm as a child component and make TaskForm as a child component of the Task function component
    const handleClick=(id)=>{
        props.dispatch(removeTask(id))
    }

    const handleCheck=(id)=>{
        props.dispatch(toggleComplete(id))
    }
    return(
        <div>
             <h1>CRUD OPERATIONS</h1>
             
            <h1>Listing Users-{props.tasks.length}</h1>
            <table border='1'>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>title</th>
                        <th>status</th>
                        <th>action</th>
                    </tr>
                </thead>
                <tbody>
                    {props.tasks.map(task=>{
                        return (
                        <tr key={task.id}>
                            <td>{task.id}</td>
                            <td>{task.title}</td>
                            <td><input type='checkbox' checked={task.status} 
                            onChange={()=>{handleCheck(task.id)}}/></td>
                            <td><button 
                            onClick={()=>{handleClick(task.id)}}>remove</button></td>
                        </tr>
                        )
                    })}
                </tbody>
            </table>
            <br/>
            <TaskForm/>
        </div>
    )
}

const mapStateToProps=(state)=>{//6th
    return {
        tasks:state.tasks
    }
}

export default connect(mapStateToProps)(Tasks)//6th