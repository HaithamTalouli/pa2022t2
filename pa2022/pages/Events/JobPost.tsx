import React, { FormEvent, useCallback } from "react"
import styles from '../../styles/posts.module.css'
import {useState} from "react"
import { useMutation } from "../../convex/_generated/react"

const JobPost = () => {
    const addPost = useMutation('addPost')
    const [eventName, setName] = useState<string>('')
    const [eventDescription, setDescription] = useState<string>('')
    const [eventImage, setImage] = useState<string>('')

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
        addPost(eventName, 123456, eventDescription, 3, eventImage, 'hardcoded@hotmail.com', 'hardcoded name')
        setName("")
        setDescription("")
        setImage("")
        
    }


    return(
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
    )
}
export default JobPost