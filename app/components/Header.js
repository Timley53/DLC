import React from 'react'
import Image from 'next/image'
import dlcLogo from "../rescources/dlc-logo.png"


function Header() {
  return (
    <header className="">
        <div className="logo">
   <Image
      src={dlcLogo}
      alt="Picture of the author"
      // width={500} automatically provided
      // height={500} automatically provided
      // blurDataURL="data:..." automatically provided
      // placeholder="blur" // Optional blur-up while loading
      />  
      </div>
        </header>
  )
}

export default Header