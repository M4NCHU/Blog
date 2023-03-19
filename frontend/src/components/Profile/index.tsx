import Link from "next/link"
import DefaultHeader from "../Layout/DefaultHeader"
import ResponsiveSection from "../Layout/Responsive"
import Post from "../Blog/post";
import ProfileImg from "../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"
import ProfileLink from "./ProfileLink";
import ProfileDropdown from "./ProfileDropdown";


interface ProfileProps {
    
}

const ProfileSite:React.FC<ProfileProps> = () => {
    
    
    return (
        <>
        <DefaultHeader/>
        <ResponsiveSection addClass="profile flex-col mt-12">
            <div className="profile-box flex flex-col justify-center items-center relative bg-third-bg rounded-lg mb-4">
                <div className="profile-img absolute -top-6">
                    <img src={ProfileImg.src} alt="" className="w-20 h-20 rounded-full opacity-90 hover:opacity-100 cursor-pointer" />
                </div>
                <div className="profile-username flex flex-col items-center">
                    <h1 className="text-second-font mt-16 text-2xl">Maciej Szwast</h1>
                    <p className="mt-0 text-third-font">@Maciej Szwast</p>
                </div>
                <div className="profile-nav flex justify-between w-full px-8 py-4 bg-second-bg rounded-lg">
                    <div className="flex justify-between gap-8 ">
                        <ProfileLink text="Posts" href="/"/>
                        <ProfileLink text="Commented" href="/"/>
                    </div>
                    <ProfileDropdown/>     
                </div>
            </div>
            <Post/>
        </ResponsiveSection>
        </>
       
    )
}

export default ProfileSite