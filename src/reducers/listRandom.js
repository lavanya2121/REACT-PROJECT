const InitialState={
    random:'',
    numbers:[]
}
const listRandomReducer=(state=InitialState,action)=>{
    switch(action.type){
        case 'LIST_RANDOM':{
            return {
                random:action.payload,
                numbers:state.numbers.concat(action.payload)//if the initial state is an object and we have 2 properties then we need to follow this approach
            }
        }
        default:{
            return {...state}//if the initial state is an object this will also become an object
        }
    }
}
export default listRandomReducer