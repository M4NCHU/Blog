import ProfileImg from "../../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"
import {AiOutlineArrowUp,AiOutlineComment, AiOutlineShareAlt,AiOutlineArrowRight} from "react-icons/ai"
import Link from "next/link"
import Image from 'next/legacy/image'
import { Post } from "@/util/types"
import { formatRelative } from "date-fns"
import { enUS } from "date-fns/locale"
import Button from "@/components/Button"
import PostAuthorImage from "./PostAuthorImage"
import * as ROUTES from "../../../constants/routes"


const formatRelativeLocale = {
    lastWeek: "eeee",
    yesterday: "'Yesterday",
    today: "p",
    other: "MM/dd/yy",
  };

interface PostProps {
    post: Post
}

const Post:React.FC<PostProps> = ({post}) => {
    
    
    return (
        
            
            <div className="blog-post flex flex-row mt-4 mr-2 md:pr-4 tablet:pr-16 ">
                
            <div className="post-sidebar hidden md:block">
                <div className="post-author hidden md:block relative group">
                
                    <PostAuthorImage image={post.author.image as string} username={post.author.username } name={post.author.name}/>
                    
                </div>
                <button className="post-reactions flex justify-center items-center border border-second-bg hover:bg-second-bg cursor-pointer w-12 h-12 my-2 rounded-lg text-third-font">
                    <div className="">
                        <AiOutlineArrowUp/>
                        <p className="m-0">15</p>
                    </div>
                </button>
            </div>

            <div className="post-content bg-second-bg hover:bg-forth-bg w-full ml-2 md:ml-8 rounded-lg cursor-pointer">
                <div className="post-header p-4 flex justify-between items-center">
                    <div className="flex flex-row gap-4 justify-center items-center">
                        
                        <div className="block md:hidden">
                            <PostAuthorImage image={post.author.image as string} username={post.author.username } name={post.author.name}/>      
                        </div>
                    
                        <h2 className="post-category text-sm text-second-font hover:underline cursor-pointer ">Photography</h2>
                    </div>
                    
                    <p className="post-added text-third-font text-xs m-0">
                        
                    {formatRelative(new Date(post.updatedAt), new Date(), {
                        locale: {
                        ...enUS,
                        formatRelative: (token) =>
                            formatRelativeLocale[
                            token as keyof typeof formatRelativeLocale
                            ],
                        },
                    })}
                    </p>
                </div>
                {post.image && (
                    <div className="post-img" style={{width: '100%', height: '24rem', position: 'relative'}}>
                         <Image alt={`image of post:${post.title ? post.title : post.desc}`} priority layout="fill" objectFit="cover" src={ProfileImg.src} />
                     </div>   
                )}
                
                {post.title && (
                    <div className="post-title p-4 text-second-font">
                    <h1 className="post-t text-lg hover:underline">
                        <Link href={ROUTES.HOME}>
                             {post.title}
                             
                             
                        </Link> 
                    </h1>
                </div>
                )}
                

                <div className="post-content px-4 text-third-font">
                    <p className="post-c">{post.desc}</p>
                </div>

                <div className="post-actions px-4 py-2 flex flex-row justify-between text-third-font flex-wrap">
                    <div className="flex flex-row gap-4">
                        <Button variant="transparent" size="medium" icon={<AiOutlineComment/>} >
                            <p className="m-0">8 Comments</p>
                        </Button>
                        <Button variant="transparent" size="medium" icon={<AiOutlineShareAlt/>} >
                            <p className="m-0">Share</p>
                        </Button>
                        
                        <Button variant="transparent" size="medium" icon={<AiOutlineArrowUp/>} >
                            <span className="m-0 block">15</span>
                        </Button>
                    </div>

                    <Button variant="transparent" size="medium" icon={<AiOutlineArrowRight/>} >
                        <p className="m-0">Read more</p>
                    </Button>
                    
                </div>
            </div>
        </div>
        
        
    )
}

export default Post