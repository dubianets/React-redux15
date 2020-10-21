import React, {useState} from "react";
import {connect} from 'react-redux';
import Card from "./Card";
import {Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Row} from "reactstrap";


function Columns (props) {

    const [addModal, setAddModal] = useState(false)
    const [nameInput, setNameInput] = useState('')
    const [priorityInput, setPriorityInput] = useState('')
    const [statusInput, setStatusInput] = useState('todo')

    const addCardHandler = () => {
        props.addCard(nameInput, statusInput, priorityInput)
        setAddModal(!addModal)
        setNameInput('')
        setPriorityInput('')
        setStatusInput('todo')
    }

    return (
        <div>
            <button onClick={() => setAddModal(!addModal)}>add card</button>
            <Modal isOpen={addModal}>
                <ModalHeader>Add Card</ModalHeader>
                <ModalBody>
                    <label>Name:</label>
                    <Input type='text' value={nameInput}
                           onChange={(event) => setNameInput(event.target.value)}/>
                    <label>Priority:</label>
                    <Input type='text' value={priorityInput}
                           onChange={(event) => setPriorityInput(+event.target.value)}/>
                    <label>Status:</label>
                    <Input type='select' value={statusInput}
                           onChange={(event) => setStatusInput(event.target.value)}>
                        <option value='todo'>Todo</option>
                        <option value='progress'>Progress</option>
                        <option value='review'>Review</option>
                        <option value='done'>Done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={addCardHandler}>Add</Button>{' '}
                    <Button color="secondary" onClick={() => setAddModal(!addModal)}>Cancel</Button>
                </ModalFooter>
            </Modal>
<Row>


            {props.columns.map(el =>
                <Col key={Math.random()}>

                   <h2> {el.status}</h2>
                    <Card column={el.status}/>
                </Col>
            )}

</Row>
</div>
    )
}

const mapStateToProps = (state) => ({
    columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
    addCard:(name, status, priority) => dispatch({type:'ADD_CARD',payload:[name, status, priority]})
})

export default connect(mapStateToProps, mapDispatchToProps) (Columns);