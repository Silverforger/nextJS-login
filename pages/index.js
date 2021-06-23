// import Head from 'next/head'
import { useState, useEffect } from 'react'
import formStyles from '../styles/Form.module.css'
import Signup from '../components/Signup'


export default function signUp({ accounts }) {
  const [accounts, setAccounts] = useState([])
  
  const addAccount = () => {
    
  }

  return (
    <div className={formStyles.center}>
      <div className={formStyles.formcontainer}>
        <h1 className={formStyles.headingtext}>Sign Up</h1>
        <h2 className={formStyles.headingalt}>Sign In</h2>
        <Signup onSignUp={addAccount}/>
      </div>
    </div>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`http://localhost:5000/credentials`)
  const accounts = await res.json()

  return {
    props: {
      accounts
    }
  }
}