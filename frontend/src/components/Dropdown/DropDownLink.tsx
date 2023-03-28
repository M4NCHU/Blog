import Link from "next/link"

interface DropDownLinkElementProps {
    text: string
    // onClick?: ()=>{},
    style?: string
    link: string
    linkIcon?: any;
}

const DropDownLinkElement:React.FC<DropDownLinkElementProps> = ({text, style, link, linkIcon, ...props}) => {
    return (
        <Link href={link} className={`px-8  py-2 w-full rounded-lg flex justify-center items-center gap-2  ${style !== "" && style ? style : "hover:bg-third-bg"}`} {...props}>
            {linkIcon && linkIcon}
            {text}
        </Link>
    )
}

export default DropDownLinkElement