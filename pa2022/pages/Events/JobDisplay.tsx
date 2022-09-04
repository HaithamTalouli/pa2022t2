import React from "react"
import { useRef, useEffect } from "react";
import styles from '../../styles/posts.module.css'
const JobDisplay = () => {
    /**
         * displaying job based on url endpoint
         * if endpoint is '/createdPosting', use the first useEffect
         * if endpoint is '/viewPosting', use the second useEffect
         * if endpoint is '/appliedPosting, use the third useEffect'
         */
    const ref = useRef(null)
    useEffect (() => {
        
        const name = document.getElementById("username")?.textContent
        const email = document.getElementById("email")?.textContent
        console.log(name)
        console.log(email)
    })
    const jobTitle = "A Job";
    const name = "swole";
    const email = "swole123@gmail.com";
    const date = "9/4/2022";
    const description = "juiced up";
    const picture = "";
    const numberOfParticipants = "3";

    return(
        <div className={styles.card}>
            <header>{jobTitle}</header>
            <div>
                <p>{date}</p>
                <p>{description}</p>
                <p>{name}</p>
                <p>{numberOfParticipants}</p>
            </div>
        </div>
    )
}
export default JobDisplay