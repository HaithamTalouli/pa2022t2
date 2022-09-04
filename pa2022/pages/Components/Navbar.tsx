import React from "react";
import styles from '../../styles/navbar.module.css';
import Nav from 'react-bootstrap/Nav';

function Navbar(){
    return (
        <nav className={styles.body}>
            <a href="/" className = "site-title">
                Logo
            </a>
            <ul>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1rem' }} href="volunteer">Volunteer</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1rem' }} href="events"> Events</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1rem' }} href="about"> About Us</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1rem' }} href="events"> Events</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1rem' }} href="profile"> Profile</a>
                </li>
            </ul>
        </nav>
    )
}


  export default Navbar;