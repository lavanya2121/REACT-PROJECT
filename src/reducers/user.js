const InitialState=[
    {id:1,name:'ganesha',email:'ganesha@gmail.com'},
    {id:2,name:'lavanya',email:'lavanya@gmail.com'},
    {id:3,name:'shiva',email:'shiva@gmail.com'},
    {id:4,name:'gagana',email:'gagana@gmail.com'}
]
const userReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'USER':{
            return state
        }
        default:{
            return [...state]
        }
    }
}
export default userReducer