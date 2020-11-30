
let data = []

function datasreducer(state=data,action){
    if(action.type=='GETTREES'){
        return [...state,action.list]
    }
    return state;
}
export default datasreducer;