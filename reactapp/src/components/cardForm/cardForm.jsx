import React, {useState} from 'react';
import styles from './cardForm.module.css'
import { Form, Button} from 'react-bootstrap';
import { useRef } from 'react';

const CardForm = ({onAdd}) => {
    const formRef = useRef();
    const titleRef = useRef();
    const contentRef = useRef();
    const inputRef = useRef();
    const [file, setFile] = useState({fileName:null, fileURL:null})
    
    const onFileChange = (file) => {
        setFile({
            fileName: file.name,
            fileURL: file.url,
        })
    }
    const onChange = event => {
        console.log("image!!",event.target.files)
        onFileChange({
            name: event.target.files[0].name,
            url: event.target.files[0].url
        })
    }

const onAddCard = (event) => {
    event.preventDefault();
    const card = {
        id: Date.now(),
        title: titleRef.current.value || '',
        content: contentRef.current.value || '',
        imgSrc: file.fileURL || '',
    }
    formRef.current.reset();
    setFile({fileName:null, fileURL:null})
    onAdd(card)

}

    return (
        <div className={styles.container}>
            <Form ref={formRef}>
            <Form.Group controlId="formFile" className="mb-3" >
            <Form.Label>image</Form.Label>
            <Form.Control 
            ref={inputRef} 
            className={styles.input} 
            type="file" 
            accept="image/*" 
            name="file"
            onChange={onChange}/>
            </Form.Group>
       
 
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                <Form.Label>title</Form.Label>
                <Form.Control ref={titleRef} type="email" placeholder="제목을 입력하세요" />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                <Form.Label>content</Form.Label>
                <Form.Control ref={contentRef} as="textarea" rows={2} />
            </Form.Group>
            </Form>
            <Button onClick={onAddCard} className={styles.enroll} variant="dark">enroll</Button>{' '}

        </div>
    )
}

export default CardForm;