const getAdmire = (admirelist) => {
    return (dispatch) => {
        let url = '/admire';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETADMIRE',
                admirelist: res
            })
        })
    }
}

export default getAdmire