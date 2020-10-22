import React, {useEffect} from 'react';
import {connect} from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import {Button,Container} from 'reactstrap';
import Board from "./Board";
import {addCard, getCardsFromServer} from "./redux/Actions";


function App(props) {

  useEffect(() => {props.getCards()}, [])

  const addCardHandler = () => {
    const newCard = {
      name: "Vasyy",
      status: 'todo',
      priority: 1
    }
    props.addCards(newCard)
  }

  return (
    <Container>
      <Button onClick={addCardHandler}>add card</Button>

    <Board
    cards={props.cards}
    columns={props.columns}/>

    </Container>
  );
}

const mapStateToProps = (state) => ({
  cards : state.cards,
  columns : state.columns
})
const mapDispatchToProps = (dispatch) => ({
  getCards : () => dispatch(getCardsFromServer(dispatch)),
  addCards : (card) => dispatch(addCard(card))
})

export default connect (mapStateToProps, mapDispatchToProps) (App);
