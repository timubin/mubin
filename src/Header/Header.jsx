import React from 'react'
import Button from '../Button/Button';
import './Header.css';
import Images from "./images/header.png";
import Particles from "react-tsparticles";

const header = () => {
  const particlesInit = (main) => {
    console.log(main);

    // you can initialize the tsParticles instance (main) here, adding custom shapes or presets
  };

  const particlesLoaded = (container) => {
    console.log(container);
  };

  return (

    
    <div className="flex flex-wrap h-screen boder items-center container">
      <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      options={{
        
        fpsLimit: 180,
        interactivity: {
          events: {
            onClick: {
              enable: true,
              mode: "push",
            },
            onHover: {
              enable: true,
              mode: "repulse",
            },
            resize: true,
          },
          modes: {
            bubble: {
              distance: 400,
              duration: 1,
              opacity: 0.8,
              size: 50,
            },
            push: {
              quantity: 4,
            },
            repulse: {
              distance: 200,
              duration: 0.4,
            },
          },
        },
        particles: {
          color: {
            value: "#ffffff",
          },
          links: {
            color: "#ffffff",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },
          collisions: {
            enable: true,
          },
          move: {
            direction: "none",
            enable: true,
            outMode: "bounce",
            random: false,
            speed: 1,
            straight: false,
          },
          number: {
            density: {
              enable: true,
              area: 800,
            },
            value: 80,
          },
          opacity: {
            value: 0.5,
          },
          shape: {
            type: "circle",
          },
          size: {
            random: true,
            value: 5,
          },
        },
        detectRetina: true,
      }}
    />



        <div className=" text-center w-full flex flex-wrap md:w-1/2 sm:w-1/2 md:text-left sm:text-left">
            <h1 className='text-5xl myColor font-bold md:text-8xl sm:text-8xl '>WE CREATE YOUR WEBSITE</h1>
            <p className='my-6 font-size-24'>Escape the fad and discover our creative services that will give authority to your brand.</p>
          <a href="#contact" className='mx-auto md:mx-0 sm:mx-0 '><Button BtnName="GET STATET"/></a>  
        </div>  
        <div className=" flex hidden w-1/2 md:block  sm:block justify-center ">
            <img className='mx-auto' src={Images} alt="" />
        </div> 

        </div>

  )
}

export default header