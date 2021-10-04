import React from 'react';
import Card1 from '../card/card';
import { Row } from 'react-bootstrap';
const CardList = ({cards, onAdd, onDelete}) => {

    return (
        <Row xs={1} md={3} className="g-4">
        {
            Object.keys(cards).map(key => (
                <Card1 cardId={key} card={cards[key]} onDelete={onDelete}/>
            ))
        }
      </Row>
    )
}

export default CardList;