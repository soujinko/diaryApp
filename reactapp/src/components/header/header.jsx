import React from 'react';
import { Button } from 'react-bootstrap';
import styles from './header.module.css';
const Header = (props) => {
    return (
        <div>
            <img className={styles.logo} src="/images/diary_logo.png" alt="logo" />
            <Button variant="dark">login</Button>{' '}
        </div>
    )
}

export default Header;