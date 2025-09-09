interface Props {
    tech: string
}

export default function ProjectCardTag ({
    tech
}) {
    return (
        <div className="px-3 py-1 bg-[#D9D9D9] text-center shadow-[0px_4px_4px_rgba(0,0,0,0.15)] rounded-full
            text-md
            lg:text-lg
            xl:text-lg
        ">
            { tech }
        </div>
    )
}