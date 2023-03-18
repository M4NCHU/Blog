import Link from "next/link";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import ResponsiveSection from "./Responsive";

interface DefaultHeaderProps {
    
}

const DefaultHeader:React.FC<DefaultHeaderProps> = () => {
    return (
            <ResponsiveSection addClass="text-third-font justify-between bg-third-bg text-sm">
                <Link href="/" className="flex flex-row justify-center items-center gap-2 hover:bg-second-bg p-2 rounded-lg cursor-pointer">
                    <AiOutlineArrowLeft/>
                    <p className="m-0">Back</p>
                </Link>
                <button className="flex flex-row justify-center items-center gap-2 hover:bg-second-bg p-2 rounded-lg cursor-pointer">
                    <BiDotsHorizontalRounded/>
                    <p className="m-0">Categories</p>
                </button>
                
            </ResponsiveSection>
    )
}

export default DefaultHeader