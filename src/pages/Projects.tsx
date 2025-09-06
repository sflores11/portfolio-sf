import { useState } from "react";
import NavBar from "../components/NavBar";
import ProjectCard from "../components/ProjectCard";
import BetterNav from "../components/BetterNav";
import Footer from "../components/Footer";

export default function Projects() {
    const [open, setOpen] = useState(false);

    return (
        <div className="relative min-h-screen min-w-screen flex flex-col">
            <header className={`my-3 mx-7 flex justify-between items-center ${open ? 'my-5' : ''}`}>
                <NavBar screen="project"/>
                <h1
                    id="page-title"
                    className={`font-impact select-none text-[#DFDFDF] leading-none relative inline-block
                    text-5xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl 2xl:text-[128px] ${open ? 'hidden': ''}`}
                >
                    PROJEC
                    <span className="inline-block align-middle max-xl:hidden" aria-hidden="true">
                        <span className="relative inline-block mx-1 
                            2xl:-translate-y-[112px] 2xl:w-[57.5px]
                            xl:-translate-y-[82.6px] xl:w-[43.2px]
                        ">
                            <span className="absolute top-0 left-0 bg-[#DFDFDF] 
                                2xl:w-[57.5px] 2xl:h-[21.26px]
                                xl:w-[43.2px] xl:h-[16.19px]
                            "></span>
                            
                        </span>
                    </span>
                    <span className="xl:hidden">
                        T
                    </span>
                    S
                </h1>
                <BetterNav open={open} setOpen={setOpen} screen="projects"/>
            </header>

            <span className="max-xl:hidden absolute bg-[#DFDFDF] h-full
                2xl:w-[26.3px] 2xl:right-[114px] 2xl:top-10
                xl:w-[19.74px] xl:right-[94px] max-2xl:translate-x-[0.5px] xl:top-6
            " aria-hidden></span>

            <main 
                id="main-content"
                aria-labelledby="projects"
                className="mx-14  mb-28 mt-8 grid gap-11 auto-rows-fr 
                grid-cols-1 md:grid-cols-2
                xl:ml-[100px] xl:mr-[214px] xl:gap-14
                2xl:ml-[200px] 2xl:mr-[340px] 2xl:mt-12   
            ">
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
                <ProjectCard/>
            </main>
            <Footer screen="projects"/>
        </div>
    )
}

