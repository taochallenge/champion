const getMemory = (memorylist) => {
    return (dispatch) => {
        let url = '/memory';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETMEMORY',
                memorylist: res
            })
        })
    }
}

export default getMemory