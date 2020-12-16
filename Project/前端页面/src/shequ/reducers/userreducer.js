let user = []

function userreducer(state=user,action){
    if(action.type=='GETUSER'){
        return action.user
    }
    return state;
}
export default userreducer;