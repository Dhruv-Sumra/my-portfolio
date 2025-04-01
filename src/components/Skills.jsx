import React from 'react'

const Skills = () => {
  return (
    <div className='h-full mt-5 px-3 min-w-full' id='skills'>
        <h2 className='text-2xl font-semibold md:text-3xl'>My skills</h2>

        <br />
        <div className='space-y-3'>
            <h2 className='text-xl font-semibold text-green-500'>Front-end</h2>
            <div className='uppercase space-y-1'>
                <p>html,css</p>
                <p>React js</p>
                <p>javascript</p>
                <p>tailiwindcss</p>
                <p>(npm packages)</p>
            </div>

            <div className='text-4xl space-x-4 mt-10 text-green-500 font-semibold'>
            <i class="fa-brands fa-html5"></i>
            <i class="fa-brands fa-css3-alt"></i>
            <i class="fa-brands fa-react"></i>
            <i class="fa-brands fa-js"></i>
            <i class="fa-brands fa-node"></i>
            </div>
        </div>
    </div>
  )
}

export default Skills