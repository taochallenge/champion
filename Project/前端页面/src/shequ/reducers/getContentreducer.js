let data = []

function getContentreducer(state=data,action){
    if(action.type=='GETCONTENT'){
        return  action.contentlist
    }
    return state;
}
export default getContentreducer;