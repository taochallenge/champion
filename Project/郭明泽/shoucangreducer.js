let shoucang = []

function shoucangreducer(state = shoucang, action) {
    if (action.type == 'ADD_SHOUCANG') {
        return [...state, action.shoucang]
    }

    if (action.type == 'DEL_SHOUCANG') {
        // action.index
        let arr = [...state];
        arr.splice(action.index, 1);
        return arr;
    }

    return state;
}

export default shoucangreducer;