const initialState = {
    cards: [
        {
            id:  Math.random(),
            name: "Vadim",
            status: 'todo',
            priority: 1
        }, {

            id: Math.random(),
            name: "Petr",
            status: 'review',
            priority: 2
        }, {
            id: Math.random(),
            name: "Luba",
            status: 'progress',
            priority: 4
        }, {
            id: Math.random(),
            name: "Petr",
            status: 'done',
            priority: 2

        }
    ],
    columns: [
        {
            status: 'todo',
            id: 1
        }, {
            status: 'progress',
            id: 2
        }, {
            status: 'review',
            id: 3
        }, {
            status: 'done',
            id: 4
        }
    ]

}

const kanban = (state = initialState, action) => {
    switch(action.type){
        case 'GET_CARDS' :
            return{...state,
                cards:[...state.cards,...action.payload]}
        case 'ADD_CARD':
            return{
                ...state,
                cards:[...state.cards,{
                    id: Math.random(),
                    name: "Vasyy",
                    status: 'todo',
                    priority: 1
                }]
            }
        case 'DELETE_CARD':
            const newCards = state.cards.filter(el => el.id !== action.payload)
            return{
                ...state,
                cards: newCards
            }
        case 'PRIORITY_CHANGE' :
            const newPriority = state.cards.map( el =>{
                if(el.id === action.payload[0]) return {...el, priority: el.priority + action.payload[1]}
                return el
            })
            return {
                ...state,
                cards: newPriority
            }
        case 'MOVE_RIGHT' :
            const newList = state.cards.map(el => {
                if(el.id === action.payload) {
                    const newEl = state.columns.map(el => el.status)
                    return {...el, status: newEl[newEl.indexOf(el.status) + 1] }
                }
                return el
            })
            return {
                ...state,
                cards: newList
            }
         default:
            return state
    }


}
export default kanban;