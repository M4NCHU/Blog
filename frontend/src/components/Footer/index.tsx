import Image from "next/image"
import Logo from "../../resources/img/logo/diamond.png"
import FooterIcon from "./FooterIcon"
import FooterLink from "./FooterLink"
import { FaFacebookF } from 'react-icons/fa';
import { AiOutlineTwitter, AiFillLinkedin, AiFillYoutube } from 'react-icons/ai';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import ActiveLink from "../Links/Index";
import { useState } from "react";
import SiteImage from "../Others/SiteImage";

interface MenuItem {
    id: number;
    label: string;
    url: string;
}

interface Menu {
    menuItems: MenuItem[];
}

interface IconItem {
    id: number;
    icon: React.ReactNode
    css?: string
}

interface Icon {
    iconItems: IconItem[];
  }

interface FooterProps {
    
}

const Footer:React.FC<FooterProps> = () => {
    const current = new Date()
    const date = current.getFullYear()

    const [menu, setMenu] = useState<Menu>({
        menuItems: [
          {
            id: 1,
            label: 'Profile',
            url: '/profile',
          },
          {
            id: 2,
            label: 'About Us',
            url: '/',
          },
          {
            id: 3,
            label: 'Services',
            url: '/services',
          },
          {
            id: 4,
            label: 'Blog',
            url: '/blog',
          },
          {
            id: 5,
            label: 'Contact Us',
            url: '/contact',
          },
        ],
      });

      const [icons, setIcons] = useState<Icon>({
        iconItems: [
          {
            id: 1,
            icon: <BiDotsHorizontalRounded/>,
            css: "block lg:hidden",
          },
          {
            id: 2,
            icon: <FaFacebookF/>,
          },
          {
            id: 3,
            icon: <AiOutlineTwitter/>,
          },
          {
            id: 4,
            icon: <AiFillLinkedin/>,
          },
          {
            id: 5,
            icon: <AiFillYoutube/>,
          },
          
        ],
      });


    return (
        <footer className="footer flex flex-col p-6 justify-center  mt-14  px-4 md:px-6 lg:px-12 small:px-52 sticky top-[100vh]">
            <div className="flex flex-row justify-between">
                <div className="footer-logo hover:bg-primary-bg cursor-pointer p-1 rounded-full">
                    <SiteImage/>
                </div>
                <div className="footer-links text-third-font lg:flex flex-row justify-center items-center gap-6 hidden">
                    {menu.menuItems.map((item)=>(
                        <ActiveLink href={item.url} label={item.label} key={item.id} />
                    ))}

                    
                    
                </div>
                <div className="footer-socials flex flex-row justify-center items-center gap-4 flex-wrap" >

                    {icons.iconItems.map((item)=> (
                        <FooterIcon icon={item.icon} key={item.id} css={item.css ? item.css : ""}/>
                    ))}
                    
                </div>
            </div>
            <div className="footer-copyright text-third-font text-center mt-4">
                @ {date} Blog. All Rights Reserved
            </div>
            
        </footer>
    )
}

export default Footer