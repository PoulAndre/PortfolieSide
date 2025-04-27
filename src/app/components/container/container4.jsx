import React from 'react'
import sjakk from "./sjakk.png"
import nettside from "./nettside.png"
import kalk from "./kalk.png"
import Image from "next/image"


function container4() {
  return (
    
    <section id="container4"className="shadow-lg flex flex-col items-center justify-center h-auto bg-gradient-to-r from-gray-600 to-black p-8 max-w-full">
    <div className="w-full sm:w-1/2 mb-8 sm:mb-0 flex justify-center mt-60 max-w-full">
        
    </div>
    
    <div className="w-full sm:w-1/2 text-center rounded-lg">
        <h2 className="text-white text-5xl font-bold mb-6 font-Tektur">Prosjekter</h2>
        
          <div className="flex h-full items-top align-middle">
                    <ul className="flex flex-col list-none w-full m-2">
                      <li className="flex m-4 h-[9em] max-w-full space-x-4">
                        <div className="w-full h-full border-2 rounded-lg p-4"><a href="https://github.com/EvenR98/Gruppe11-sjakktrener?tab=readme-ov-file" target="_blank"><Image src={sjakk} alt="sjakk" className="flex w-full h-full object-contain bg-white rounded-xl"></Image></a></div>
                        <div className="w-full h-full border-2 rounded-lg p-4"><a href="https://github.com/PoulAndre/testside.github.io" target="_blank"><Image src={nettside} alt="nettside" className="flex w-full h-full object-contain bg-white rounded-xl"></Image></a></div>
                        <div className="w-full h-full border-2 rounded-lg p-4"><a href="" target="_blank"><Image src={kalk} alt="kalkulator" className="flex w-full h-full object-contain bg-white rounded-xl"></Image></a></div>
                        <div className="w-full h-full border-2 rounded-lg p-4">Vær-app</div>
                      </li>
                     
                    
        
                    </ul>
                  </div>

                   

                  

    </div>
</section>


  )
}

export default container4