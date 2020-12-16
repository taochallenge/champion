let data=[]
const usersReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETUSERS':
            return action.userslist
        default:
            return state;
        
    }
}

export default usersReducer;