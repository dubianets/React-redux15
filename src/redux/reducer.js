
const initialState = {
    cards: [
        {
            id: 1,
            name: "Vadim",
            status: 'todo',
            priority: 1
        }, {
            id: 1,
            name: "Petr",
            status: 'done',
            priority: 2
        }
    ],
    columns: [
        {
            status: 'todo'
        }, {
            status: 'done'
        }
    ]
}

const kanban = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CARD':
            return{
                ...state,
                cards:[...state.cards,{
                    _id: Math.random(),
                    name: "Vasyy",
                    status: 'todo',
                    priority: 1
                }]
            }
        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el._id !== action.payload)
            return{
                ...state,
                cards: newCards
            }
        default:
            return state
    }


}
export default kanban;