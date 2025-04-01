import React from 'react'
import {Link} from 'react-router-dom'

const Social = () => {
  return (
    <div className='w-3/4 m-auto flex justify-between items-center text-2xl z-20'>
        <Link target="_blank" to={'https://www.linkedin.com/in/dhruv-sumra-a13358340'} className='opacity_custom '><i className="fa-brands fa-linkedin-in motion-preset-seesaw"></i></Link>
        <Link target="_blank" to={'https://www.instagram.com/dhruv_sumra13/'} className='opacity_custom'><i className="fa-brands fa-instagram"></i></Link>
        <Link target="_blank" to={'https://github.com/Dhruv-Sumra'} className='opacity_custom'><i className="fa-brands fa-github"></i></Link>
        <Link target="_blank" to={'https://x.com/dhruv_sumra'} className='opacity_custom'><i class="fa-brands fa-twitter"></i></Link>
    </div>
  )
}

export default Social