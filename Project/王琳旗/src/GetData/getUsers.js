const getUsers=(users)=>{
    return (dispatch)=>{
        let url = 'https://www.fastmock.site/mock/0e3bf39365d0a7a4660676ba2e306df7/yuta/user';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type:'GETUSERS',
                users:res.data
            })
        })
    }
}

export default getUsers