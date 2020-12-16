let data=[]
const chattingReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETCHATTING':
            return action.chattinglist
        default:
            return state;
        
    }
}

export default chattingReducer;