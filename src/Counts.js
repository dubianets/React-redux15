import React from "react";
import {connect} from 'react-redux'

function Counts (props){

    return (
        <div>
            <button onClick={() => props.counterChanger(1)}>Plus</button>
            {props.count}
            <button  onClick={() => props.counterChanger(-1)}>Minus</button>
        </div>
    )
}

const mapStateToProps = (state) => ({
    count: state.count
})
const mapDispatchToProps = (dispatch) => ({
    counterChanger : (value) => dispatch({type: 'CHANGE_COUNT', payload: value})
})


export default connect(mapStateToProps, mapDispatchToProps) (Counts);