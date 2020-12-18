const getDiary = (id,herid)=>{
    return (dispatch)=>{
        let url = '/getdiaries';
        fetch(url, {
            method: 'POST',
            body: JSON.stringify({
                id:id,
                herid:herid
            })
        })
        .then(res => res.json())
        .then(res => {
            console.log(res)
            dispatch({
                type: 'GETDIARY',
                rjlist: res
            })
        })
    }
}
const getLittle = (id) => {
    return (dispatch) => {
        let url = '/little/'+id;
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
                    value: res.reverse()
                })
            })
    }
}

const getWords = (time) => {
    return (dispatch) => {
        let url = '/centence/'+time;
        fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            },
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETWORDS',
                centence: res[0]
            })
        })
    }
}

const getMemory = (id,herid) => {
    return (dispatch) => {
        let url = '/getmemory';
        fetch(url, {
            method: 'POST',
            body:JSON.stringify({
                id:id,
                herid:herid
            })
        })
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETMEMORY',
                memory: res
            })
        })
    }
}
export {getDiary,getLittle,getWords,getMemory}