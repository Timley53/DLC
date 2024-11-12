import React from 'react'
// import Vdg from "../rescources/videography.jpg"
import { LuMoveRight } from "react-icons/lu";
import SkillBtn from './SkillBtn';

function Skilss() {
  return (
    <>
    <section className="h-screen w-full flex  " id="skills">

      <div className="container h-[70vh] w-[80%] max-w-[900px]  flex p-2  m-auto justify-between">

        <div className="videography  w-[48%] relative overflow-hidden">
          <div className="overlay absolute transition-all top-0 bg-black w-full h-full opacity-70 backdrop-blur-md"/>
           <SkillBtn skill={"Videogrpahy"}/>
        </div>


        <div className="2nd_and w-[48%]">

        <div className="content_creation h-[48%] relative overflow-hidden  my-2"> 
        <div className="overlay absolute transition-all top-0 bg-black w-full h-full opacity-70 backdrop-blur-md"/>
        <SkillBtn skill={"Content Creation"}/>
        </div>
        <div className="video_editing h-[48%] relative overflow-hidden  my-2">
        <div className="overlay absolute transition-all top-0 bg-black w-full h-full opacity-70 backdrop-blur-md"/>
        <SkillBtn skill={"Video Editing"}/>
        </div>

        </div>
      </div>


    </section>

    <section className="skils_contd h-[50vh] w-[80%] max-w-[900px]  flex p-2  m-auto my-4">

      <div className="drone_pilot_bg w-full h-full relative overflow-hidden">
      <div className="overlay absolute transition-al duration-[2s] top-0 bg-black right-0 w-full h-full opacity-70 backdrop-blur-md"/>
      <SkillBtn skill={"Drone pilot"}/>
      </div>

    </section>

    </>
  )
}

export default Skilss