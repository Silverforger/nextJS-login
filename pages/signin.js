import formStyles from '../styles/Form.module.css'

const signIn = () => {
    return (
    <div className={formStyles.center}>
        <div className={formStyles.formcontainer}>
            <h1 className={formStyles.headingtext}>Sign Up</h1>
            <form className={formStyles.signform}>
                <p className={formStyles.formtext}>Username: </p><input type="text" className={formStyles.inputfield} placeholder="Enter your username..."/>
                <p className={formStyles.formtext}>Password: </p><input type="password" className={formStyles.inputfield} placeholder="Enter your password..."/>
                <input type="submit" className={formStyles.btn} value="Sign In"/>
            </form>
        </div>
    </div>
    )
}

export default signIn
