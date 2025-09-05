import ProjectCardTag from "./ProjectCardTag";

export default function ProjectCard () {
    return (
        <a href="/projects" className="block rounded-[50px]">
            <div className="
                group select-none bg-[#263349] 
                hover:border-[#83A9E6] hover:shadow-[0px_4px_9px_rgba(0,0,0,0.55)] hover:bg-[#3E5375] 
                border-[#374A69] border-2 rounded-[50px] pb-9 pt-[30px] px-9 flex min-h-60 
                lg:min-h-80 
                flex-col
            ">
                <div className="
                    flex items-center gap-3
                    text-2xl text-[#DFDFDF]
                    group-hover:text-[#89D2EF]
                    group-hover:opacity-85
                    font-bold
                    lg:text-3xl 
                    xl:text-4xl 
                    
                ">
                    <span> Golf Report </span>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="size-10 stroke-[1.75px] transform transition-transform duration-300 ease-out group-hover:translate-x-2">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3" />
                    </svg>            
                </div>
                <div className="text-lg lg:text-xl xl:text-2xl pt-3 text-[#B2B2B2] flex-grow">
                    This is a test to see how far I can take this whole thing for one more line to see what the vies abre okay besti
                </div>
                <div className="mt-4 flex flex-wrap gap-3">
                    <ProjectCardTag/>
                    <ProjectCardTag/>
                    <ProjectCardTag/>
                    <ProjectCardTag/>
                    <ProjectCardTag/>
                </div>
            </div>
        </a>
    )
}