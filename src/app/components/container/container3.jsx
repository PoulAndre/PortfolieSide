import React from 'react'
import java from "./java.png"
import html from "./html.png"
import css from "./css.png"
import tailwind from "./tailwind.png"
import mysql from "./mysql.png"
import javascript from "./javascript.png"
import figma from "./figma.png"
import git from "./git.png"
import powershell from "./powershell.png"
import mongodb from "./mongodb.png"
import react from "./react.png"
import firebase from "./firebase.png"
import sql from "./sql.png"
import arcgis from "./arcgis.png"
import Image from "next/image"



function container3() {
  return (
    
    <section id="container3"className="shadow-lg flex flex-col items-center justify-center h-auto bg-gradient-to-r from-gray-600 to-black p-8 max-w-full">
    <div className="w-full sm:w-1/2 mb-8 sm:mb-0 flex justify-center mt-50 max-w-full">
        
    </div>
    
    <div className="w-full sm:w-1/2 text-center rounded-lg">
        <h2 className="text-white text-5xl font-bold mb-6 font-Tektur">Ferdigheter</h2>
        <p className="mt-8 text-lg font-Tektur">Under er alle ferdighetene jeg har jobbet med tidligere gjennom skolegangen og privat. Jeg er bedre egnet og kjent med noen av verktøy/programmeringsspråk enn andre. </p>
        <p className="mb-5 text-lg font-Tektur">Jeg lærer raskt og jeg er alltid motivert til å forbedre og lære nye ferdigheter på forskjellige områder. 
          Gjennom tidligere arbeid har jeg lært meg å tilpasse meg til å bli mer effektiv og raskere ved bruk av ulike verktøy</p>
        
          <div className="flex h-full items-top align-middle">
            <ul className="flex flex-col list-none w-full m-2">
              <li className="flex m-4 h-[9em] w-full space-x-4">
                <div className="w-full h-full rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={java} alt="java" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={html} alt="html" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={css} alt="css" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={tailwind} alt="tailwind" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={mysql} alt="sql" className="w-full h-full object-contain"></Image></div>
              </li>
              <li className="flex m-4 h-[9em] w-full space-x-4">
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={javascript} alt="javascript" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={figma} alt="figma" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={git} alt="git" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={powershell} alt="powershell" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={mongodb} alt="mongodb" className="w-full h-full object-contain"></Image></div>
              </li>
              <li className="flex m-4 h-[9em] w-full space-x-4">
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={react} alt="react" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={firebase} alt="firebase" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={sql} alt="sql" className="w-full h-full object-contain"></Image></div>
                <div className="w-full h-full border-2 rounded-lg p-4 opacity-70 hover:opacity-100 hover:scale-110 duration-200 transition-all"><Image src={arcgis} alt="arcgis" className="w-full h-full object-contain"></Image></div>
               
              </li>

            </ul>
          </div>
        
        
    </div>
</section>


  )
}

export default container3