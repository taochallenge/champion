const getChatting = (chattinglist) => {
    return (dispatch) => {
        let url = '/chatting';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETCHATTING',
                chattinglist: res
            })
        })
    }
}

export default getChatting