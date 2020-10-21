import React, {useState} from 'react';
import {connect} from 'react-redux';
import Priority from "./Priority";
import Edit from "./Edit";
import 'bootstrap/dist/css/bootstrap.css';
import {ModalHeader, Modal, ModalBody, ModalFooter, Button} from "reactstrap";


function Card(props) {

    const [deleteConfirm, setDeleteConfirm] = useState(false)

    const deleteConf = (cardId) => {
        props.deleteCard(cardId)
        setDeleteConfirm(!deleteConfirm)
    }


    return (

        <div>
            {props.cards.filter(el => el.status === props.column).map(el =>
                <div key={Math.random()}>
                    <div className="card text-white bg-secondary mb-3">
                        <div className="card-header">{el.name}</div>
                        <div className="card-body">
                            <h5 className="card-title"><Priority priorityId={el.id}/></h5>
                        </div>
                        <div className="card-footer">
                            <button onClick={() => setDeleteConfirm(!deleteConfirm)}>delete</button>
                            <Edit card={el}/>
                        </div>
                    </div>
                    <div>
                        <Modal isOpen={deleteConfirm}>
                            <ModalHeader>Confirmation</ModalHeader>
                            <ModalBody>
                                Are you sure?
                            </ModalBody>
                            <ModalFooter>
                                <Button color="primary" onClick={() => deleteConf(el.id)}>delete</Button>{' '}
                                <Button color="secondary"
                                        onClick={() => setDeleteConfirm(!deleteConfirm)}>Cancel</Button>
                            </ModalFooter>
                        </Modal>
                    </div>
                </div>
            )}


        </div>

    );
}

const mapStateToProps = (state) => ({
    cards: state.cards
})

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch({type: 'DELETE_CARD', payload: cardId})
})


export default connect(mapStateToProps, mapDispatchToProps)(Card);
