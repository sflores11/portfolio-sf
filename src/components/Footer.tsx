interface Props {
    screen: string
}

export default function Footer({
    screen,
}: Props) {
    return(
        <footer>
            <p className={`mx-7 mb-5 ${screen === 'projects' ? 'xl:mb-0' : ''} text-sm text-[#B2B2B2]`}>
                Built with <span className="text-[#DFDFDF]">Next.js</span> and <span className="text-[#DFDFDF]">Tailwind CSS</span>. Deployed with <span className="text-[#DFDFDF]">Vercel</span>.
            </p>
        </footer>
    )
}