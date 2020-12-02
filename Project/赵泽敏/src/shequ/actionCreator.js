const getTrees = ()=>{
    return (dispatch)=>{
        let url = '/tree';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETTREES',
                list: res
            })
        })
    }
}

const getUsers = ()=>{
    return (dispatch)=>{
        let url = '/user';
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETUSERS',
                ulist: res
            })
        })
    }
}

const shoucang = (sclist)=>{
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
                type: 'SHOUCANG',
                sclist: res.data
            })
        })
    }
}
const xianmu = (xmlist)=>{
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
                type: 'XIANMU',
                sclist: res.data
            })
        })
    }
}

export {getTrees,getUsers,shoucang,xianmu}
