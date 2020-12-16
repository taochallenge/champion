let users = []

function usersreducer(state=users,action){
    if(action.type=='GETUSERS'){
        return action.ulist
    }
    return state;
}
export default usersreducer;