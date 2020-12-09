let data=[]
const collectionReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETCOLLECTION':
            return action.collectionlist
        default:
            return state;
        
    }
}

export default collectionReducer;