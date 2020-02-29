import React from 'react'
import Counter from'./count'
import RandomGenerator from'./random'
import ListRandomGenerator from './listRandom'
import User from './user'
import UserTable from './userTable'
import RemoveByName from './removeByName'
import RemoveByEmail from './removeByEmail'


function AssignementList(props){
    return (
        <div>
        <h3>Redux app</h3>
  <h3>count value-{props.count}</h3>
  {/* <Tasks/> */}
   <Counter/>
   <hr/>
   <h3>Random value-{props.random}</h3>
   <RandomGenerator/>
   <hr/>
   <h3>List Random value-{props.random}</h3>
   <ListRandomGenerator/>
   <hr/>
   <User/>
   <hr/>
   <UserTable/>
   <hr/>
    <RemoveByName/> 
   <hr/>
   <RemoveByEmail/>
   <hr/>
   {/* <Tasks/> */}
   <hr/> 

        </div>
    )
}

export default AssignementList