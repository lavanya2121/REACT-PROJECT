//2 come to reducer
const tasksInitialState=[
    {id:1,title:'db backup',status:true},
    {id:2,title:'db design',status:false}
]

const tasksReducer=(state=tasksInitialState,action)=>{
         switch(action.type){
             case 'ADD_TASK':{//11th
                 return state.concat(action.payload)
             }
             case 'REMOVE_TASK':{//13th
                 return state.filter(task=>task.id!==action.payload)
             }
             case 'TOGGGLE_COMPLETE':{//14th
                 return state.map(task=>{
                     if(task.id===action.payload){
                         return {...task,status:!task.status}
                     }else{
                        return {...task}
                     }
                 })
             }
            default:{
                return [...state]//first it has only dafault state
            }
        }
}

export default tasksReducer