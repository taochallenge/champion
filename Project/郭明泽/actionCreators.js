const login = (username) => {
    return (dispatch) => {
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/login';
        fetch(url, {
            method: 'post',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'LOGIN',
                    username: res.data.name
                })
                console.log(res);
            })
    }
}

const getLittle = () => {
    return (dispatch) => {
        let url = '/little';
        fetch(url, {
            method: 'get',
            headers: {
                'Content-Type': 'application/json'
            },
        })
            .then(res => res.json())
            .then(res => {
                dispatch({
                    type: 'GETLITTLE',
                    value: res
                })
            })
    }
}


export { login }
export { getLittle }