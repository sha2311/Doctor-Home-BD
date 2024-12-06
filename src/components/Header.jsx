import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Header = () => {
  return (
    <div className='flex flex-col md:flex-row  flex-wrap bg-primary rounded-lg px-6 md:px-10 lg:px-20'>

    {/* ------Left side----- */}
      <div className='flex flex-col items-start justify-center md:w-1/2 gap-4 py-10 m-auto md:py-[10vw] md:mb-[-30px] '>
        <h4  className=' text-3xl md:text-4xl lg:text-5xl font-semibold text-white leading-tight md:leading-tight text-center md:text-left lg:leading-tight'>Book Appointment <br/> With Trusted Doctors</h4>
        <div className='flex flex-col md:flex-row items-center gap-3 text-white text-sm font-light'>
        <img className='w-28' src={assets.group_profiles} alt="" />
        <p>Simply browse through our extensive list of <br/> trusted doctors, <br/> schedule your appointment hassle-free.</p>
        </div>
        <a className='flex items-center gap-2 bg-white  px-8 py-3 rounded-full text-gray-600 text-sm m-auto md:m-0 hover:scale-105 transition-all duration-300 ' href="#speciality">Appointment <img className='w-3' src={assets.arrow_icon} alt="" /></a>
      </div>


    {/* ------Right side----- */}
    <div className='w-1/2 relative'>
        <img className='w-full  md:absolute bottom-0 h-auto rounded-lg' src={assets.header_img} alt="" />
    </div>
      
    </div>
  )
}

export default Header