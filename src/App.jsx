import React from 'react'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import { BrowserRouter as Router , Routes , Route } from 'react-router-dom'
import Projects from './pages/Projects'
import Contact from './pages/Contact'

const App = () => {
  return (
    <div className='text-amber-900'>
   <Router>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Home />} />
            <Route path="projects" element={<Projects />} />
            <Route path="contact" element={<Contact />} />
          </Routes>     
      </Router>
    </div>
  )
}

export default App