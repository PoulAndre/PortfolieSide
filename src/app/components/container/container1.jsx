import React from 'react'
import meg1 from "./meg.png"
import github from "./github.png"
import linkedin from "./linkedin.png"
import Image from "next/image"

function container1() {
  return (
    
    <section id="container1"className="shadow-lg flex flex-col items-center justify-center h-auto p-8 max-w-full bg-gradient-to-r from-gray-600 to-black">
    <div className="w-full sm:w-[400px] mb-8 sm:mb-0 flex justify-center mt-40 max-w-full relative group">
        <Image src={meg1} alt="meg" className="w-52 h-56 rounded-full shadow-lg transition-transform duration-500 transform group-hover:scale-125 mb-10"/>
        
        <div className="absolute inset-0 flex justify-around group-hover:opacity-100 transition-all duration-700">
            <div className="absolute top-0 left-5 w-[42px] h-[27px] bg-red-600 rounded-t-2xl transform scale-0 group-hover:scale-150 group-hover: delay-75 transition-all duration-500 border-black border-2 shadow-lg shadow-white"></div>
            <div className="absolute top-10 left-5 w-[42px] h-[27px] bg-white rounded-b-2xl transform scale-0 group-hover:scale-150 group-hover: delay-75 transition-all duration-500 border-black border-2"></div>
            <div className="absolute top-6 left-[30px] w-[20px] h-[20px] bg-white rounded-xl transform scale-0 group-hover:scale-150 group-hover: delay-75 transition-all duration-500 border-2 border-black"></div>
    </div>
    
    </div>
    <div className="w-full sm:w-1/2 text-center ">
        <h2 className="text-white text-5xl font-bold mb-6 font-Tektur">Poul André G. Røinaas</h2>
        <h3 className="text-white text-2xl font-bold mb-6 font-Tektur">-- FRONTEND UTVIKLER --</h3>
        <ul className="pl-5 text-lg text-white list-none font-Tektur">
            <li className="pb-2 font-light text-2xl text-white font-Tektur">Hei! Jeg er på utkikk etter en front-end utvikler jobb. </li>
            <li className="pb-2 font-light text-2xl text-white font-Tektur">Jeg er glad i design og utvikling, som UI/UX og generelt lage nettsider
            </li>
            <li className="pb-2 font-light text-2xl text-white font-Tektur">Ønsker du å bli bedre kjent med meg?</li>
            <li className="pb-2 font-light text-2xl text-white font-Tektur">Lengre ned finner du mer informasjon</li>
            <div className="w-full sm:w-1/2 mb-2 sm:mb-0 flex justify-center mt-8 max-w-full items-center space-x-4 mx-auto">
              <a href="https://github.com/PoulAndre">
              <Image src={github} alt="gh" className="w-12 h-auto rounded-full shadow-lg hover:shadow-zinc-600" />
              </a>
              <a href="https://www.linkedin.com/in/poul-r%C3%B8inaas-174b41345/">
              <Image src={linkedin} alt="li" className="w-12 h-auto rounded-full shadow-lg hover:shadow-zinc-600" />
              </a>
            
            </div>
        </ul>
    </div>


</section>


  )
}

export default container1