import React from "react";
import styles from "../styles/homeScreen.module.css"
import Navbar from "./Components/Navbar";

const HomeScreen = () => {
    return(
        <div className={styles.homeScreen}>
            <Navbar></Navbar>
            <header>About Us</header>
            <div>
                <p>This non-profit was created in order to provide a sustainable source of volunteer opportunities for anyone. It is important to us that people are able to volunteer. We value the ideas of others and believe strongly that with your innovative abilities, volunteering can be fun again. I'm really tired right now and my brain doesn't seem to function properly after midnight. I think I was making a decent amount of progress earlier but man am i tired. I will surely go to sleep after this.</p>
            </div>
        </div>
    )
} 
export default HomeScreen