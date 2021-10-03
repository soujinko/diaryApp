import React, {useState} from 'react';
import { Button } from 'react-bootstrap';
import CardForm from '../cardForm/cardForm';
import CardList from '../cardList/cardList';
import styles from './home.module.css'

const Home = (props) => {
    const [cards, setCards] = useState({
        '1': {
            id: '1',
            title: 'title1',
            content: 'content1',
            imgSrc: '/images/image1.jpg'
        },
        '2': {
            id: '2',
            title: 'title2',
            content: 'content2',
            imgSrc: '/images/image1.jpg'
        },
        '3': {
            id: '3',
            title: 'title2',
            content: 'content3',
            imgSrc: '/images/image1.jpg'
        },
    })

    const onAdd =(card)=> {
        setCards(cards => {
            const updated = {...cards};
            updated[card.id] = card;
            return updated
        })
    }

    return (
        <div>
            <CardList cards={cards} onAdd={onAdd}/>
            <Button className={styles.addBtn} variant="dark">write</Button>{' '}
            <CardForm onAdd={onAdd} />
        </div>
    )
}
export default Home;