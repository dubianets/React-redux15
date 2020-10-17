import React from 'react';
import {connect} from 'react-redux';


function Card(props) {



    return (
        <div >
            <button onClick={props.addCard}>add card</button>
            {props.cardsU.map(el => <div key={Math.random()}>
                {el.name}
                <button onClick={() => props.deleteCard(el._id)} >delete</button>
            </div>)}
            {props.columnsU.map(el => <p key={Math.random()}>{el.status}</p>)}
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

export default connect(mapStateToProps, mapDispatchToProps) (Card);
