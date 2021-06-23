import { useState } from 'react'
import formStyles from '../styles/Form.module.css'

const Signin = ({ onSignUp, onClickAlt }) => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const onSubmit = (e) => {
        e.preventDefault()

        if(!username || !password) {
            alert('Please fill out all the fields.')
            return
        }

        onSignUp({username, password})
    }

    return (
        <div>
            <div className={formStyles.headingflex}>
                <h1 className={formStyles.headingtext}>Sign In</h1>
                <h3 className={formStyles.headingalt} onClick={onClickAlt}>Sign Up?</h3>
            </div>
            <form className={formStyles.signform} onSubmit={onSubmit}>
                <p className={formStyles.formtext}>Username: </p><input type="text" value={username} className={formStyles.inputfield} placeholder="Enter your username..." onChange={(e) => setUsername(e.target.value)}/>
                <p className={formStyles.formtext}>Password: </p><input type="text" value={password} className={formStyles.inputfield} placeholder="Enter your password..." onChange={(e) => setPassword(e.target.value)}/>
                <input type="submit" className={formStyles.btn} value="Sign In"/>
            </form>
        </div>
    )
}

export default Signin
