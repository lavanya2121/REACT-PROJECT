import {createStore,combineReducers, applyMiddleware} from 'redux'
import thunk from 'redux-thunk'//npm insatll redux-thunk
import countReducer from '../reducers/count'
import randomReducer from '../reducers/random'
import listRandomReducer from '../reducers/listRandom'
import userReducer from '../reducers/user'
import userTableReducer from '../reducers/userTable'
import removeByNameReducer from '../reducers/removeByName'
import removeByEmailReducer from '../reducers/removeByEmail'//one dot means src folder,one more dot means reducers folder
import tasksReducer from '../reducers/tasks'//3 import task reducer in configurestore.js
import postsReducer from '../reducers/postsReducer'

const configureStore=()=>{
    const store=createStore(combineReducers({//one store
        count:countReducer,//multiple state values//10th
        random:randomReducer,
        listRandom:listRandomReducer,
        user:userReducer,
        userTable:userTableReducer,
        removeByName:removeByNameReducer,
        removeByEmail:removeByEmailReducer,
        tasks:tasksReducer,//first configure the store
        posts:postsReducer
    }),applyMiddleware(thunk))
    return store
}

export default configureStore