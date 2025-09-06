import { useState } from "react";
import NavBar from "../components/NavBar";
import BetterNav from "../components/BetterNav";
import Footer from "../components/Footer";

export default function About() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="relative min-h-screen min-w-screen flex flex-col">
            <header className={`my-3 mx-8 flex justify-between items-center ${open ? 'my-5' : ''}`}>
                <h1 className={`${open ? 'sr-only hidden': ''} font-impact select-none text-[#DFDFDF] leading-none text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px]`}>ABOUT
                </h1>
                <NavBar screen="about"/>
                <BetterNav open={open} setOpen={setOpen} screen="about"/>
            </header>
            <main className="flex-grow">
                {/* desktop */}
                <section className="hidden sm:flex justify-between sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24" aria-labelledby="about-description">
                    <div className="w-2/5 ml-8">
                        <h2 id="about-description" className="sr-only">
                            About description
                        </h2>
                        <p className="font-arial text-[#DFDFDF] mr-3 sm:text-base md:text-lg lg:text-[22px] xl:text-2xl 2xl:text-3xl text-[32px] leading-snug">
                        Think about what it is you want out of this. how often can you say you built a website. let alone one that used everyting
                        </p>
                    </div>
                    <div className="sm:w-[55%] overflow-hidden items-end">
                        <img
                            className="w-full h-full object-fit object-bottom mix-blend-luminosity"
                            src="/images/chicago-skyline.jpg"
                            alt="Chicago skyline at sunrise" 
                        />
                    </div>
                </section>

                {/* mobile */}
                <section className="sm:hidden">
                    <div className="max-w-96 ml-16 my-16 mr-8">
                        <p className="font-arial text-[#DFDFDF] text-2xl leading-snug">
                            Think about what it is you want out of this. how often can you say you built a website. let alone one that used everyting
                        </p>
                    </div>
                    <div className="overflow-hidden">
                        <img
                            className="h-full object-cover mix-blend-luminosity"
                            src="/images/chicago-skyline.jpg"
                            alt="Chicago skyline at sunrise" 
                        />
                    </div>
                </section>
            </main>
             <Footer screen="about"/>
        </div>
    )
}