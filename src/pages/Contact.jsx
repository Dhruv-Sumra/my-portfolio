import React from 'react'
import Social from '../components/Social'
import Footer from '/src/components/footer'

const Contact = () => {
  return (
    <div className='component_size bg-green-50 min-h-screen pt-35'>
        <div className='min-h-100 w-full text-center space-y-5 md:w-full md:text-start'>
        <div className='md:flex md:justify-between md:items-center'>
        <div className='md:w-1/3 space-y-5'>
            <p className='text-green-500'>___  work together</p>
            <h2 className='text-5xl font-bold'>Let's talk about work</h2>

            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro, autem!</p>

            <div className='text-lg font-semibold mt-20 md:mt-10 space-y-3'>
                <p><i class="fa-regular fa-envelope text-green-500"></i>&nbsp; dhruvsumra13@gmail.com</p>
                <p><i className="fa-solid fa-phone-volume text-green-500"></i>&nbsp; +91 79904 32416</p>
            </div>

            <div className='w-2/3 m-auto md:ml-0 mt-10 '>
                <Social/>
            </div>
            </div>

            <div className='w-2/4 hidden md:block'>
                <img src="https://cdni.iconscout.com/illustration/premium/thumb/web-development-3817577-3181531.png" alt="" />
            </div>
            </div>

            <div className='text-start px-10 mt-20 pb-10 md:flex md:justify-between md:items-center'>
                <div className='hidden md:block'>
                    <img src="https://png.pngtree.com/png-vector/20240319/ourmid/pngtree-isometric-artwork-concept-of-email-marketing-png-image_12013723.png" alt="" />
                </div>
                <form className='flex flex-col space-y-3 md:w-2/4'>
                    <label>Name </label>
                    <input required className='pl-2 outline-1 rounded-full md:py-2' type="text" />

                    <label>Email </label>
                    <input required className='pl-2 outline-1 rounded-full md:py-2' type="email" />

                    <label>Message </label>
                    <textarea required className='pl-2 pt-1 outline-1 rounded-2xl md:py-2'></textarea>

                    <button type='submit' className='md:mt-5 cursor-pointer hover:bg-green-300 md:py-2 px-2 py-1 bg-green-200 text-xl font-semibold rounded-lg w-40'>Let's talk</button>
                </form>
            </div>
        </div>
        <Footer/>
    </div>
  )
}

export default Contact