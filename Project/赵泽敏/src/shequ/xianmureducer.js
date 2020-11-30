let data = []

function xianmureducer(state=data,action){
    if(action.type=='XIANMU'){
        return [...state,action.xmlist]
    }
    return state;
}
export default xianmureducer;