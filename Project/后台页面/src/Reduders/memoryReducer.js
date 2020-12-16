let data=[]
const memoryReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETMEMORY':
            return action.memorylist
        default:
            return state;
        
    }
}

export default memoryReducer;