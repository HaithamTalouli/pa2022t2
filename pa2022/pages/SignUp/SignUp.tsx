import React, { FormEvent, useCallback, useEffect, useState } from "react"
import { Route } from "react-router-dom"
import addPost from "../../convex/addPost"
import { useMutation, useQuery } from "../../convex/_generated/react"
import styles from '../../styles/signupstyles.module.css'
import HomeScreen from "../About"

// const CheckSubmition = (userName: string, userPassword: string) => {
//     const user = useQuery('getUser', userName)
//     console.log(user)
// }

const SignUp = () => {

    const [userName, setName] = useState<string>('')
    const [userEmail, setEmail] = useState<string>('')
    const [userPassword, setPassword] = useState<string>('')
    const users = useQuery('getUsers')
    const addUser = useMutation('addUser')

    const handleSubmit = (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = {
            userName, 
            userEmail,
            userPassword
        }
        // CheckSubmition(userName, userPassword)
        console.log(form)
        // useEffect(() => {user = useQuery('getUser', userName)})
        console.log(users)
        var userFound = false;
        for (var i = 0; i < users.length; i++) {
            console.log(users[i].name)
            if (users[i].name  === userName || users[i].email === userEmail) {
                console.log("user already exists");
                userFound = true;
                break;
            }
        }
        if (userFound) {
            alert("Username or email in use")
        }
        else {
            console.log("added new user")
            addUser(userName, userEmail, userPassword)
        }
        setName("")
        setEmail("")
        setPassword("")
    }
    
    return(
        <div className={styles.signUpForm}>
            <h1>Sign Up</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input className={styles.inputText} type="text" placeholder="Username" value={userName} onChange={(e) => setName(e.target.value)}></input>
                </label>
                <label>
                    <p></p>
                    <input className={styles.inputText} type="text" placeholder="Email" value={userEmail} onChange={(e) => setEmail(e.target.value)}></input>
                </label>
                <label>
                    <p></p>
                    <input className={styles.inputText} type="text" placeholder="Password" value={userPassword} onChange={(e) => setPassword(e.target.value)}></input>
                </label>
                <div className={styles.buttondiv}>
                    <button type="submit" className={styles.button}>Submit</button>
                </div>
            </form>
        </div>
    )
}
export default SignUp