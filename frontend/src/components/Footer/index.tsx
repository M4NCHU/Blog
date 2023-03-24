import Image from "next/image"
import Logo from "../../resources/img/logo/diamond.png"
import FooterIcon from "./FooterIcon"
import FooterLink from "./FooterLink"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';


interface FooterProps {
    
}

const Footer:React.FC<FooterProps> = () => {
    const current = new Date()
    const date = current.getFullYear()

    return (
        <footer className="footer flex flex-col p-6 justify-center  mt-14  px-4 md:px-6 lg:px-12 small:px-52 sticky top-[100vh]">
            <div className="flex flex-row justify-between">
                <div className="footer-logo hover:bg-primary-bg cursor-pointer p-1 rounded-full">
                    <Image src={Logo} width={36} height={36} alt="Logo of blog site" className="min-h-[36px] min-w-[36px]"/>
                </div>
                <div className="footer-links text-third-font lg:flex flex-row justify-center items-center gap-6 hidden">
                    <FooterLink site="/" text ="About"/>
                    <FooterLink site="/" text ="Contact"/>
                    <FooterLink site="/" text ="Adverts"/>
                    <FooterLink site="/" text ="Privacy policy"/>
                    <FooterLink site="/" text ="Terms of use"/>
                    
                </div>
                <div className="footer-socials flex flex-row justify-center items-center gap-4 flex-wrap" >

                    <FooterIcon icon={<BiDotsHorizontalRounded/>} css="block lg:hidden"/>
                    <FooterIcon icon={<FaFacebookF/>}/>
                    <FooterIcon icon={<AiOutlineTwitter/>}/>
                    <FooterIcon icon={<AiFillLinkedin/>}/>
                    <FooterIcon icon={<AiFillYoutube/>}/>
                </div>
            </div>
            <div className="footer-copyright text-third-font text-center mt-4">
                @ {date} Blog. All Rights Reserved
            </div>
            
        </footer>
    )
}

export default Footer