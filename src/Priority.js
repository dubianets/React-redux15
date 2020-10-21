import React from "react";
import {connect} from 'react-redux';



function Priority(props) {

    const elem = props.card.filter(el => el.id === props.priorityId)

    return (
        <div>
                  <h4> Priority: {elem[0].priority}</h4>
            <button href="#" className="btn btn-primary" onClick={() => props.priorityChanger(elem[0].id, 1)}>↑</button>
            <button href="#" className="btn btn-primary" onClick={() => props.priorityChanger(elem[0].id, -1)} >↓</button>

            <div>
                <h5>Status: {elem[0].status}</h5>
                <button href="#" className="btn btn-primary" onClick={() => props.statusChanger(elem[0].id, -1)}>←</button>
                <button href="#" className="btn btn-primary" onClick={() => props.statusChanger(elem[0].id, 1)} >→</button>
            </div>
        </div>
    )
}

const mapStateToProps = (state) => ({
    card: state.cards
})

const mapDispatchToProps = (dispatch) => ({
    priorityChanger: (cardId, value) => dispatch({type:'PRIORITY_CHANGE', payload:[cardId,value]}),
    statusChanger: (cardId2, value2) => dispatch({type:'STATUS_CHANGER', payload: [cardId2, value2]})
})

export default connect (mapStateToProps, mapDispatchToProps) (Priority);