import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
