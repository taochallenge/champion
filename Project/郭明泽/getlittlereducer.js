let little = []

const getlittlereducer = (state=little,action)=>{

    switch(action.type){
        case 'GETLITTLE':
            return action.value
        default:
            return state;
    }
}

export default getlittlereducer;