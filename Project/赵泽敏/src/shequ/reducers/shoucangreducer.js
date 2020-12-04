let data = []

function shoucangreducer(state=data,action){
    if(action.type=='SHOUCANG'){
        return [...state,action.sclist]
    }
    if(action.type=='DELSHOUCANG'){
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default shoucangreducer;