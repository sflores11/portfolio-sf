import { Dispatch, SetStateAction, useEffect, useState } from "react";
import { Link } from "react-router-dom";

interface Props {
    open?: boolean,
    setOpen?: Dispatch<SetStateAction<boolean>>
    screen: string
}

export default function BetterNav ({
    open, setOpen, screen
}: Props) {
    const [intOpen, setIntOpen] = useState(false);

    const isOpen = open ?? intOpen;
    const toggleOpen = setOpen ?? setIntOpen;

    useEffect(() => {
        const body = document.body;
    
        if (isOpen) {
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
    }, [isOpen]);

    useEffect(() => {
        const handleResize = () => {
          if (window.innerWidth >= 640) {
            toggleOpen(false);
          }
        };
        handleResize();
    
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);

    return (
        <>
            <h1 className={`text-[#DFDFDF] sm:hidden text-3xl font-impact transition duration-300 ease-in-out leading-none z-50 ${isOpen ? 'opacity-100': 'hidden pointer-events-none'}`}>SEBASTIAN FLORES</h1>
            <button 
                onClick={() => toggleOpen(!isOpen)} 
                className="sm:hidden relative my-2 flex flex-col justify-between w-[30px] h-4 z-50 focus:outline-none"
                aria-controls="mobile-menu"
                aria-expanded={isOpen}
                aria-label={isOpen ? "Close menu" : "Open menu"}
            >
                    <span className={`block h-[2px] w-full bg-[#DFDFDF] transform transition duration-300 ease-in-out ${isOpen ? 'rotate-45 translate-y-[7px]' : ''}`}/>
                    <span className={`block h-[2px] w-full bg-[#DFDFDF] transition duration-300 ease-in-out ${isOpen ? 'opacity-0' : ''}`}/>
                    <span className={`block h-[2px] w-full bg-[#DFDFDF] transform transition duration-300 ease-in-out ${isOpen ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
            </button>

            <nav
                id="mobile-menu"
                role="navigation"
                aria-hidden={!isOpen}
                className={`sm:hidden fixed inset-0 bg-[#1E293B] text-[#DFDFDF] z-40 flex flex-col items-center justify-center 
                transition-all duration-500 ease-in-out transform
                ${isOpen ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"}
            `}>
                <ul className="space-y-10 text-center z-50 text-4xl">
                    <li>
                        <Link 
                            to="/" 
                            className={`${screen === 'home' ? 'underline underline-offset-4' : ''}`}
                            aria-current={screen === 'home' ? "page" : undefined} 
                            onClick={() => toggleOpen(false)}
                        >
                            home
                        </Link>
                    </li>
                    <li>
                        <Link to="/projects" aria-current={screen === 'home' ? "page" : undefined} className={`${screen === 'projects' ? 'underline underline-offset-4' : ''}`} onClick={() => toggleOpen(false)}>
                            projects
                        </Link>
                    </li>
                    <li>
                        <Link to="/about" aria-current={screen === 'home' ? "page" : undefined} className={`${screen === 'about' ? 'underline underline-offset-4' : ''}`} onClick={() => toggleOpen(false)}>
                            about
                        </Link>
                    </li>
                    <li>
                        <a href="/documents/Sebastian_Flores_Resume_25.0.pdf" download="Sebastian_Flores_Resume.pdf" >
                            resume
                        </a>
                    </li>
                </ul>
            </nav>
        </>
    )
}