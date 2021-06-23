import mainPageStyles from '../styles/Mainpage.module.css'
import Profile from '../components/Profile'

const mainPage = () => {
    return (
        <div className={mainPageStyles.navbar}>
            <h1 className={mainPageStyles.profile}>PROFILE</h1>
            <Profile />
        </div>
    )
}

export default mainPage
