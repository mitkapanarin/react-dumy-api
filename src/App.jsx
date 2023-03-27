import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'
import Cards from './components/Cards'
import Home from './pages/Home'
import UserDetails from './pages/UserDetails'
import Posts from './pages/Posts'
import PostsDetails from './pages/PostsDetails'

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/users/:id' element={<UserDetails/>}/>
        <Route path='/post' element={<Posts/>}/>
        <Route path='/post/:id' element={<PostsDetails/>}/>
      </Routes>
    </Router>
  )
}

export default App
