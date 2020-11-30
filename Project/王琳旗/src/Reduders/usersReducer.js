let data=[]
const usersReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETUSERS':
            return action.users
        default:
            return state;
        
    }
}

export default usersReducer;