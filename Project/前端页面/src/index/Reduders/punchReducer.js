let data=[]
const punchReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETPUNCH':
            return action.punchlist
        default:
            return state;
        
    }
}

export default punchReducer;