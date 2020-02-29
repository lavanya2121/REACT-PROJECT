import React from 'react'
// import Counter from'./components/count'
// import RandomGenerator from'./components/random'
// import ListRandomGenerator from './components/listRandom'
// import User from './components/user'
// import UserTable from './components/userTable'
// import RemoveByName from './components/removeByName'
// import RemoveByEmail from './components/removeByEmail'//./means src folder
import Tasks from './components/Tasks'//5th import task in App.js
import {BrowserRouter,Link,Route} from 'react-router-dom';
import Home from './components/Home'
import AssignementList from './components/AssignementList'


import {connect} from 'react-redux'
import PostList from './components/PostList';
import PostShow from './components/PostShow'
// import Tasks from './components/Tasks';

function App() {
  return (
    <BrowserRouter>
  <div>
   <h1>Redux App</h1>
   <Link to="/">Home</Link>
   <Link to="/tasks">Tasks</Link>
   <Link to="/assignements">Assignements</Link>
   <Link to="/posts">Posts</Link>

   <Route path="/" component={Home} exact={true} />
   <Route path="/tasks" component={Tasks}  />
   <Route path="/assignements" component={AssignementList} exact={true} />
   <Route path="/posts" component={PostList} exact={true} />
   <Route path="/posts/:id" component={PostShow}  />
    </div>
    </BrowserRouter>
  );
}
const mapStateToProps=(state)=>{
  return{
    count:state.count,
    random:state.random,
    listRandom:state.listRandom,
    user:state.user,
    userTable:state.userTable,
    removeByName:state.removeByName,
    removeByEmail:state.removeByEmail
  }
}
// const  wrappedComponent=connect(mapStateToProps)(App)
// export default wrappedComponent

export default connect(mapStateToProps)(App)