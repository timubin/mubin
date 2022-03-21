import React from 'react'
import "./Work.css"
import investment from "./icon/investment.png"
import shopping from "./icon/shopping.png"
import solution from "./icon/solution.png"
import laptop from "./icon/laptop.png"
import shop from "./icon/shop.png"
import web from "./icon/web.png"

const Work = () => {
  return (
    <>

    <div className="work  container" id='about'>
    <h2 className='text-center text-white text-4xl'>My Experience</h2>
    <div className="  flex py-10 flex-wrap mx-auto row">    
        <div className='w-full shadow text-center text-white md:w-2/1 sm:w-1/3'>
        <div className="iconbox p-5 mr-5">
            <img className='w-7 py-3 mx-auto' src={investment} alt="" />
            <h2 className='text-xl'>Website Pro</h2>
            <p className='paracolor'>We build professional responsive websites optimized for the most popular search engines.</p>
        </div>
        </div>
        <div className='w-full text-center shadow text-white md:w-2/1 sm:w-1/3'>
        <div className="iconbox p-5  mr-5">
        <img className='w-7 py-3 mx-auto' src={shopping} alt="" />
            <h2 className='text-xl'>Online store & shopping</h2>
            <p className='paracolor'>I can create a fully functional online store with any type of payment gateway support and add shopping cart functionality into you’re existing website.</p>
        </div>
        </div>
        <div className='w-full text-center text-white shadow md:w-2/1 sm:w-1/3'>
        <div className="iconbox p-5">
        <img className='w-7 py-3 mx-auto' src={solution} alt="" />
            <h2  className='text-xl'>Fixing problems</h2>
            <p className='paracolor'>Website problem & bugs it’s a common problem for every website. Don’t worry about bugs and problems. I can fix any type of problems & bugs for any website.</p>
        </div>
        </div>         
    </div>

    <div className=" flex flex-wrap mx-auto row">
        <div className='w-full  text-center text-white shadow md:w-2/1 sm:w-1/3'>
        <div className="iconbox p-5">
        <img className='w-7 py-3 mx-auto' src={shop} alt="" />
            <h2>WooCommerce Development</h2>
            <p className='paracolor'>We know the ins and outs of WooCommerce and we can help you get your eCommerce site running in a matter of weeks..</p>
        </div>
        </div>
        <div className='w-full text-center text-white shadow md:w-2/1 sm:w-1/3'>
        <div className="iconbox p-5">
        <img className='w-7 py-3 mx-auto' src={laptop} alt="" />
            <h2>Front End Development</h2>
            <p className='paracolor'>We convert any design file: PSD, Sketch, Ai, Adobe XD to pixel perfect, semantic and standard compliant HTML/CSS template.
</p>
        </div>
        </div>
        <div className='w-full text-center text-white shadow md:w-2/1 sm:w-1/3'>
        <div className="iconbox p-5">
        <img className='w-7 py-3 mx-auto' src={web} alt="" />
            <h2>WordPress Development</h2>
            <p className='paracolor'>We turn designs into high-quality, fully functional CMS driven websites based on WordPress.</p>
        </div>
        </div> 
       
    </div>
    </div> 
    
    </>
  )
}

export default Work