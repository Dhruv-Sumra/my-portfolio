import React from 'react'

const PersonalInfo = () => {
  return (
    <div className="h-full mt-5 min-w-full" id='personal_info'>
                <h2 className="text-center  md:text-xl md:px-2 text-lg opacity-80">I have knowledge about react js to build web apps and make it responsive with help of tailwindcss </h2>

                <div className="text-[17.5px] md:text-xl font-semibold text-center mt-5 xl:text-start space-y-3 xl:px-10 ">
                    <p><i className="fa-regular fa-user text-green-500 "></i>&nbsp; Dhruv D. Sumra</p>
                    <p><i className="fa-solid fa-phone-volume text-green-500"></i>&nbsp; +91 79904 32416</p>
                    <p><i className="fa-regular fa-envelope text-green-500"></i>&nbsp; dhruvsumra13@gmail.com</p>
                    <p><i className="fa-solid fa-cake-candles text-green-500"></i>&nbsp; Dob. 13 dec ,2004</p>
                    <p><i className="fa-solid fa-graduation-cap text-green-500"></i>&nbsp; Bachelor of computer application</p>
                    <p><i className="fa-solid fa-location-dot text-green-500"></i>&nbsp; 115 ,shiv sagar residency,near shiv sagar school,haldharugam,kadodara road,surat-394310</p>
                </div>
    </div>
  )
}

export default PersonalInfo