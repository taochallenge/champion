let centence = []

const getwordsreducer = (state=centence,action)=>{

    // switch(action.type){
    //     case 'GETWORDS':
    //         return action.centence
    //     default:
    //         return state;
    // }
    if(action.type=='GETWORDS'){
        return  action.centence
    }
    return state;
}

export default getwordsreducer;