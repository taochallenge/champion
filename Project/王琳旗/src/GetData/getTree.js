const getTree = (treelist) => {
    return (dispatch) => {
        let url = '/tree';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETTREE',
                treelist: res
            })
        })
    }
}

export default getTree