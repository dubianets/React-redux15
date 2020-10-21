import axios from 'axios';


export function cardDeleteById (cardId) {
    return  (dispatch) => {
        axios.delete(`https://nazarov-kanban-server.herokuapp.com/card/${cardId}`)
            .then(res =>
            {dispatch(getCardsFromServer())}
            )

            .catch(
                err => err
            )
    }
}

export function getCardsFromServer () {
    return (dispatch) => {
        axios.get(`https://nazarov-kanban-server.herokuapp.com/card`)
            .then(res => {
                dispatch({
                    type: 'GET_CARDS',
                    payload: res.data
                })
            })
            .catch(err => err);
    }
}

export function addCard (card) {
    return (dispatch) => {
        axios.post(`https://nazarov-kanban-server.herokuapp.com/card`,card)
            .then(res => {
                dispatch(
                    getCardsFromServer()
                )
            })
            .catch(err => err);
    }
}