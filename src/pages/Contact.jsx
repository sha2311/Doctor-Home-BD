import React from 'react'
import { assets } from '../assets/assets_frontend/assets'

const Contact = () => {
  return (
    <div>
        <div className='text-2xl text-center pt-10 text-gray-500'>
          <p>CONTACT <span className='font-semibold text-gray-700'>US</span></p>
        </div>

        <div className='my-10 flex flex-col justify-center md:flex-row text-sm gap-10 mb-28'>
          <img className='w-full md:max-w-[360px]' src={assets.contact_image} alt="" />
          <div className='flex flex-col justify-center items-start gap-6'>
            <p className='text-lg font-semibold text-gray-600'>OUR OFFICE</p>
            <p className='text-gray-500'> 2 No. Ring Road, <br/>Mohammadpur,  Dhaka. </p>
            <p className='text-gray-500'>Tel: 01949219000 <br/> Email: sha31417@gmail.com</p>
            <p className='text-lg font-semibold text-gray-600'>CAREERS AT PRESCRIPTO</p>
            <p className='text-gray-500'>Learn more about our teams and job openings.</p>
            <button className='border border-black px-8 py-3 text-sm hover:bg-black hover:text-white transition-all duration-500'>Explore Jobs</button>
          </div>
        </div>
    </div>
  )
}

export default Contact
