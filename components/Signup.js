import { useState } from 'react'
import formStyles from '../styles/Form.module.css'

const Signup = ({ onSignUp }) => {
    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username || !password ||email) {
            alert('Please fill out all the fields.')
            return
        }

        onSignUp({username, email, password})
    }

    return (
        <div>
            <form className={formStyles.signform} onSubmit={onSubmit}>
                <p className={formStyles.formtext}>Username: </p><input type="text" value={username} className={formStyles.inputfield} placeholder="Enter your username..." onChange={(e) => setText(e.target.value)}/>
                <p className={formStyles.formtext}>Email: </p><input type="text" value={email} className={formStyles.inputfield} placeholder="Enter your email..." onChange={(e) => setText(e.target.value)}/>
                <p className={formStyles.formtext}>Password: </p><input type="text" value={password} className={formStyles.inputfield} placeholder="Enter your password..." onChange={(e) => setText(e.target.value)}/>
                <input type="submit" className={formStyles.btn} value="Sign Up"/>
            </form>
        </div>
    )
}

export default Signup
