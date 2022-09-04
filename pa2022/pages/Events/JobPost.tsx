import React, { FormEvent, useCallback } from "react"
import styles from '../../styles/posts.module.css'
import {useState} from "react"
import { useMutation, useQuery } from "../../convex/_generated/react"
import JobDisplay from "./JobDisplay"

const JobPost = () => {
    const addPost = useMutation('addPost')
    const postsByPoster = useQuery('getPostsByPoster', 'ham')
    const [eventName, setName] = useState<string>('')
    const [eventDescription, setDescription] = useState<string>('')
    const [eventImage, setImage] = useState<string>('')


    const list = []
    // console.log(postsByPoster);
    if (postsByPoster){
    for(var i = 0; i < postsByPoster.length; i++) {
        console.log(postsByPoster[i].title)
        list.push(JobDisplay(postsByPoster[i].title, postsByPoster[i].posterName, postsByPoster[i].email, postsByPoster[i].date, postsByPoster[i].description, postsByPoster[i].applicantNum))
    }}
    // postsByPoster.forEach((element: { eventTitle: string; posterName: string; email: string; date: number; description: string; applicantNum: number }) => {
    //     list.push(JobDisplay(element.eventTitle, element.posterName, element.email, element.date, element.description, element.applicantNum))
    // });

    const handleSubmit = (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = {
            eventName, 
            eventDescription,
            eventImage
        }
        console.log(form)
        if (eventName.length == 0 || eventDescription.length == 0 || eventImage.length == 0){
            console.log("Invalid form submission")
            return
        }
        addPost(eventName, 123456, eventDescription, 'aplicantname', eventImage, 'hardcoded@hotmail.com', 'hardcoded name')
        setName("")
        setDescription("")
        setImage("")
        
    }

        return(
            <div>
                <div className={styles.jobForm}>
                    <form onSubmit={handleSubmit}>
                        <label>Event:</label>
                        <input
                            className={styles.inputText}
                            type="text"
                            placeholder="Event name"
                            value={eventName}
                            onChange={(e) => setName(e.target.value)}
                        ></input>
                        <label>Description:</label>
                        <input
                            className={styles.inputText}
                            type="text"
                            placeholder="Event description"
                            value={eventDescription}
                            onChange={(e) => setDescription(e.target.value)}
                        ></input>
                        <label>Image:</label>
                        <input
                            className={styles.inputFile}
                            type="file"
                            accept="image/png, image/jpeg"
                            value={eventImage}
                            onChange={(e) => setImage(e.target.value)}
                        ></input>
                        <div>
                            <button type="submit" className="formSubmit">Submit</button>
                        </div>
                    </form>
                </div>
                <div>
                    <h1>Your Posts:</h1>
                    {list}
                </div>
            </div>
            // const jobTitle = "A Job";
        // const name = "swole";
        // const email = "swole123@gmail.com";
        // const date = "9/4/2022";
        // const description = "juiced up";
        // const picture = "";
        // const numberOfParticipants = "3";
        )
    
}
export default JobPost