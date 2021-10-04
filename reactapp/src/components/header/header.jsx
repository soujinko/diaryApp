import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './header.module.css';
const Header = (props) => {
    return (
        <div className={styles.header}>
            <img className={styles.logo} src="/images/diary_logo.png" alt="logo" />
            <Button className={styles.btn} variant="dark">login</Button>{' '}
        </div>
    )
}

export default Header;