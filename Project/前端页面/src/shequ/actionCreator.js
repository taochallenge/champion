const getALLTrees = ()=>{
    return async(dispatch)=>{
        let url = '/tree';
        await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETALLTREES',
                alllist: res
            })
        })
    }
}
   
const getMYTrees = ()=>{
    return async(dispatch)=>{
        let url = '/tree/';
        await fetch(url+localStorage['id'], {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETMYTREES',
                mylist: res
            })
        })
    }
}
const getTATrees = ()=>{
    return async(dispatch)=>{
        let url = '/tree/';
        await fetch(url+localStorage['herid'], {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETTATREES',
                talist: res
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
const getContent = (id)=>{
    return (dispatch)=>{
        let url = '/comment/'+id;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETCONTENT',
                contentlist: res
            })
        })
    }
}
const shoucang = ()=>{
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
const xianmu = ()=>{
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

export {getALLTrees,getMYTrees,getUsers,shoucang,xianmu,getTATrees,getContent}
