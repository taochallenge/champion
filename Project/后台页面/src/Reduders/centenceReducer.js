let data=[]
const centenceReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETCENTENCE':
            return action.centencelist
        default:
            return state;
        
    }
}

export default centenceReducer;