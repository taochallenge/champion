const getCollection = (collectionlist) => {
    return (dispatch) => {
        let url = '/collection';
        fetch(url)
        .then(res => res.json())
        .then(res => {
            dispatch({
                type: 'GETCOLLECTion',
                collectionlist: res
            })
        })
    }
}

export default getCollection