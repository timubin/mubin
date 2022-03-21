import React from 'react'
import "./Button.css"

const Button = ({BtnName}) => {
  return (
    <>
   <button class="glow-on-hover" type="button">{BtnName}</button>
    </>
  )
}

export default Button