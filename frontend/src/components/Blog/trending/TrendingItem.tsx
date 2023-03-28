
import { Tag } from "@/util/types"
import Image from "next/image"
import ProfileImg from "../../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"

interface TrendingItemProps {
    data: Array<Tag> | undefined
}

const TrendingItem:React.FC<TrendingItemProps> = ({data}) => {
    return (
            data ? (
            
            data.map(tag=>(
                <div key={tag.id} className="trending-item bg-second-bg flex flex-col justify-center items-center rounded-lg gap-2 cursor-pointer  hover:bg-third-bg">
                    <div className="trending-img mt-4">
                        <Image src={ProfileImg.src} width={48} height={48} alt="" priority  className="w-12 h-12 rounded-full opacity-90 hover:opacity-100 cursor-pointer" />
                    </div>
                    <div className="trending-hash text-sm text-second-font">
                        #{tag.tagName}
                    </div>
                    <div className="trending-count mb-4 text-sm text-third-font">
                        12 posts
                    </div>
                </div>
                ))
                
            ) : "0 Tags"   
            
        
    )
}

export default TrendingItem