import { Session } from "next-auth";
import Image from "next/image"
import Link from "next/link"
import ProfileDropdown from "./ProfileDropdown"
import ProfileLink from "./ProfileLink";


interface ProfileHeaderProps {
    session: Session
}

const ProfileHeader:React.FC<ProfileHeaderProps> = ({session}) => {
    
    const {user} = session
    console.log(user)
    
    return (    
    <>
        <div className="profile-box flex flex-col justify-center items-center relative bg-third-bg rounded-lg mb-4">
            <div className="profile-img absolute -top-6">
                <Image width={80} height={80} src={user?.image as string} alt={`${user.username} profile image`} className="w-20 h-20 rounded-full opacity-90 hover:opacity-100 cursor-pointer" />
            </div>
            <div className="profile-username flex flex-col items-center">
                <h1 className="text-second-font mt-16 text-2xl">{user?.name}</h1>
                <p className="mt-0 text-third-font">@{user?.username}</p>
            </div>
            <div className="profile-nav flex justify-between w-full px-8 py-4 bg-second-bg rounded-lg">
                <div className="flex justify-between gap-8 ">
                    <ProfileLink text="Posts" href="/"/>
                    <ProfileLink text="Commented" href="/"/>
                </div>
                <ProfileDropdown/>     
            </div>
        </div>
    </>
    
    )
}

export default ProfileHeader