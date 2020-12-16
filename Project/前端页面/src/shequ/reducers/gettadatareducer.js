let data = []

function gettadatareducer(state=data,action){
    if(action.type=='GETTATREES'){
        return  action.talist
    }
    return state;
}
export default gettadatareducer;