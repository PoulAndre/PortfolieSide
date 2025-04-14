import React from 'react'

function navigasjon() {
  return (
    <div className="flex h-15 w-screen justify-center shadow-lg p-2 bg-gradient-to-r from-gray-500 to-gray-900">
        <div className="flex p-3 justify-center space-x-5">
            <a href="#container2"className="text-s text-white hover:text-black font-Tektur">Om meg</a>
            <a href="#container3" className="text-s text-white hover:text-black font-Tektur">Ferdigheter</a>
            <a href="#container4" className="text-s text-white hover:text-black font-Tektur">Prosjekter</a>
            <a href="#container5" className="text-s text-white hover:text-black font-Tektur">Kontakt Info</a>
        </div>
    </div>
  )
}

export default navigasjon