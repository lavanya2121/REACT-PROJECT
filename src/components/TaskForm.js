import React from 'react'
import {addTask} from '../actions/tasks'//9th
import {connect} from 'react-redux'//10th--to make it as a wrapped component we should have access to connect

//forms is a controlled component

class TaskForm extends React.Component{
    constructor(){
        super()
        this.state={
            title:''
        }
    }

    handleClick=(e)=>{
        const title=e.target.value
        this.setState({title})
    }

    handleSubmit=(e)=>{
        e.preventDefault()
        const formData={
            id:Number(new Date()),
            title:this.state.title,
            completed:false
        }
        this.props.dispatch(addTask(formData))
        //this.props.dispatch({type:'ADD_TASK',payload:formData})
    }

    render(){
        return(
        <div>
            <form onSubmit={this.handleSubmit}>
                <label>title</label>
                <input type='text' value={this.state.title} 
                onChange={this.handleClick}/>
                <input type='submit'/>
            </form>
        </div>
        )}
}

export default connect()(TaskForm)//we dont need to read anything from the store we just need a dispatch method,so we
//dont have mapStateToProps