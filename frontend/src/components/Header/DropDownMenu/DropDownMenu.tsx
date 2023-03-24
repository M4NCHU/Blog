import DropDownLink from "./DropDownLink"
import { signOut } from "next-auth/react";
import { BsFillTriangleFill } from "react-icons/bs";
import DropdownLi from "./DropdownLi";
import Link from "next/link";
import ProfileImg from "../../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"
import Image from "next/image";
import { Session } from "next-auth";




interface DropDownMenuProps {
    isOpen: boolean
    session: Session
}

const DropDownMenu:React.FC<DropDownMenuProps> = ({isOpen, session}) => {
    const {user:{name, image, username}} = session

    return (
<>
        {isOpen && (
            <div className="drop-down absolute right-1 top-14 z-50">
                <ul className="dropdown-list bg-forth-bg shadow-lg flex flex-col px-2 py-2 border-third-bg rounded-lg relative gap-2">
                    <BsFillTriangleFill className="absolute -top-3 right-1 text-forth-bg shadow-lg"/>
                    <DropdownLi>
                    
                        <Link href="/profile" className="px-4  py-2 w-full rounded-lg flex flex-row justify-center items-center hover:bg-third-bg gap-4" >
                            <div style={{width: '2rem', height: '2rem', position: 'relative'}}>
                                <Image fill alt="profile image" src={image as string} className="w-8 h-8 rounded-full opacity-90 hover:opacity-100 cursor-pointer" />
                            </div>
                            <p className="m-0">
                                {username ? username : name}
                            </p>
                        </Link>
                    </DropdownLi>
                    <DropdownLi>
                        <DropDownLink text="Posts" link="/profile"/>
                    </DropdownLi>
                    <DropdownLi>
                        <DropDownLink text="Messages" link="/profile"/>
                    </DropdownLi>
                    <DropdownLi>
                        <DropDownLink text="Settings" link="/profile"/>
                    </DropdownLi>
                    <DropdownLi>
                        <button className={`w-full py-2 rounded-lg bg text-black bg-primary-warning hover:bg-second-warning`} onClick={()=>signOut()}>
                            Logout
                        </button>
                    </DropdownLi>
                    
                    {/* <DropDownBtn text="logout" onClick={signOut()}/> */}
                </ul>
            </div>
        )}
</>
        
        
    )
}

export default DropDownMenu