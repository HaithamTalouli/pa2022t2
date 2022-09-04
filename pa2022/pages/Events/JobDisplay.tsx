import React from "react"
import { useRef, useEffect } from "react";
import styles from '../../styles/display.module.css'
function JobDisplay(jobTitle:string, name:string, email:string, date: number, description: string, numberOfParticipants: number){
    /**
         * displaying job based on url endpoint
         * if endpoint is '/createdPosting', use the first useEffect
         * if endpoint is '/viewPosting', use the second useEffect
         * if endpoint is '/appliedPosting, use the third useEffect'
         */
    // const ref = useRef(null)
    // useEffect (() => {
        
    //     const name = document.getElementById("username")?.textContent
    //     const email = document.getElementById("email")?.textContent
    //     console.log(name)
    //     console.log(email)
    // })
    // const jobTitle = "A Job";
    // const name = "swole";
    // const email = "swole123@gmail.com";
    // const date = "9/4/2022";
    // const description = "juiced up";
    // const picture = "";
    // const numberOfParticipants = "3";

    return(
        <div className={styles.card}>
            <header className={styles.title}>{jobTitle}</header>
            <div>
                <p className={styles.date}>{date}</p>
                <p>{description}</p>
                <hr className={styles.line}></hr>
                <p className={styles.poster_name}>Organizer: {name}</p>
                <p className={styles.participant_num}>Number of participants: {numberOfParticipants}</p>
            </div>
        </div>
    )
    
}
export default JobDisplay