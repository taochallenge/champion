let photo = []

const getphotoreducer = (state=photo,action)=>{

    switch(action.type){
        case 'GETPHOTO':
            return action.photo
        default:
            return state;
    }
}

export default getphotoreducer;