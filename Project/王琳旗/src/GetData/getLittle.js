const getLittle = (littlelist) => {
    return (dispatch) => {
        let url = '/little';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETLITTLE',
                littlelist: res
            })
        })
    }
}

export default getLittle