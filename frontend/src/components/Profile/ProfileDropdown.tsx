
import { BiDotsHorizontalRounded } from "react-icons/bi";
import useDropdownMenu from "@/util/useDropdownMenu";
import DropdownLiElement from "../Dropdown/DropdownLi";
import DropDownLinkElement from "../Dropdown/DropDownLink";
import { AiFillSetting, AiOutlineLike } from "react-icons/ai";
import dynamic from "next/dynamic";


interface ProfileProps {
    
}

const ProfileDropdown:React.FC<ProfileProps> = () => {
    const { isOpen, handleToggle, dropdownRef, buttonText, buttonIcon } = useDropdownMenu({
        buttonIcon: <BiDotsHorizontalRounded/>,
      });

      const DropDownMenuElement = dynamic(()=>import("../Dropdown/DropDownMenu"), {
        loading: () => <div>Loading...</div>,
      })
    
    return (
        <>
        <div className="drop-down-menu relative" ref={dropdownRef}  >
            <button className="border border-primary-bg hover:bg-primary-bg p-2 rounded-lg text-second-font" onClick={handleToggle}>
                {buttonText && buttonText}
                {buttonIcon && buttonIcon}
            </button>
                            
            <DropDownMenuElement isOpen={isOpen}>
                <DropdownLiElement>
                    <DropDownLinkElement text="Settings" link="/profile/settings" linkIcon={<AiFillSetting/>}/>
                </DropdownLiElement>
                <DropdownLiElement>
                    <DropDownLinkElement text="liked" link="/profile" linkIcon={<AiOutlineLike/>}/>
                </DropdownLiElement>
            </DropDownMenuElement>
                            {/* <HeaderButton text="login" icon={<BiLogIn/>} onClick={()=>signOut()}/> */}
        </div>

        </>
    )
}

export default ProfileDropdown