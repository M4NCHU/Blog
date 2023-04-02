
import Link from "next/link"
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai"
import ResponsiveSection from "../Layout/Responsive"
import CreatePost from "./CreatePost"
import Post from "./post"
import Trending from "./trending"
import postOperations from "../../graphql/operations/post"
import {  PostsData } from "@/util/types"
import { useQuery } from "@apollo/client"
import Pagination from "../Pagination"

import BlogHeader from "./Header"
import ActiveLink from "../Links/Index"
import * as ROUTES from "../../constants/routes"


interface BlogProps {
    
}

const Blog:React.FC<BlogProps> = ({})  => {

    const {data, loading, error} = useQuery<PostsData, null>(postOperations.Query.readPosts)
    const content = data?.readPosts
    
    const sortedPosts = content ? [...content].sort((a,b) => b.updatedAt.valueOf()-a.updatedAt.valueOf()) : [];

    
    return (
        <>
        <ResponsiveSection addClass="blog">
            <div className="blog-posts flex-col w-full  md:w-2/3 mt-6">
            <CreatePost/>
                <div className="blog-header flex flex-row justify-start items-center">
                    <BlogHeader text="Post list"/>
                    <div className="text-base ml-8 flex flex-row gap-5 flex-wrap">
                        <ActiveLink href={ROUTES.NEWS} label="News" />
                        <ActiveLink href={ROUTES.HOT} label="Hot" />
                        <ActiveLink href={ROUTES.TRENDS} label="Trends" />
                    </div>
                </div>
                {/* Posts */}
                <div className="post-section flex flex-col gap-8 mt-4 xd:pr-12">
                    {sortedPosts &&
                    
                    sortedPosts.map((post) => (
                        <Post post={post} key={post.id}/>
                    ))}
                    
                </div>
                <Pagination/>
            </div>
            <div className="showcase md:flex flex-col hidden w-1/3 pl-2 mt-6 ">
                <Trending />
            </div>
        </ResponsiveSection>
        </>
        
    )
}

export default Blog

