import React, {useState} from 'react';
import styles from './cardForm.module.css'
import { Form, Button} from 'react-bootstrap';
import { useRef } from 'react';
import http from '../../common/http-common'


const CardForm = ({onAdd}) => {
    const formRef = useRef();
    const titleRef = useRef();
    const contentRef = useRef();
    const inputRef = useRef();
    const [selectedFile, setSelectedFile] = useState(null);
    
    const onFileChange = (event) => {
        setSelectedFile(event.target.files);
    }
    // const onChange = event => {
    //     console.log("image!!",event.target.files)
    //     onFileChange({
    //         name: event.target.files[0].name,
    //         url: event.target.files[0].url
    //     })
    // }

const onAddCard = (event) => {
    event.preventDefault();
    const formData = new FormData();
    for (let i = 0; i < selectedFile.length; i++) {
        formData.append("myfile", selectedFile[i], selectedFile[i].name);
    }
    const config = {
    headers: {
        "content-type": "multipart/form-data",
    },
    };
    formData.append('title', titleRef.current.value || '');
    formData.append('content', contentRef.current.value || '');

    http.post('/api/posts', formData, config)
        .then(res => {
            console.log(res);
            formRef.current.reset();
            setSelectedFile({fileName:null, fileURL:null})
        })
        .catch(err => {
            console.log(err);
        });
    };

    // const card = {
    //     title: titleRef.current.value || '',
    //     content: contentRef.current.value || '',
    //     imgsrc: file.fileURL || '/images/image1.jpg',
    // }

    // onAdd(card)


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
            onChange={onFileChange}/>
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