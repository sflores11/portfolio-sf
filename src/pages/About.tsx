import { useEffect, useState } from "react";
import NavBar from "../components/NavBar";
import { Link } from "react-router-dom";

export default function About() {
    
    return (
        <>
            <div className="my-3 mx-8 flex justify-between items-center">
                <h1 className="font-impact select-none text-[#DFDFDF] leading-none text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px]">ABOUT
                </h1>
                <NavBar screen="about"/>
                
            </div>
            <div className="hidden sm:flex justify-between sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24">
                <div className="w-2/5 ml-8">
                    <p className="font-arial text-[#DFDFDF] mr-3 sm:text-base md:text-lg lg:text-[22px] xl:text-2xl 2xl:text-3xl text-[32px] leading-snug">
                       Think about what it is you want out of this. how often can you say you built a website. let alone one that used everyting
                    </p>
                </div>
                <div className="sm:w-[55%] overflow-hidden items-end">
                    <img
                        className="w-full h-full object-fit object-bottom mix-blend-luminosity"
                        src="/images/chicago-skyline.jpg"
                        alt="chicago-sunrise" 
                    />
                </div>
            </div>
            <div className="sm:hidden max-w-96 ml-16 my-16 mr-8">
                <p className="font-arial text-[#DFDFDF] text-2xl leading-snug">
                    Think about what it is you want out of this. how often can you say you built a website. let alone one that used everyting
                </p>
            </div>
            <div className="sm:hidden overflow-hidden">
                <img
                    className="h-full object-fit mix-blend-luminosity"
                    src="/images/chicago-skyline.jpg"
                    alt="chicago-sunrise" 
                />
             </div>
        </>
    )
}