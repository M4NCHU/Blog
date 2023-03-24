import Link from "next/link"

interface FooterLinkProps {
    site: string
    text: string
}

const FooterLink:React.FC<FooterLinkProps> = ({site, text=""}) => {
    return (
        <>
            <Link href={site} className="hover:text-second-font">
                {text}
            </Link>
        </>
    )
}

export default FooterLink