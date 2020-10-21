import React from 'react';
import CardIteam from "./CardIteam";
import {Col} from "reactstrap";



function Column(props) {

    const {cards, column} = props;


    return (
        <Col>
            {column.status}

            {cards.filter(el => el.status === column.status).map(el => <CardIteam key={Math.random()} card={el}/>)}
        </Col>


    )
}


export default Column;