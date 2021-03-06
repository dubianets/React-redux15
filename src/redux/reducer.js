const initialState = {
    cards: [
        {
            _id:  Math.random(),
            name: "Vadim",
            status: 'todo',
            priority: 1
        }, {

            _id: Math.random(),
            name: "Petr",
            status: 'done',
            priority: 2
        }, {
            _id: Math.random(),
            name: "Luba",
            status: 'progress',
            priority: 4
        }, {
            _id: Math.random(),
            name: "Petr Fe",
            status: 'done',
            priority: 4

        }, {
            _id: Math.random(),
            name: "Petr GR",
            status: 'todo',
            priority: 5

        }, {
            _id: Math.random(),
            name: "Petr TR",
            status: 'todo',
            priority: 6

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
        case 'GET_CARDS':
            return {...state,
            cards:[...action.payload]
            }
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
        case 'CHANGE_COUNT' :
            const newCount = state.count + action.payload
            return {
                ...state,
                count: newCount
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
         default:
            return state
    }


}
export default kanban;