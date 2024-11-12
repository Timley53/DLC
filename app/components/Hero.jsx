import Image from 'next/image'
import React from 'react'
import DLCimg from "../rescources/dlc-logo.png"
import { BsChevronDoubleDown } from "react-icons/bs";
import Link from 'next/link';

function Hero() {
  return (
    <main className="w-full  h-[90vh] flex flex-col items-center justify-center ">

      <div className="welcomeT text-center">
        <span className="text-[4rem]">DopeLikeCoke's</span> <br /> Creative Services
      </div>

      <div className="intro w-[60%] text-center mt-10">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iusto nulla nisi vitae. Error, atque minima aperiam quas, nisi magni placeat eum autem reprehenderit ullam quae exercitationem quod assumenda fugiat dignissimos.
      </div>
      <Link href={'#skills'} className='learn_more absolute bottom-16 text-4xl text-bold'>
        <BsChevronDoubleDown/>
      </Link>

    </main>
  )
}

export default Hero