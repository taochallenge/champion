let data = []

function rijireducer(state=data,action){
    if(action.type=='GETDIARY'){
        return  [...state,action.rjlist]
    }
    return state;
}
export default rijireducer;