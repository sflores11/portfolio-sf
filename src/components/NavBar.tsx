import { Link } from "react-router-dom";

interface Props {
    screen: string
}

export default function NavBar({
    screen
}: Props) {
    let defaultNav; 
    if (screen === 'home') {
        defaultNav = "text-lg flex space-x-8 max-sm:hidden sm:text-xl sm:space-x-8 md:text-2xl md:space-x-12 lg:text-[28px] lg:space-x-16 xl:text-[30px] xl:space-x-24 2xl:text-[34px] 2xl:space-x-40";
    } else {
        defaultNav = "hidden sm:flex sm:text-lg sm:space-x-8  md:text-xl md:space-x-12 lg:text-2xl lg:space-x-16 xl:text-3xl xl:space-x-24 2xl:text-4xl 2xl:space-x-32";
    }

    return (
        <nav className={`group
            font-arial text-[#DFDFDF] ${defaultNav}`}    
        >
            <Link className="transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100" to="/">home</Link>
            <Link className="transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100" to="/projects">projects</Link>
            <Link className="transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100" to="/about">about</Link>
            <a className="transition-opacity duration-200 group-hover:opacity-50 hover:!opacity-100" href="/documents/Sebastian_Flores_Resume_25.0.pdf" download="Sebastian_Flores_Resume.pdf">resume</a>
        </nav>
    )
}