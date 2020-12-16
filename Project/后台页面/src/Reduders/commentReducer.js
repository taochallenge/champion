let data=[]
const commentReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETCOMMENT':
            return action.commentlist
        default:
            return state;
        
    }
}

export default commentReducer;