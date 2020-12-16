const getComment = (commentlist) => {
    return (dispatch) => {
        let url = '/comment';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETCOMMENT',
                commentlist: res
            })
        })
    }
}

export default getComment