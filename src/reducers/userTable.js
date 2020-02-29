const InitialState=[
    {id:1,name:'ganesha',email:'ganesha@gmail.com'},
    {id:2,name:'lavanya',email:'lavanya@gmail.com'},
    {id:3,name:'shiva',email:'shiva@gmail.com'},
    {id:4,name:'gagana',email:'gagana@gmail.com'}
]
const userTableReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'USER_TABLE':{
            return state
        }
        default:{
            return [...state]//spread operator
        }
    }
}
export default userTableReducer