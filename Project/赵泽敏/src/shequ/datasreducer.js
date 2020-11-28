
let data = []

function datasreducer(state=data,action){
    if(action.type=='GETDATA'){
        return [...state,action.list]
    }
    return state;
}
export default datasreducer;