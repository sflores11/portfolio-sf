import { Link } from "react-router-dom";
import InfinateName from "../components/InfiniteName";
import NavBar from "../components/NavBar";
import BetterNav from "../components/BetterNav";
import { useState } from "react";

export default function Home () {
    const [open, setOpen] = useState(false);

    return (
        <div className="min-h-screen flex flex-col">
            {/* mobile */}
            <header className="items-center sm:hidden">
                <nav className={`my-5 flex ${open ? 'justify-between' : 'justify-end'} items-center mx-8`} aria-label="Main Navigation">
                    <BetterNav open={open} setOpen={setOpen} screen="home"/>
                </nav>
                <h1 className="sr-only">Sebastian Flores - Software Engineer</h1>
                <p className="font-arial text-[#DFDFDF] text-[28px] leading-[30px] text-center">
                    Software Engineer <br/> using code to make <br/> people's lives easier. <br/>
                    <Link to="/projects" className="underline">view my projects</Link>
                </p>
                <div className="absolute  bottom-0 w-full" aria-hidden="true">
                    <InfinateName/>
                </div>
            </header>

            {/* desktop */}
            <div className="hidden sm:flex flex-col justify-between min-h-screen">
                <header className="App-header">
                    <h1 className="
                            font-impact select-none text-[#DFDFDF] 
                            sm:text-[135px] sm:leading-[120px] sm:tracking-[1px] 
                            md:text-[175px] md:leading-[150px] md:tracking-[-1px] 
                            lg:text-[225px] lg:leading-[195px] lg:tracking-[-3px]
                            xl:text-[272px] xl:leading-[235px] xl:tracking-[-5px]
                            2xl:text-[350px] 2xl:leading-[300px] 2xl:tracking-[-5px]
                        ">
                        SEBASTIAN <br/> FLORES
                    </h1>
                </header>

                <main className="flex justify-between m-7 items-end">
                    <NavBar screen="home"/>

                    <p className="font-arial text-[#DFDFDF] text-xl md:text-3xl lg:text-[36px] leading-snug text-right">
                        Software Engineer <br /> who believes code should <br/> make people's lives easier. <br/> <Link to="/projects" className="underline">view my projects</Link>
                    </p>
                </main>
            </div>
            
        </div>
    )
}