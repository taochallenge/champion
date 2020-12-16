
let data = []

function datasreducer(state=data,action){
    if(action.type=='GETALLTREES'){
        return  action.alllist
    }
    return state;
}
export default datasreducer;