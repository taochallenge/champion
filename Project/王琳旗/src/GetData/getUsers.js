const getUsers = (userslist) => {
    return (dispatch) => {
        let url = '/user';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETUSERS',
                userslist: res
            })
        })
    }
}

export default getUsers