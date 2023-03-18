import Link from "next/link"



interface ProfileLinkProps {
    text: string
    href: string
}

const ProfileLink:React.FC<ProfileLinkProps> = ({text, href}) => {
    return (    
       <Link href={href} className="text-third-font text-sm flex items-center hover:text-primary-font">
            {text}
       </Link>
    )
}

export default ProfileLink