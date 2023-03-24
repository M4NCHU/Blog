import DefaultHeader from "../Layout/DefaultHeader"
import ResponsiveSection from "../Layout/Responsive"
import Post from "../Blog/post";
import ProfileImg from "../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"
import ProfileLink from "./ProfileLink";
import ProfileDropdown from "./ProfileDropdown";
import Image from "next/image";
import ProfileHeader from "./ProfileHeader";
import { Session } from "next-auth";
import { useSession } from "next-auth/react";
import { useState } from "react";
import Tabs from "./Settings/Tabs";


interface ProfileProps {
    
}


  
  
  
const ProfileSite:React.FC<ProfileProps> = () => {
    const {data: session} = useSession();

    return (
        <>
        {session ? (
            <>
            <DefaultHeader/>
            <ResponsiveSection addClass="profile flex-col mt-12">
                <ProfileHeader session={session} />
            </ResponsiveSection>
            </>
            
        ) : console.log("nic")}
        </>
        
       
    )
}

export default ProfileSite

