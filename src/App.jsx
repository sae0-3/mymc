import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'

import Home from '@/pages/Home'
import Login from '@/pages/Login'
import 'bootstrap-icons/font/bootstrap-icons.min.css'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/login' Component={Login} />
        <Route path='/' Component={Home} />
      </Routes>
    </Router>
  )
}

export default App
