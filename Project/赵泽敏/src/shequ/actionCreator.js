const getDate = (list)=>{
    return (dispatch)=>{
        let url = 'https://www.fastmock.site/mock/9e4bbf9e35ad15942010865690c87ac6/api/getgoodslist';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETDATA',
                list: res.data
            })
        })
    }
}

export {getDate}
