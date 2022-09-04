import React from "react";
import styles from '../../styles/navbar.module.css';
import {
    BrowserRouter as Router,
    Link
  } from "react-router-dom";

export const Navbar = () =>{
    return (
        <nav className={styles.body}>

            <ul>
                <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/">Home</Link>
                </li>
                {/* <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/events"> Events</Link>
    </li>*/}
                <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/posts"> Make Post</Link>
                </li> 
                <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/othersposts"> Events</Link>
                </li> 
                <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/about"> About Us</Link>
                </li>
                <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/signup"> Sign Out</Link>
                </li>
                {/* <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/login"> Log In</Link>
                </li> */}
                {/* <li className={styles.tablineup}>
                    <Link style={{ marginLeft: '1.5rem', fontSize: 20}} to="/profile"> Profile</Link>
                </li> */}
            </ul>
        </nav>
    )
}


  export default Navbar;