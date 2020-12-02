const getCentence = (centencelist) => {
    return (dispatch) => {
        let url = '/centence';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETCENTENCE',
                centencelist: res
            })
        })
    }
}

export default getCentence