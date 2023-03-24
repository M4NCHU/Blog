import ProfileImg from "../../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"
import {AiOutlineArrowUp,AiOutlineComment, AiOutlineShareAlt,AiOutlineArrowRight} from "react-icons/ai"
import Link from "next/link"
import Image from 'next/legacy/image'

interface PostProps {
    
}

const Post:React.FC<PostProps> = ({}) => {
    
    console.log(ProfileImg)
    return (
        <div className="blog-post flex flex-row mt-4 mr-2 md:pr-4 tablet:pr-16 ">
            <div className="post-sidebar hidden md:block">
                <div className="post-author">
                    <Image width={48} height={48} alt="profile image" src={ProfileImg.src} priority className="w-12 h-12 object-cover rounded-lg opacity-90 hover:opacity-100 cursor-pointer" />
                </div>
                <div className="post-reactions flex justify-center items-center border border-second-bg hover:bg-second-bg cursor-pointer w-12 h-12 my-2 rounded-lg text-third-font">
                    <div className="">
                        <AiOutlineArrowUp/>
                        <p className="m-0">15</p>
                    </div>
                </div>
            </div>

            <div className="post-content bg-second-bg w-full ml-2 md:ml-8 rounded-lg">
                <div className="post-header p-4 flex justify-between items-center">
                    <div className="flex flex-row gap-4 justify-center items-center">
                    <Image width={48} height={48} alt="profile image" src={ProfileImg.src} priority className="w-12 h-12 object-cover rounded-lg opacity-90 hover:opacity-100 cursor-pointer md:hidden" />
                        <h2 className="post-category text-sm text-second-font hover:underline cursor-pointer ">Photography</h2>
                    </div>
                    <p className="post-added text-third-font text-xs m-0">1 hour ago</p>
                </div>

                <div className="post-img" style={{width: '100%', height: '24rem', position: 'relative'}}>
                    <Image alt="Post image" priority layout="fill" objectFit="cover" src={ProfileImg.src} />
                </div>

                <div className="post-title p-4 text-second-font">
                    <h1 className="post-t text-lg hover:underline">
                        <Link href="/">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, corporis!
                        </Link> 
                    </h1>
                </div>

                <div className="post-content px-4 text-third-font">
                    <p className="post-c">Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa voluptates impedit reiciendis optio iusto exercitationem repellendus iste minima magni ex.</p>
                </div>

                <div className="post-actions p-4 flex flex-row justify-between text-third-font flex-wrap">
                    <div className="flex flex-row gap-4">
                        <div className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                            <AiOutlineComment/>
                            <p className="m-0 hidden xs:block">8 Comments</p>
                        </div>
                        <div className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                            <AiOutlineShareAlt/>
                            <p className="m-0 hidden xs:block">Share</p>
                        </div>
                        <div className="post-action md:hidden flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                            <AiOutlineArrowUp/>
                            <p className="m-0">15</p>
                        </div>
                    </div>
                    <div className="post-action flex flex-row justify-center items-center gap-2 hover:bg-third-bg p-2 rounded-lg cursor-pointer">
                        <AiOutlineArrowRight/>
                        <p className="m-0">Read more</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Post