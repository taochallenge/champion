
let data = []

function datasreducer(state=data,action){
    if(action.type=='GETTREES'){
        return  action.list
    }
    return state;
}
export default datasreducer;