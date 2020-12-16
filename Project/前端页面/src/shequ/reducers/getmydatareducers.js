
let data = []

function getmydatareducers(state=data,action){
    if(action.type=='GETMYTREES'){
        return  action.mylist
    }
    return state;
}
export default getmydatareducers;