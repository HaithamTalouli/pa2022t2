import React from "react";
import styles from "../styles/homeScreen.module.css"
import Navbar from "./Components/Navbar";

const HomeScreen = () => {
    return(
        <div>
            <Navbar></Navbar>
            <header>Volunteer Today</header>
            <img src={'../nature.jpg'} />
            <div className={styles.homeScreen}>
            <header>Support Sustainability</header>
            <p>Help by hosting your own events. All donations will go to my GoFundMe page with ten percent towards charity</p>
            </div>
            <div className={styles.homeScreen}>
            <header >Join Others To Better the World</header>
            <p>You too can find volunteer opportunities near you. Keep track of the ones that interest you with a click of a button</p>
            </div>

        </div>
    )
} 
export default HomeScreen