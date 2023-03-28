import Logo from "../../resources/img/logo/diamond.png"
import Image from 'next/image'
import { BsSun,  BsBookmarks} from 'react-icons/bs';
import { BiDotsHorizontalRounded, BiLogIn } from 'react-icons/bi';
import { AiFillSetting, AiOutlineLike, AiOutlineSearch } from 'react-icons/ai';
import HeaderButton from "./Button";
import IconButton from "./Icon";
import Link from "next/link";
import { Session } from "next-auth";
// import DropDownMenu from "./DropDownMenu/DropDownMenu";
import { useRef, useState } from "react";
import dynamic from "next/dynamic";
import { signOut, useSession } from "next-auth/react";
import DropDownMenuElement from "../Dropdown/DropDownMenu";
import DropdownLiElement from "../Dropdown/DropdownLi";
import DropDownLinkElement from "../Dropdown/DropDownLink";
import useDropdownMenu from "@/util/useDropdownMenu";
import Button from "../Button";
import Cloud from "../Others/cloud";

interface HeaderProps {
    session: Session | null
}

interface MenuItem {
  id: number;
  label: string;
  url: string;
}

interface Menu {
  menuItems: MenuItem[];
}

const Header:React.FC<HeaderProps> = ({session}) => {
    const {data:user} = useSession()
    

    const { isOpen, handleToggle, dropdownRef, buttonText, buttonIcon } = useDropdownMenu({
        buttonIcon: <BiDotsHorizontalRounded/>,
      });

      const DropDownMenuElement = dynamic(()=>import("../Dropdown/DropDownMenu"), {
        loading: () => <div>Loading...</div>,
      })

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
            url: '/about',
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

    return (
        
        //------------------ HEADER -----------------//
        <header className="site-header bg-second-bg p-2 flex flex-row justify-between items-center px-4 xd:px-52 lg:px-40 py-2.5 sticky top-0 z-50">
            
            {/* Header logo */}
            <div className="header-logo hover:bg-primary-bg cursor-pointer p-1 rounded-full relative group">
                <Link href="/">
                    
                    <Image src={Logo} width={36} height={36} alt="Logo of Maciej Szwast blog site" className="min-h-[36px] min-w-[36px]"/>
                </Link>
                <Cloud text="Home page" />
                        
                
            </div>

            {/* header nav */}
            <div className="header-nav flex flex-row justify-center items-center gap-2">
                <form action="" method="post" className="header-search-form mdcd :mr-4 relative">
                    <div className="md:flex hidden">
                        <AiOutlineSearch className="text-primary-font text-xl absolute top-[0.6rem] left-2"/>
                        <input placeholder="Type to search..." className="Header-input text-primary-font bg-third-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm pl-10 pr-2 py-2.5 focus:outline-none"/>
                    </div>
                    <Link href="/" className="block md:hidden">
                        <IconButton icon={<AiOutlineSearch/>}/>
                    </Link>
                    
                </form>

                <div className="header-links flex flex-row justify-center items-center gap-2 flex-wrap">
                    <Link href="/profile">
                        <IconButton icon={<BsSun/>}/>
                    </Link>
                    <Link href="/about">
                        <IconButton icon={<BsBookmarks/>}/>
                    </Link>
                </div>

                <div className="header-button ml-4 re">
                    {!session ? (
                        <Link href="/login">
                            <HeaderButton text="login" icon={<BiLogIn/>}/>
                        </Link>
                    ) : (
                        <>
                        <div className="drop-down-menu relative" ref={dropdownRef}  >
                            <Image src={user?.user.image ? user?.user.image as string : Logo} width={36} height={36} alt={`${user?.user.username} profile image`} className="min-h-[36px] min-w-[36px] cursor-pointer rounded-full" onClick={handleToggle}/>

                            <DropDownMenuElement isOpen={isOpen}>
                            {menu.menuItems.map((menuItem) => (
                                <DropdownLiElement key={menuItem.id}>
                                    <DropDownLinkElement text={menuItem.label} link={menuItem.url} />
                                </DropdownLiElement>
                            ))}
                                
                                <DropdownLiElement>
                                    <Button variant="warning" size="small" addClass="w-full" onClick={signOut}>
                                        logout
                                    </Button>
                                </DropdownLiElement>
                            </DropDownMenuElement>

                            {/* <DropDownMenu isOpen={isOpen} session={session}/> */}
                            {/* <HeaderButton text="login" icon={<BiLogIn/>} onClick={()=>signOut()}/> */}
                        </div>
                        </>
                        
                    )}
                    
                </div>

            </div>
        </header>
    )
}

export default Header