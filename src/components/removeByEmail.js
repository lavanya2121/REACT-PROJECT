import React,{Component}from 'react'
// //higher order coponent-a component(function) which takes another component(function)
// //as an arguement or returns a component (function) is called as a  higher order component

import {connect} from 'react-redux'
import {removeByEmail} from '../actions/removeByEmail'

class RemoveByEmail extends Component {
    constructor() {
      super();
      this.state = {
        email: ""
      };
    }
  
    handleChange = (e) => {
      this.setState({ email: e.target.value });
    };
  
    handleSubmit = (e) => {//this.state==> use this.props in class components
      e.preventDefault();
      this.props.dispatch(removeByEmail(this.state.email));
    };
  
    render() {
      return (
        <div>
          <h1>Remove User By Email</h1>
          <table border="2">
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Email</th>
              </tr>
            </thead>
            <tbody>
              {this.props.removeByEmail.map((ele) => {
                return (
                  <tr key={ele.id}>
                    <td>{ele.id}</td>
                    <td>{ele.name}</td>
                    <td>{ele.email}</td>
                  </tr>
                );
              })}
            </tbody>
          </table>
          <br/>
          <form onClick={this.handleSubmit}>
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.email}
            />
            <br/>
           
            <input type="submit" value="submit" />
          </form>
        </div>
      );
    }
  }
  
  const mapStateToProps = (state) => {
    return {
      removeByEmail: state.removeByEmail
    };
  };
  
  export default connect(mapStateToProps)(RemoveByEmail);
