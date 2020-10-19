import React from 'react';
import {connect} from 'react-redux';
import Counts from "./Counts";
import Priority from "./Priority";


function Card(props) {



    return (
        <div >
            <button onClick={props.addCard}>add card</button>
            {props.cardsU.map(el => <div key={Math.random()}>
                <Counts/>
                <h4>{el.name}</h4>
                <h4>
                <Priority priorityId={el.id} />
                </h4>
                <button onClick={() => props.deleteCard(el.id)} >delete</button>
            <hr/>
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


export default connect(mapStateToProps, mapDispatchToProps) (Card);
