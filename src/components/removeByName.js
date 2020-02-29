import React from 'react'
// //higher order coponent-a component(function) which takes another component(function)
// //as an arguement or returns a component (function) is called as a  higher order component

import {connect} from 'react-redux'
import {removeByName} from '../actions/removeByName'

function RemoveByName(props) {
  //write the event handlers here
    const handleClick = () => {
      const name = prompt("Enter user name");
      props.dispatch(removeByName(name));
    };
    return (
      <div>
        <h1>Remove User By Name</h1>
        <table border="2">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Email</th>
              <th>Remove</th>
            </tr>
          </thead>
          <tbody>
            {props.removeByName.map((ele) => {
              return (
                <tr key={ele.id}>
                  <td>{ele.id}</td>
                  <td>{ele.name}</td>
                  <td>{ele.email}</td>
                  <td>
                    <button onClick={handleClick}>Remove</button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  const mapStateToProps = (state) => {
    return {
        removeByName: state.removeByName
    };
  };
  
  export default connect(mapStateToProps)(RemoveByName);