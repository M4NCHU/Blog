import { useQuery } from "@apollo/client"
import ShowcaseItem from "./ShowcaseItem"
import TrendingItem from "./TrendingItem"
import tagOperations from "../../../graphql/operations/tag"
import { TagData } from "@/util/types"
import BlogHeader from "../Header"

interface TrendingProps {
    
}

const Trending:React.FC<TrendingProps> = () => {

    const {data, loading, error} = useQuery<TagData ,null>(tagOperations.Query.readTags)
    

    return (
        <section className="showcase-trending sticky top-20 pl-2 ">
                <div className="showcase-header flex flex-row justify-start items-center">
                        <BlogHeader text="Showcase"/>
                </div>
                <div className="showcase mt-2">
                        <ShowcaseItem/>
                </div>
                
                <div className="trending-header mt-8 flex flex-row justify-start items-center">
                        <BlogHeader text="Trending"/>
                </div>

                <div className="trending-item mt-4 grid grid-cols-2 gap-4 justify-between">
                        <TrendingItem data={data?.readTags && data.readTags}/>
                </div>
        </section>
    )
}

export default Trending