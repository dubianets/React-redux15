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
            status: 'done',
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
            status: 'todo'
        }, {
            status: 'progress'
        }, {
            status: 'review'
        }, {
            status: 'done'
        }
    ],
}


const kanban = (state = initialState, action) => {
    switch(action.type){
        case 'ADD_CARD':
            return{
                ...state,
                cards:[...state.cards,{
                    id: Math.random(),
                    name: action.payload[0],
                    status: action.payload[1],
                    priority: action.payload[2]
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
        case 'STATUS_CHANGER' :
            const newStatus = state.cards.map(el => {
                if (el.id === action.payload[0]) {
                    const newChangerStatus = state.columns.map(el => el.status)
                    return {...el, status: newChangerStatus[newChangerStatus.indexOf(el.status) + action.payload[1]]}
                }
                return el
            })
            return {
                ...state,
                cards: newStatus
            }
        case 'EDIT_CHANGER' :
            const newEdit = state.cards.map(el => {
                if(el.id === action.payload[0])return {...el, ...action.payload[1]}
                return el
            })
            return {
                ...state,
                cards: newEdit
            }
        default:
            return state
    }


}
export default kanban;