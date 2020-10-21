import React, {useState} from "react";
import {connect} from 'react-redux'
import  {Input,Button,ModalFooter,ModalBody,ModalHeader,Modal} from "reactstrap";



function Edit(props) {

    const {card} = props;
    const{status, id, name, priority} = card;

    const [editModal, setEditModal] = useState(false)
    const [nameInput, setNameInput] = useState(name)
    const [priorityInput, setPriorityInput] = useState(priority)
    const [statusInput, setStatusInput] = useState(status)


    return (

        <div>
            <button onClick={() => setEditModal(!editModal)}>edit</button>
            <Modal isOpen={editModal}>
                <ModalHeader>Edit Card</ModalHeader>
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
                        <option value='progress'>IN progress</option>
                        <option value='review'>Review</option>
                        <option value='done'>Done</option>
                    </Input>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={() => props.editMode(id, statusInput, nameInput, priorityInput)}>Edit</Button>{' '}
                    <Button color="secondary" onClick={() => setEditModal(!editModal)}>Cancel</Button>
                </ModalFooter>
            </Modal>

        </div>

    )
}

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    editMode: (id, status, name, priority) => dispatch({type:'EDIT_CHANGER', payload:[id, {status, name, priority}]})
})

export default connect(mapStateToProps, mapDispatchToProps)(Edit);