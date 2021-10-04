import React from 'react';
import { Col, Card,Button } from 'react-bootstrap';
import styles from './card.module.css'

const Card1 = ({card, onAdd}) => {
  console.log('card', card)
    return (
        <Col>
        <Card className={styles.card}>
          <div className={styles.exitButton}>
          <i class="fas fa-times-circle"></i>
          </div>
          {card.imgsrc!=='none' && <Card.Img variant="top" src={card.imgsrc} />}
          {card.imgsrc==='none' && <Card.Img variant="top" src='/images/image1.jpg' />}
          <Card.Body>
            <Card.Title>{card.title}</Card.Title>
            <Card.Text>
            {card.content}
            </Card.Text>
          </Card.Body>
          <Button className={styles.btn} variant="dark">login</Button>{' '}
        </Card>
      </Col>
    )
}

export default Card1;