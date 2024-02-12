import {Link} from 'react-router-dom'
import './index.css'

const Header = () => (
  <ul className="header-container">
    <Link to="/" className="link">
      <li className="list">Home</li>
    </Link>
    <Link to="/about" className="link">
      <li className="list">About</li>
    </Link>
  </ul>
)

export default Header
