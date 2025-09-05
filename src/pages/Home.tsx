import { Link } from "react-router-dom";
import InfinateName from "../components/InfiniteName";
import NavBar from "../components/NavBar";
import MobileNavBar from "../components/MobileNavBar";
import { useEffect, useState } from "react";

export default function Home () {
    const [open, setOpen] = useState(false);

    useEffect(() => {
            const body = document.body;
        
            if (open) {
                body.classList.add("overflow-hidden");
        
                // prevent iOS touch scroll "rubber band"
                const preventScroll = (e: TouchEvent) => e.preventDefault();
                document.addEventListener("touchmove", preventScroll, { passive: false });
        
                return () => {
                body.classList.remove("overflow-hidden");
                document.removeEventListener("touchmove", preventScroll);
                };
            } else {
                body.classList.remove("overflow-hidden");
            }
        }, [open]);

    return (
        <div className="min-h-screen flex flex-col">
            <div className="items-center sm:hidden">
                <nav className={`my-5 mx-8 flex items-center  ${open ? 'justify-between': 'justify-end'} `}>
                    <h1 className={`text-[#DFDFDF] text-3xl font-impact transition duration-300 ease-in-out leading-none z-50 ${open ? 'opacity-100': 'hidden pointer-events-none'}`}>SEBASTIAN FLORES</h1>
                    <button onClick={() => setOpen(!open)} className="relative my-2 flex flex-col justify-between w-[30px] h-4 z-50 focus:outline-none">
                            <span className={`block h-[2px] w-full bg-[#DFDFDF] transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-[7px]' : ''}`}/>
                            <span className={`block h-[2px] w-full bg-[#DFDFDF] transition duration-300 ease-in-out ${open ? 'opacity-0' : ''}`}/>
                            <span className={`block h-[2px] w-full bg-[#DFDFDF] transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
                    </button>

                    <div
                    className={`fixed inset-0 bg-[#1E293B] text-[#DFDFDF] z-40 flex flex-col items-center justify-center 
                        transition-all duration-500 ease-in-out transform
                        ${open ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
                    `}>
                        <ul className="space-y-10 text-center z-50 text-4xl">
                            <li>
                                <Link to="/" onClick={() => setOpen(false)}>
                                    home
                                </Link>
                            </li>
                            <li>
                                <Link to="/projects" onClick={() => setOpen(false)}>
                                    projects
                                </Link>
                            </li>
                            <li>
                                <Link to="/about" onClick={() => setOpen(false)}>
                                    about
                                </Link>
                            </li>
                            <li>
                                <a href="" onClick={() => setOpen(false)}>
                                    resume
                                </a>
                            </li>
                        </ul>
                    </div>
                </nav>
                <p className="font-arial text-[#DFDFDF] text-[28px] leading-[30px] text-center">
                    Software Engineer <br/> using code to make <br/> people's lives easier. <br/>
                    <Link to="/projects" className="underline">view my projects</Link>
                </p>
                <div className="absolute  bottom-0 w-full">
                    <InfinateName/>
                </div>
            </div>

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

                <div className="flex justify-between m-7 items-end">
                    <NavBar screen="home"/>

                    <p className="font-arial text-[#DFDFDF] text-xl md:text-3xl lg:text-[36px] leading-snug text-right">
                        Software Engineer <br /> who believes code should <br/> make people's lives easier. <br/> <Link to="/projects" className="underline">view my projects</Link>
                    </p>
                </div>
            </div>
            
        </div>
    )
}