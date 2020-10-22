import React from 'react';
import {connect} from 'react-redux';
import { Button, CardFooter, CardTitle,CardBody,Card,CardSubtitle} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.css';
import {cardDeleteById} from "./redux/Actions";




function CardIteam(props) {

const{card} = props;
const{name, status, priority, _id} = card;
const deleteButtonHandler = () => {
    props.deleteCard(_id)
}

    return (
        <Card>
            <CardBody>
                <CardTitle>{name}</CardTitle>
                <CardSubtitle>{status}</CardSubtitle>
                {priority}
            </CardBody>
            <CardFooter>
                <Button onClick={deleteButtonHandler}>delete</Button>
                <Button onClick={() => props.moveRight(_id)}>rT</Button>
            </CardFooter>
        </Card>
    );
}

const mapStateToProps = (state) => ({

})

const mapDispatchToProps = (dispatch) => ({
    deleteCard: (cardId) => dispatch(cardDeleteById (cardId)),
    moveRight: (cardId) => dispatch({type: 'MOVE_RIGHT', payload: cardId})
})


export default connect(mapStateToProps, mapDispatchToProps) (CardIteam);
