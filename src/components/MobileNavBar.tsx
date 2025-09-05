import { useEffect, useState } from "react"
import { Link } from "react-router-dom";

interface Props {
    screen: string,
}

export default function MobileNavBar({
    screen
}: Props) {
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
        <div className={`flex items-center justify-between ${open ? 'justify-between' : ''} xl:hidden`}>
            <button onClick={() => setOpen(!open)} className="relative my-2 flex flex-col justify-between w-[30px] h-4 z-50 focus:outline-none">
                <span className={`block h-[2px] w-full bg-[#DFDFDF] transform transition duration-300 ease-in-out ${open ? 'rotate-45 translate-y-[7px]' : ''}`}/>
                <span className={`block h-[2px] w-full bg-[#DFDFDF] transition duration-300 ease-in-out ${open ? 'opacity-0' : ''}`}/>
                <span className={`block h-[2px] w-full bg-[#DFDFDF] transform transition duration-300 ease-in-out ${open ? '-rotate-45 -translate-y-[7px]' : ''}`}/>
            </button>
            <h1 className={`text-[#DFDFDF] text-3xl font-impact transition duration-300 ease-in-out leading-none z-50 ${open ? 'opacity-100': 'hidden pointer-events-none'}`}>SEBASTIAN FLORES</h1>
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
        </div>
    )
}