import React from "react";
import {connect} from 'react-redux';



function Priority(props) {

    const elem = props.card.filter(el => el.id === props.priorityId)

    return (
        <div>



            <button onClick={() => props.priorityChanger(elem[0].id, 1)}>up</button>
                    {elem[0].priority}
            <button onClick={() => props.priorityChanger(elem[0].id, -1)}>dw</button>





        </div>
    )
}

const mapStateToProps = (state) => ({
    card: state.cards
})

const mapDispatchToProps = (dispatch) => ({
    priorityChanger: (cardId, value) => dispatch({type:'PRIORITY_CHANGE', payload:[cardId,value]})
})

export default connect (mapStateToProps, mapDispatchToProps) (Priority);