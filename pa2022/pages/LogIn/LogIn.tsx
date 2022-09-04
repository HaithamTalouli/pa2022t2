import React, { FormEvent, useCallback, useEffect, useState } from "react"
import { useQuery } from "../../convex/_generated/react"
import styles from '../../styles/loginstyles.module.css'

// const CheckSubmition = (userName: string, userPassword: string) => {
//     const user = useQuery('getUser', userName)
//     console.log(user)
// }

const LogIn = () => {
    const [userName, setName] = useState<string>('')
    const [userPassword, setPassword] = useState<string>('')
    const users = useQuery('getUsers')

    const handleSubmit = (e :FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const form = {
            userName, 
            userPassword
        }
        // CheckSubmition(userName, userPassword)
        console.log(form)
        // useEffect(() => {user = useQuery('getUser', userName)})
        console.log(users)
        var userFound = false;
        for (var i = 0; i < users.length; i++) {
            console.log(users[i].name)
            if (users[i].name  === userName && users[i].password === userPassword) {
                console.log("found");
                userFound = true;
            }
        }
        if (!userFound) {
            alert("Username or password does not match")
        }
        setName("")
        setPassword("")
    }
    
    return(
        <div className={styles.loginForm}>
            <h1>Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <input className={styles.inputText} type="text" placeholder="Username" value={userName} onChange={(e) => setName(e.target.value)}></input>
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
export default LogIn