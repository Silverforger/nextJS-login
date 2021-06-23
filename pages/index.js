// import Head from 'next/head'
import { useState, useEffect } from 'react'
import formStyles from '../styles/Form.module.css'
import Signup from '../components/Signup'
import Signin from '../components/Signin'


export default function signUp({ accounts }) {
  // const [accounts, setAccounts] = useState([])
  
  const addAccount = () => {
    
  }

  let signUpCheck = true;
  const switchPage = () => {
    signUpCheck = !signUpCheck;
  }

  return (
    <div className={formStyles.center}>
      <div className={formStyles.formcontainer}>
        {signUpCheck ? <Signup onSignUp={addAccount} onClickAlt={switchPage}/> : <Signin onClickAlt={switchPage}/>}
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