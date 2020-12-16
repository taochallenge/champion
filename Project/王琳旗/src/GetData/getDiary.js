const getDiary = (diarylist) => {
    return (dispatch) => {
        let url = '/diaries';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETDIARIES',
                diarylist: res
            })
        })
    }
}

export default getDiary