let data = []

function jinianreducer(state=data,action){
    if(action.type=='GETMEMORY'){
        // console.log(action.memory)
        return  [...action.memory]
    }
    return state;
}
export default jinianreducer;