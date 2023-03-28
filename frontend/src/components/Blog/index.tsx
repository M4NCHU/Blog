
import Link from "next/link"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import ResponsiveSection from "../Layout/Responsive"
import CreatePost from "./CreatePost"
import Post from "./post"
import Trending from "./trending"
import postOperations from "../../graphql/operations/post"
import {  PostsData } from "@/util/types"
import { useQuery } from "@apollo/client"

interface BlogProps {
    
}

const Blog:React.FC<BlogProps> = () => {

    const {data, loading, error} = useQuery<PostsData, null>(postOperations.Query.readPosts)
    
    
    
    return (
        <>
        <ResponsiveSection addClass="blog">
            <div className="blog-posts flex-col w-full  md:w-2/3 mt-6">
            <CreatePost/>
                
                
                <div className="blog-header flex flex-row justify-start items-center">
                    <h1 className="text-lg text-third-font uppercase">Post list</h1>
                    <div className="text-third-font text-base ml-8 flex flex-row gap-5 flex-wrap">
                        <Link href="#" className="text-primary-font">
                            News
                        </Link>
                        <Link href="#">
                            Hot
                        </Link>
                        <Link href="#">
                            Trends
                        </Link>
                    </div>
                    
                </div>
                <div className="post-section flex flex-col gap-8 mt-4 xd:pr-12">
                    {data?.readPosts && <Post content={data.readPosts}/>}
                
                
                </div>

                <div className="blog-pagination flex flex-row justify-center mt-8 gap-4">
                    <div className="pagination-btn ">
                        <div className="">
                            <Link href="" className="text-third-font bg-primary-bg border border-third-bg hover:bg-second-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 focus:outline-none flex flex-row justify-center items-center gap-2">
                                <AiOutlineArrowLeft/>
                                <span>prev</span>
                            </Link>
                        </div>
                    </div>
                    <div className="pagination-page flex flex-row items-center text-third-font">
                        <p className="m-0">
                            2/76
                        </p>
                    </div>
                    <div className="">
                        <Link href="" className="text-third-font bg-primary-bg border border-third-bg hover:bg-second-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 focus:outline-none flex flex-row justify-center items-center gap-2">
                            <span>next</span>
                            <AiOutlineArrowRight/>
                        </Link>
                        
                    </div>
                    

                </div>
            </div>

            <div className="showcase md:flex flex-col hidden w-1/3 pl-2 mt-6 ">

                <Trending />
                
            </div>
        </ResponsiveSection>
        </>
        
    )
}

export default Blog

