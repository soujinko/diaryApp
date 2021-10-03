import React from 'react';
import Card1 from '../card/card';
import { Row } from 'react-bootstrap';
const CardList = ({cards, onAdd}) => (
    <Row xs={1} md={3} className="g-4">
    {
        Object.keys(cards).map(key => (
            <Card1 key={key} card={cards[key]} onAdd={onAdd}/>
        ))
    }
  </Row>
    );

export default CardList;