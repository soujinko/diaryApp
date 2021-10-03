import React from 'react';
import { Col, Card } from 'react-bootstrap';


const Card1 = ({card, onAdd}) => {
    return (
        <Col>
        <Card>
          <Card.Img variant="top" src={card.imgSrc} />
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
            {card.content}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>
    )
}

export default Card1;