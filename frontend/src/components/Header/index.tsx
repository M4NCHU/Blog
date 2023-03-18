import Logo from "../../resources/img/logo/diamond.png"
import Image from 'next/image'
import { BsSun,  BsBookmarks} from 'react-icons/bs';
import { BiLogIn } from 'react-icons/bi';
import { AiOutlineSearch } from 'react-icons/ai';
import HeaderButton from "./Button";
import IconButton from "./Icon";
import Link from "next/link";

interface HeaderProps {

}

const Header:React.FC<HeaderProps> = () => {
    return (
        
        //------------------ HEADER -----------------//
        <header className="site-header bg-second-bg p-2 flex flex-row justify-between items-center px-4 xd:px-52 lg:px-40 py-2.5 sticky top-0 z-50">
            
            {/* Header logo */}
            <div className="header-logo hover:bg-primary-bg cursor-pointer p-1 rounded-full">
                <Link href="/">
                    <Image src={Logo} width={36} height={36} alt="Logo of blog site" className="min-h-[36px] min-w-[36px]"/>
                </Link>
            </div>

            {/* header nav */}
            <div className="header-nav flex flex-row justify-center items-center ">
                <form action="" method="post" className="header-search-form mdcd :mr-4 relative">
                    <div className="md:flex hidden">
                        <AiOutlineSearch className="text-primary-font text-xl absolute top-[0.6rem] left-2"/>
                        <input placeholder="Type to search..." className="Header-input text-primary-font bg-third-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm pl-10 pr-2 py-2.5 focus:outline-none"/>
                    </div>
                    <Link href="/" className="block md:hidden">
                        <IconButton icon={<AiOutlineSearch/>}/>
                    </Link>
                    
                </form>

                <div className="header-links flex flex-row justify-center items-center flex-wrap">
                    <Link href="/profile">
                        <IconButton icon={<BsSun/>}/>
                    </Link>
                    <Link href="/about">
                        <IconButton icon={<BsBookmarks/>}/>
                    </Link>
                </div>

                <div className="header-button ml-4">
                    <Link href="/login">
                        <HeaderButton text="login" icon={<BiLogIn/>}/>
                    </Link>
                </div>

            </div>
        </header>
    )
}

export default Header