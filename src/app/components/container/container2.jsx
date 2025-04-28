import React from 'react'
import meme from "./meme.png"
import Image from "next/image"




function container2() {
  return (
    
    <section id="container2"className="shadow-lg flex flex-col items-center justify-center h-auto bg-gradient-to-r from-gray-600 to-black p-8 max-w-full">
    <div className="w-full sm:w-1/2 mt-22 sm:mb-0 flex justify-center mt-60 max-w-full">
        
    </div>
    
    <div className="w-full sm:w-1/2 text-center rounded-lg mb-2">
        <h2 className="text-white text-5xl font-bold mb-6 font-Tektur">Om Meg</h2>
        <ul className="pl-5 text-lg text-white list-none">
            <li className="font-extralight text-xl text-white font-Tektur">Hei! Mitt navn er Poul André Grevsen Røinaas, jeg er 24 år gammel og er født og oppvokst i Kristiansand, hvor jeg også bor fremdeles.</li>
        </ul>
        <div className="flex justify-center space-x-10 mt-8">
          <div className="flex-1 h-auto w-auto rounded-lg p-10">
            <h2 className="font-Tektur text-2xl text-white underline mb-8">Studier og Arbeidserfaring</h2>
              <p className="mt-4 font-Tektur text-white text-xl">For tiden tar jeg opp et fag fra studiet jeg går som er It og Informasjonssystemer på USN, og jeg jobber midlertidlig hos Neumann Mandal</p>
          </div>
          <div className="flex-1 h-auto w-auto rounded-lg p-10">
            <h2 className="font-Tektur text-2xl text-white underline mb-8">Fritid og Personlige interesser</h2>
              <p className="mt-4 font-Tektur text-white text-xl">Når jeg ikke er på jobb eller holder på med skolearbeid, så liker jeg å trene, spille fribeegolf, gaming og gå på sosiale-happenings.</p>
          </div>
        </div>

        <div className="flex justify-center">
        <Image src={meme} alt={meme} className="flex w-auto h-72 rounded-lg opacity-0 hover:opacity-50"></Image>
        </div>

        


    </div>

    

   


    
</section>


  )
}

export default container2