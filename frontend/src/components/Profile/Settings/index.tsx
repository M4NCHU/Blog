import DefaultHeader from "../../Layout/DefaultHeader"
import ResponsiveSection from "../../Layout/Responsive"
import Post from "../../Blog/post";
import Tabs from "./Tabs";
import { useSession } from "next-auth/react";
import ProfileHeader from "../ProfileHeader";
import ChangeUsername from "./ChangeUsername";
import dynamic from "next/dynamic";
import {MdDriveFileRenameOutline} from "react-icons/md"
import {BsFillSunFill} from "react-icons/bs"
import {RiLockPasswordLine} from "react-icons/ri"
import {AiOutlineNotification} from "react-icons/ai"
import CreateTag from "./CreateTag";



interface ProfileSettingsProps {
    
}

const ProfileSettings:React.FC<ProfileSettingsProps> = () => {
    const {data: session} = useSession();
    const ChangeUsername = dynamic(() => import('./ChangeUsername'), {
        loading: () => <p>Loading...</p>,
      })
    
    const tabs = [
        {
          label: "Change username",
          content: <ChangeUsername/>,
          icon: <MdDriveFileRenameOutline/>,
        },
        {
          label: "Page theme",
          content: <CreateTag/>,
          icon: <BsFillSunFill/>,
        },
        {
          label: "Change password",
          content: <p>Content of Tab 3</p>,
          icon: <RiLockPasswordLine/>,
        },
        {
            label: "Notifications",
            content: <p>Content of Tab 3</p>,
            icon: <AiOutlineNotification/>,
          }
      ];
    
    return (
        <>
        {session ? (
        <>
        <DefaultHeader/>
        <ResponsiveSection addClass="profile flex-col mt-12">
            <ProfileHeader session={session} />
            <Tabs tabs={tabs} />
        </ResponsiveSection>
        </>
            
        ) : console.log("nic")}
        </>
       
    )
}

export default ProfileSettings

