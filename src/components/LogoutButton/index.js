import {Redirect} from 'react-router-dom'
import Cookies from 'js-cookie'
import './index.css'

const LogoutButton = () => {
  const onLogout = () => {
    Cookies.remove('jwt_token')
    return <Redirect to="/login" />
  }

  return (
    <button type="button" className="logout-btn" onClick={onLogout}>
      Logout
    </button>
  )
}

export default LogoutButton
