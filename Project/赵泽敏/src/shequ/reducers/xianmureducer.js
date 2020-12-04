let data = []

function xianmureducer(state=data,action){
    if(action.type=='XIANMU'){
        return [...state,action.xmlist]
    }
    if(action.type=='DELXIANMU'){
        let arr = [...state];
        arr.splice(action.index,1);
        return arr;
    }
    return state;
}
export default xianmureducer;