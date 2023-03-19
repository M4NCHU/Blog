import Link from "next/link"

interface DropDownLinkProps {
    text: string
    // onClick?: ()=>{},
    style?: string
    link: string
}

const DropDownLink:React.FC<DropDownLinkProps> = ({text, style, link}) => {
    return (
        <Link href={link} className={`px-20  py-2 w-full rounded-lg  ${style !== "" && style ? style : "hover:bg-third-bg"}`}>
            {text}
        </Link>
    )
}

export default DropDownLink