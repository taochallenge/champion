let data=[]
const diaryReducer = (state=data,action)=>{
    switch(action.type){
        case 'GETDIARIES':
            return action.diarylist
        default:
            return state;
        
    }
}

export default diaryReducer;