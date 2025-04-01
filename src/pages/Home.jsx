import React from 'react'
import Content from '../components/Content'
import Skils from '../components/Work'
import About from '../components/About'
import ProjectSec from '../components/ProjectSec'
import Footer from '../components/Footer'

const Home = () => {
  return (
    <div className='component_size bg-green-50 h-screen'>
        <Content/>
        <About/>
        <Skils/>
        <ProjectSec/>
        <Footer />
    </div>
  )
}

export default Home