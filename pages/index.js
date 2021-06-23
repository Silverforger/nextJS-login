// import Head from 'next/head'
import { useState, useEffect } from 'react'
import formStyles from '../styles/Form.module.css'
import Signup from '../components/Signup'
import Signin from '../components/Signin'
import { useRouter } from 'next/router'

function Redirect({to}) {
  const router = useRouter();

  useEffect(() => {
    router.push(to)
  }, [to])

  return null;
}

export default function signUp() {
  const [accounts, setAccounts] = useState([])
  const [switchPage, setSwitchPage] = useState(false)
  
  useEffect(() => {
    const getAccounts = async () => {
      const accountsJSON = await fetchAccounts()
      setAccounts(accountsJSON)
    }

    getAccounts()
  }, [])

  const switches = () => {
    setSwitchPage(!switchPage)
  }

  const fetchAccounts = async () => {
    const res = await fetch('http://localhost:5000/credentials')
    const creds = await res.json()

    return creds
  }

  const addAccount = async (account) => {
    const res = await fetch('http://localhost:5000/credentials', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json',
      },
      body: JSON.stringify(account),
    })

    const data = await res.json()

    setAccounts([...accounts, account])
    alert('Account created!')
    switches()
  }

  const checkAccount = async (account) => {
    const res = await fetch('http://localhost:5000/credentials', {
      method: 'GET',
      headers: {
        'Content-type': 'application/json',
      }
    })

    const accountList = await res.json()
    let userAccount = {}
    userAccount = accountList.filter(existingAccount => existingAccount.username === account.username)
    if (userAccount == "") {
      alert("User not found!")
      return
    } else {
      if (userAccount[0].password == account.password) {
        alert("Successfully logged in!")
        return <Redirect to="/profile/" />
      } else {
        alert("Invalid password!")
      }
    }
  }

  return (
    <div className={formStyles.center}>
      <div className={formStyles.formcontainer}>
        {!switchPage ? <Signup onSignUp={addAccount} onClickAlt={switches}/> : <Signin onSignIn={checkAccount} onClickAlt={switches}/>}
      </div>
    </div>
  )
}

// export const getStaticProps = async () => {
//   const res = await fetch(`http://localhost:5000/credentials`)
//   const accounts = await res.json()

//   return {
//     props: {
//       accounts
//     }
//   }
// }