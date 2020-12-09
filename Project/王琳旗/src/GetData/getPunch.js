const getPunch = (punchlist) => {
    return (dispatch) => {
        let url = '/punch';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETPUNCH',
                punchlist: res
            })
        })
    }
}

export default getPunch