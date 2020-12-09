let data=[]
const admireReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETADMIRE':
            return action.admirelist
        default:
            return state;
        
    }
}

export default admireReducer;