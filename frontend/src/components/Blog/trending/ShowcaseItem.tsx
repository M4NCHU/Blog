import Image from "next/image"
import { AiOutlineArrowUp, AiOutlineComment } from "react-icons/ai"
import ProfileImg from "../../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"

interface ShowcaseItemProps {
    
}

const ShowcaseItem:React.FC<ShowcaseItemProps> = () => {
    return (
        <div className="post-content bg-second-bg rounded-lg">
                <div className="post-header p-4 flex justify-between items-center">
                    <div className="flex flex-row gap-4 justify-center items-center">
                        <Image width={32} height={32} src={ProfileImg.src} alt="" className="w-8 h-8 rounded-lg opacity-90 hover:opacity-100 cursor-pointer" />
                        <h2 className="post-category text-sm text-second-font">Photography</h2>
                    </div>
                    <div className="post-added text-third-font text-xs m-0">
                        <div className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                            <AiOutlineArrowUp/>
                            <p className="m-0">15</p>
                        </div>
                    </div>
                </div>

                <div className="post-img">
                    <img src={ProfileImg.src} alt="" className="w-full h-48 object-cover"/>
                </div>

                <div className="post-title p-4 text-second-font">
                    <h1 className="post-t text-base hover:underline cursor-pointer">Lorem ipsum dolor sit amet consectetur adipisicing elit.</h1>
                </div>

                <div className="post-actions p-4 flex flex-row justify-between text-third-font ">
                    <div className="flex flex-row gap-4">
                        <div className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer text-sm">
                            <AiOutlineComment/>
                            <p className="m-0 text-sm">8 Comments</p>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}

export default ShowcaseItem