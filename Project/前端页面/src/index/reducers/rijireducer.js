let data = []

function rijireducer(state=data,action){
    if(action.type=='GETDIARY'){
        console.log(action.rjlist)
        return action.rjlist
    }
    return state;
}
export default rijireducer;