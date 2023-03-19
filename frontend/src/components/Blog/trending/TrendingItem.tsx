import ProfileImg from "../../../resources/categories-img/photo-1575936123452-b67c3203c357.jpeg"

interface TrendingItemProps {
    
}

const TrendingItem:React.FC<TrendingItemProps> = () => {
    return (
        <div className="trending-item bg-second-bg flex flex-col justify-center items-center rounded-lg gap-2 cursor-pointer  hover:bg-third-bg">
            <div className="trending-img mt-4">
                <img src={ProfileImg.src} alt="" className="w-12 h-12 rounded-full opacity-90 hover:opacity-100 cursor-pointer" />
            </div>
            <div className="trending-hash text-sm text-second-font">
                #photography
            </div>
            <div className="trending-count mb-4 text-sm text-third-font">
                12 posts
            </div>
        </div>
    )
}

export default TrendingItem