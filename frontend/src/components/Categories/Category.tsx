interface CategoryProps {
    image: string
    title: string
    alt: string
}

const Category:React.FC<CategoryProps> = ({image, title, alt}) => {
    return (
        <div className="category relative rounded-md w-[180px] h-[92px]  md:w-[200px] md:h-[92px] lg:w-[228px] lg:h-[92px] cursor-pointer hover:scale-105 transition duration-300">
            <img src={image} alt={alt} className="w-full h-full object-cover rounded-md "/>
            <h3 className="text-primary-font absolute text-sm bg-white/10 p-2 ml-auto mr-auto top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-md backdrop-filter backdrop-blur-md">{title}</h3>
        </div>
    )
}

export default Category