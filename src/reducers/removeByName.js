
const initialUserState = [
    { id: 1, name: "user1", email: "user1@gmail.com" },
    { id: 2, name: "user2", email: "user2@gmail.com" },
    { id: 3, name: "user3", email: "user3@gmail.com" },
    { id: 4, name: "user4", email: "user4@gmail.com" }
  ];

const removeByNameReducer=(state=initialUserState,action)=>{
    switch(action.type){
        case 'REMOVE_BY_NAME':{
            return (state.filter((ele) => {
                return ele.name !== action.payload;
              }))
        }
        default:{
            return [...state]
        }
    }
}
export default removeByNameReducer

