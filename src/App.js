import {Switch} from 'react-router-dom'

import Home from './components/Home'
import Login from './components/Login'
import NotFound from './components/NotFound'
import About from './components/About'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => (
  <Switch>
    <ProtectedRoute exact path="/login" component={Login} />
    <ProtectedRoute exact path="/" component={Home} />
    <ProtectedRoute exact path="/about" component={About} />
    <NotFound />
  </Switch>
)

export default App
