import React from 'react'
import './Menu.scss'
const Menu = () => {
  return (
  <>
  {/* <div className="container sticky mx-auto flex py-5 bg-black-900 items-center">
    <div className="logo w-1/6 justify-center mx-auto">
      <h1 className='text-white'>Mubin</h1>
    </div>
    <div className="nav w-5/6">
      <ul className='flex text-white  flex-wrap justify-end'>
      <li class="px-3.5"><a href="#">Home</a></li>
    <li class="px-3.5"><a href="#about">About us</a></li>
    <li class="px-3.5 "><a href="#portfolio">Portfolio</a></li>
    <li class="px-3.5 "><a href="#contact">Contact us</a></li>
    <li class="px-3.5 hover:text-fuchsia-600 text-lg"> <a href=""><i class="fab fa-facebook-f"></i></a></li>
    <li class="px-3.5 hover:text-fuchsia-600 text-lg"> <a href=""><i class="fab fa-linkedin-in"></i></a></li>
    <li class="px-3.5 hover:text-fuchsia-600 text-lg"> <a href=""><i class="fab fa-instagram"></i></a></li>
    <li class="px-3.5 hover:text-fuchsia-600 text-lg"> <a href=""><i class="fab fa-google"></i></a></li>
      </ul>
    </div>
    </div> */}


<header x-data="{ isOpen: false }" class="bg-black shadow">
  <nav class="container mx-auto px-6 py-5">
    <div class="flex flex-col md:flex-row md:justify-between md:items-center">
      <div class="flex justify-between items-center">
        <div class="flex items-center">
          <a class="text-white  text-xl font-bold md:text-2xl hover:text-gray-700" href="#">Mubin</a>
        </div>

       
        <div class="flex md:hidden">
          <button  type="button" class="text-gray-500 hover:text-gray-600 focus:outline-none focus:text-gray-600" aria-label="toggle menu">
            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"></path>
            </svg>
          </button>
        </div>
      </div>

      
      <div class="md:flex items-center block hidden" >
        <div class="flex flex-col mt-2 md:flex-row md:mt-0 md:mx-1 nav">
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0" href="#">Home</a>
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0" href="#about">About</a>
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0" href="#portfolio">Portfolio</a>
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0" href="#contact">Contact us</a>
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0 icon" href="https://www.facebook.com/Tarikulislammubin"><i class="fab fa-facebook-f"></i></a>
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0 icon" href="https://www.linkedin.com/in/tarikul-islam-mubin"><i class="fab fa-linkedin-in"></i></a>
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0 icon" href="https://github.com/timubin"><i class="fab fa-github"></i></a>
          <a class="my-1 text-lg text-white leading-5 hover:text-blue-600 md:mx-4 md:my-0 icon" href="mubin3242@gmail.com"><i class="fab fa-google"></i></a>


        </div>   
      </div>
    </div>
  </nav>
</header>
  </>
    
  )
}

export default Menu