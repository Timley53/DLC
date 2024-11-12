import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { FaAngleDown } from "react-icons/fa";


function Header() {
  return (
    <header className="flex justify-between p-2 items-center top-0 w-[85%] border-b-2 border-b-slate-500 mx-auto">
       <Link href={""} className="text-lg">
                DLC
       </Link>


<nav className="w-[35%]">
    <ul className=" p-2 flex  list-none"> 
        <li className="m-1 mx-6 hover:text-slate-500 transition-all">
            <Link href={""}  className="p-2">Skills</Link>
        </li>
        <li className="m-1 mx-6 hover:text-slate-500 transition-all">
            <Link href={""} className="p-2">About</Link>
        </li>
        <li className="m-1 mx-6 hover:text-slate-500 transition-all">
            <Link href={""} className="flex items-center">Skills<FaAngleDown className='mx-1'/></Link>
        </li> 
    </ul>
</nav>

        </header>
  )
}

export default Header