import React from 'react'
import { LuMoveRight } from 'react-icons/lu'

export default function SkillBtn({skill}) {
  return (
    <button className='skillBtn transition-all absolute bottom-2 right-2 px-4 p-3 bg-white text-black flex items-center overflow-hidden'>
            <div className="button_overlay transition-all bg-black w-full h-full absolute left-0"/>

    <div className="wrap flex w-full h-full items-center">
             {skill}
            <LuMoveRight className='mx-2'/>
    </div>

  </button>  )
}
