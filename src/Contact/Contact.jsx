import React from 'react'
import Button from '../Button/Button'
import "./contact.css"
const Contact = () => {
  return (
    <>
<div class="w-full container" id='contact'>
    <div class="h-80"></div>
    <div class=" mx-auto px-6 sm:px-6 lg:px-8 mb-12">
        <div class=" w-full shadow rounded p-8 sm:p-12 -mt-72">
            <p class="text-3xl font-bold leading-7 text-center text-white">Contact me</p>
            <form action="https://formsubmit.co/kaium8458@gmail.com" method="post">
                <div class="md:flex items-center mt-12">
                    <div class="w-full md:w-1/2 flex flex-col">
                        <input type="text" placeholder='Name' required class="leading-none shadow  text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded" />
                    </div>
                    <div class="w-full md:w-1/2 flex flex-col md:ml-6 md:mt-0 mt-4">
                        <input type="email" placeholder='Email' required class="leading-none  shadow text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                </div>
                <div class="md:flex items-center mt-8">
                    <div class="w-full flex flex-col">
                        <input type="text" placeholder='Subject' class="leading-none shadow  text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 border-0 bg-gray-800 rounded"/>
                    </div>
                    
                </div>
                <div>
                    <div class="w-full flex flex-col mt-8">
                        <textarea type="text" placeholder='Message' required class="h-40 text-base shadow  leading-none text-gray-50 p-3 focus:outline-none focus:border-blue-700 mt-4 bg-gray-800 border-0 rounded"></textarea>
                    </div>
                </div>
                <div class="flex items-center justify-center w-full mt-5">
                    {/* <Button class="font-semibold leading-none text-white py-4 px-10 bg-blue-700 rounded hover:bg-blue-600 focus:ring-2 focus:ring-offset-2 focus:ring-blue-700 focus:outline-none" BtnName=" Send message"/> */}
                    <button type="submit" class="block mx-auto px-6 py-2 border-2 border-purple-600 text-white font-medium text-1xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Send Message </button>
                </div>
            </form>
        </div>
    </div>
</div>


    </>
  )
}

export default Contact
