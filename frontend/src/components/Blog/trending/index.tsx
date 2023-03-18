import ShowcaseItem from "./ShowcaseItem"
import TrendingItem from "./TrendingItem"

interface TrendingProps {
    
}

const Trending:React.FC<TrendingProps> = () => {
    return (
        <section className="showcase-trending sticky top-20 pl-2 ">

            <div className="showcase-header flex flex-row justify-start items-center">
                    <h1 className="text-lg text-third-font uppercase">Showcase</h1> 
            </div>
            <div className="showcase mt-2">
                    <ShowcaseItem/>
            </div>
            
            <div className="trending-header mt-8 flex flex-row justify-start items-center">
                    <h1 className="text-lg text-third-font uppercase">Trending</h1> 
            </div>

                <div className="trending-item mt-4 grid grid-cols-2 gap-4 justify-between">
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                    <TrendingItem/>
                </div>
        </section>
    )
}

export default Trending