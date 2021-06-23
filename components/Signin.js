import { useState } from 'react'
import formStyles from '../styles/Form.module.css'

const SignIn = ({ onClickAlt }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username || !password) {
            alert('Please fill out all the fields.')
            return
        }

        onSignIn({username, password})
    }

    return (
        <div>
            <h1 className={formStyles.headingtext}>Sign In</h1>
            <h2 className={formStyles.headingalt} onClick={onClickAlt}>Sign Up</h2>
            <form className={formStyles.signform} onSubmit={onSubmit}>
                <p className={formStyles.formtext}>Username: </p><input type="text" value={username} className={formStyles.inputfield} placeholder="Enter your username..." onChange={(e) => setText(e.target.value)}/>
                <p className={formStyles.formtext}>Password: </p><input type="text" value={password} className={formStyles.inputfield} placeholder="Enter your password..." onChange={(e) => setText(e.target.value)}/>
                <input type="submit" className={formStyles.btn} value="Sign In"/>
            </form>
        </div>
    )
}

export default SignIn
