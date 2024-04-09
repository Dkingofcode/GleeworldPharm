//import React from 'react'
import "./module.boxandicon.css"

const BoxAndIcon = ({icon ,bgColor,text,border,flexDirection,color}) => {
  return (
 <div className='box-and-icon-container' 
 style={{
    
    backgroundColor:`${bgColor}`,
    border:`${border}`,
    flexDirection:`${flexDirection}`,
   padding:`10px 15px`,
cursor:`pointer`

}}
 >
         <p className='' 
         style={{
            color:`${color}`,
            fontSize:`15px`,
            cursor:`pointer`
            }}
         >{text}</p>
         <img className='icon' src={icon} 
         style={{
            width:`20px`,
            height:`20px`,
            cursor:`pointer`
        }}
         />
        </div>  
  )
}

export default BoxAndIcon
