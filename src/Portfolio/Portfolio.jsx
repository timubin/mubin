import React, { useState } from 'react'
import "./portfolo.css"
import data from '../data'
import Button from '../Button/Button';

const Portfolio = () => {

  const [see, setSee] = useState(3);
  const loadMore = () =>{
    setSee(see+see)
  }
  const slice = data.cardData.slice(0, see)
  return (
    <>
<div className="container boder pt-10 mx-auto text-white mt-5" id='portfolio'>
<h1 className='text-4xl myColor '>Our Portfolio </h1>
<p>We have already built amazing things for our customers.</p>

<div className="portfolio-body flex flex-wrap pb-1 pt-5 text-center mx-auto ">
  
  {slice.map((items, index)=>{
    return(
      <div className="portfolio w-1/3  mb-5 "> 
      <div class=" flex items-center justify-center ">
      <a class="hover:bg-gray-700 delay-50 duration-100 p-5 rounded-lg shadow mr-5" href={items.link} target="_blank">  
      <h3 class="text-gray-200 font-bold mt-2"> {items.title} </h3>
      <p class="text-gray-400 font-light my-2 text-lg"> {items.desc}</p>
      <img src={items.img} class="w-full rounded shadow" />   
  </a> 
</div>

</div>
    )
  })}




</div>
<button type="button" class="block mx-auto px-6 py-2 border-2 border-purple-600 text-white-900 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out" onClick={()=>loadMore()}>See More</button>

</div>
    </>
  )
}

export default Portfolio