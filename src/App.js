import React, {useEffect} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import {connect} from "react-redux";
import Board from "./Board";
import {Container, Button} from "reactstrap";
import {addCard, getCardsFromServer} from "./redux/Actions";
import thunk from 'redux-thunk';

function App(props) {

  useEffect(() => {props.getCards()}, [])

  const addCardHandler = () => {
    const newCard = {
      name: "Vasyy",
      status: 'todo',
      priority: 2
    }
    props.addCard(newCard)
  }

  return (
    <Container >

      <Button onClick={addCardHandler}>Add card</Button>

    <Board
        cards={props.cards}
    columns={props.columns}
    />

    </Container>
  );
}
const mapStateToProps = (state) => ({
  cards: state.cards,
  columns: state.columns
})

const mapDispatchToProps = (dispatch) => ({
  getCards: () => dispatch(getCardsFromServer()),
addCard:(card) => dispatch(addCard(card))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
