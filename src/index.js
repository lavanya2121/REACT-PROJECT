import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'//npm install react-redux
import {startGetPosts} from './actions/postsActions'

import App from './App';//inside src folder we have App.js file 
import configureStore from './store/configureStore'
const store=configureStore()
store.subscribe(()=>{
    console.log(store.getState())
})

console.log(store.getState())//to see the initial state values of a store

store.dispatch(startGetPosts())

const jsx=(
    <Provider store={store}>
    <App />
    </Provider>
)

ReactDOM.render(jsx, document.getElementById('root'));


