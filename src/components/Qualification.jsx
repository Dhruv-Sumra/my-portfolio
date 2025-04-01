import React from 'react'

const Qualification = () => {
  return (
    <div className='h-full mt-5 px-3 space-y-5 min-w-full' name='qualification'>
        <h2 className='text-2xl md:text-3xl font-semibold'>My Qualifications</h2>
        <h2 className='text-green-500 text-2xl uppercase font-semibold'><i className="fa-solid fa-graduation-cap"></i>&nbsp;Education</h2>

        <div className='w-full pl-5 space-y-2'>
            <h3 className='text-xl font-semibold'>VNSGU University</h3>
            <p className='text-lg'>Bachelor of computer application</p>
            
            <p className='font-semibold text-xl'>2022-2025</p>
        </div>
        <br />
        <div className='w-full pl-5 space-y-2'>
            <h3 className='text-xl font-semibold'>Nachiketa vidhyaniketan</h3>
            <p className='text-lg'>12<sup>th</sup>commerce</p>
            
            <p className='font-semibold text-xl'>2022</p>
        </div>
    </div>
  )
}

export default Qualification