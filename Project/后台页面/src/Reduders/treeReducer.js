let data=[]
const treeReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETTREE':
            return action.treelist
        default:
            return state;
        
    }
}

export default treeReducer;