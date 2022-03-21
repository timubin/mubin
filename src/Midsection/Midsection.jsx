import React from 'react'
import Button from '../Button/Button';
import './midsection.css'
const Midsection = () => {
  return (
    <div>
        <div className="container mx-auto ">
            <div className=" text-white mid  py-20 items-center text-center">
                <h1 className='text-3xl mb-4'>Are You Ready?</h1>
                <p className='mb-4 text-2xl py-5 px-10'>We are driven by creativity. We create innovative things to help you achieve better results and consolidate yourself in the market.</p>
                <a href="#contact"><Button BtnName={"Contact Us"}/></a>
            </div>
        </div>
    </div>
  )
}

export default Midsection