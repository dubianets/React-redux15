import React from 'react';
import {connect} from 'react-redux';


function Card(props) {



    return (
        <div >
            <button onClick={props.addCard}>add card</button>
            {props.cardsU.map(el => <div key={Math.random()}>
                <h4>{el.name}</h4>
                <h4>{el.priority}</h4>
                <button onClick={() => props.deleteCard(el._id)} >delete</button>
            </div>)}

        </div>
    );
}

const mapStateToProps = (state) => ({
    cardsU: state.cards,
    columnsU: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard:() => dispatch({type:'ADD_CARD'}),
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
})

<<<<<<< HEAD
export default connect(mapStateToProps, mapDispatchToProps) (Card);
=======
export default connect(mapStateToProps, mapDispatchToProps) (Card);
>>>>>>> origin/master
