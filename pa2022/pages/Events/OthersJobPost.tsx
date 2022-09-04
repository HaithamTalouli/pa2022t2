import React, { FormEvent, useCallback } from "react"
import styles from '../../styles/posts.module.css'
import {useState} from "react"
import { useMutation, useQuery } from "../../convex/_generated/react"
import JobDisplay from "./JobDisplay"

const OthersJobPost = () => {
    console.log("hi")
    const postsByPoster = useQuery('getPostsByNonPoster', 'ham')


    const list = []
    console.log(postsByPoster);
    if (postsByPoster){
    for(var i = 0; i < postsByPoster.length; i++) {
        console.log(postsByPoster[i].title)
        list.push(JobDisplay(postsByPoster[i].title, postsByPoster[i].posterName, postsByPoster[i].email, postsByPoster[i].date, postsByPoster[i].description, postsByPoster[i].applicantNum))
    }}
    // postsByPoster.forEach((element: { eventTitle: string; posterName: string; email: string; date: number; description: string; applicantNum: number }) => {
    //     list.push(JobDisplay(element.eventTitle, element.posterName, element.email, element.date, element.description, element.applicantNum))
    // });


        return(
            <div>
                <div>
                    <h1>Others Posts:</h1>
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
export default OthersJobPost