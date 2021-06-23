import Head from 'next/head'
import formStyles from '../styles/Form.module.css'

export default function signUp() {
  return (
    <div className={formStyles.form-container}>
      <h1 className={formStyles.heading-text}>Sign Up</h1>
      <form className={formStyles.sign-form}>
        <p className={formStyles.form-text}>Username: </p><input type="text" className={formStyles.input-field} placeholder="Enter username here..."/>
        <p className={formStyles.form-text}>Username: </p><input type="text" className={formStyles.input-field} placeholder="Enter username here..."/>
        <p className={formStyles.form-text}>Username: </p><input type="text" className={formStyles.input-field} placeholder="Enter username here..."/>
        <input type="submit" value="Submit"/>
      </form>
    </div>
  )
}
