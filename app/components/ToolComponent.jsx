import Image from 'next/image'
import React from 'react'

function ToolComponent({img, title}) {
  return (
    <div className="className='w-[180px] flex items-center justify-center flex-col">

    <Image src={img} className='w-[75%] rounded-[2.5rem]'/>
    <h2 className='my-3'>{title}</h2>
    </div>
)
}

export default ToolComponent