const randomInitialState=''
const randomReducer=(state=randomInitialState,action)=>{
    switch(action.type){
        case 'RANDOM':{
            return action.payload
        }
        default:{
            return state
        }
    }
}
export default randomReducer

//index.js gets called first
//configureStore-reducer