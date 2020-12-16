let data=[]
const littleReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETLITTLE':
            return action.littlelist
        default:
            return state;
        
    }
}

export default littleReducer;