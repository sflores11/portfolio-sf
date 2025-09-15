import { useState } from "react";
import NavBar from "../components/NavBar";
import BetterNav from "../components/BetterNav";
import Footer from "../components/Footer";
import AboutDesc from "../components/AboutDesc";

export default function About() {
    const [open, setOpen] = useState(false);
    
    return (
        <div className="relative min-h-screen-svh min-w-screen flex flex-col">
            <header className={`my-3 mx-8 flex justify-between items-center ${open ? 'my-5' : ''}`}>
                <h1 className={`${open ? 'sr-only hidden': ''} font-impact select-none text-[#DFDFDF] leading-none text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px]`}>ABOUT
                </h1>
                <NavBar screen="about"/>
                <BetterNav open={open} setOpen={setOpen} screen="about"/>
            </header>
            <main className="flex-grow">
                {/* desktop */}
                <section className="hidden landscape:sm:flex justify-between sm:mt-12 md:mt-16 lg:mt-20 xl:mt-24" aria-labelledby="about-description">
                    <div className="w-2/5 ml-8">
                        <AboutDesc/>
                    </div>
                    <div className="sm:w-[55%] overflow-hidden items-end">
                        <img
                            className="w-full h-full object-cover object-bottom mix-blend-luminosity"
                            src="/images/chicago-skyline.jpg"
                            alt="Chicago skyline at sunrise" 
                        />
                    </div>
                </section>

                {/* mobile */}
                <section className="sm:hidden" aria-labelledby="about-description">
                    <div className="max-w-96 mx-10 mt-4 mb-10">
                        <p className="font-arial text-[#DFDFDF] text-2xl leading-snug">
                            I'm fueled by my desire to create lasting solutions that go beyond an immediate fix. This has allowed me to balance business expectations and complex technological requirements to create practical and impactful solutions.
                            I enjoy building end-to-end full-stack solutions, from database design and backend APIs to intuitive front-end user experiences.
                            <br/>
                            <br/>
                            When I am not developing, you can find me admiring architecture, watching sports, or seeing the world through a viewfinder.
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
                {/* portrait */}
                <section className="hidden sm:portrait:flex flex-col justify-between" aria-labelledby="about-description">
                <div className="m-14 mt-8 lg:m-16 lg:mt-10 xl:m-20 xl:mt-14 2xl:m-24 2xl:mt-20">
                        <p className="font-arial text-[#DFDFDF] text-2xl lg:text-3xl xl:text-4xl 2xl:text-5xl leading-snug">
                            I'm fueled by my desire to create lasting solutions that go beyond an immediate fix. This has allowed me to balance business expectations and complex technological requirements to create practical and impactful solutions.
                            I enjoy building end-to-end full-stack solutions, from database design and backend APIs to intuitive front-end user experiences.
                            <br/>
                            <br/>
                            When I am not developing, you can find me admiring architecture, watching sports, or seeing the world through a viewfinder.
                        </p>
                    </div>
                    <div className="overflow-hidden">
                        <img
                            className="h-full w-full object-cover mix-blend-luminosity"
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