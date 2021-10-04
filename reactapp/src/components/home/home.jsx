import React, {useEffect, useState} from 'react';
import { Button } from 'react-bootstrap';
import CardForm from '../cardForm/cardForm';
import CardList from '../cardList/cardList';
import styles from './home.module.css'
import http from '../../common/http-common'

const Home = (props) => {
    const [cards, setCards] = useState({})

    const onAdd =async(card)=> {
        try {
            await  http.post('/api/posts', card);
            setCards(cards => {
                if (!card.id){
                    card.id = Date.now()
                }
                console.log('test',card.id)
                const updated = {...cards};
                updated[card.id] = card;
                return updated
            })
        }catch(err) {
            const errMsg = err.response.data['errorMessage']
            alert(errMsg)
        }   
    }

    const onDelete = async(cardId) => {
        try {
            console.log("deletecard", cardId)
            await  http.delete(`/api/posts/${cardId}`, {});
            setCards(cards => {
                const updated = {...cards};
                delete updated[cardId];
                return updated;
            })
        } catch(err) {
            const errMsg = err.response.data['errorMessage']
            console.log(errMsg)
        }
    }

    const getCard = async () => {
        const response = await  http.get('/api/posts', {});
        console.log('response', response.data)
        const makecard = await response.data.reduce(function(target, card) {
            target[card._id] = {
                title: card.title,
                content: card.content,
                imgsrc: card.imgsrc
            };
            return  target
        }, {})
        console.log("makecard", makecard)
        setCards(makecard)
        return
    }
    useEffect(async() => {
            getCard()

    }, [])

    return (
        <div>
            <CardList cards={cards} onAdd={onAdd} onDelete={onDelete}/>
            <Button className={styles.addBtn} variant="dark">write</Button>{' '}
            <CardForm onAdd={onAdd} />
        </div>
    )
}
export default Home;