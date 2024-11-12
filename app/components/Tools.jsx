import Image from 'next/image'
import React from 'react'
import afterEffect from  "./../rescources/after-effects.png"
import premierepro from  "./../rescources/premiere-pro.png"
import capcut from  "./../rescources/capcut _img.jpg"
import ToolComponent from './ToolComponent'

function Tools() {
  return (
    <div className='w-full h-screen  flex flex-col items-center justify-center'>

        <h1>Tools</h1>

        <div className="tools_grid w-[80%] h-[60%] max-w-[750px]  grid grid-cols-3 grid-rows-2 gap-6">
        <ToolComponent img={premierepro} title={"Premiere-pro"}/>      
        <ToolComponent img={afterEffect} title={"After Effect"}/>      
        <ToolComponent img={capcut} title={"capcut"}/>      
        <ToolComponent img={premierepro} title={"Premiere-pro"}/>      
        <ToolComponent img={premierepro} title={"remierepro"}/> 
        <ToolComponent img={afterEffect} title={"After Effect"}/>      
     

   
        </div>
        
    </div>
  )
}

export default Tools