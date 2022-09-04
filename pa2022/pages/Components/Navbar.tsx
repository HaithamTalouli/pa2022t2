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
                    <a style={{ marginLeft: '1.5rem', fontSize: 20}} href="volunteer">Volunteer</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1.5rem', fontSize: 20}} href="events"> Events</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1.5rem', fontSize: 20}} href="about"> About Us</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1.5rem', fontSize: 20}} href="events"> Events</a>
                </li>
                <li className={styles.tablineup}>
                    <a style={{ marginLeft: '1.5rem', fontSize: 20}} href="profile"> Profile</a>
                </li>
            </ul>
        </nav>
    )
}


  export default Navbar;