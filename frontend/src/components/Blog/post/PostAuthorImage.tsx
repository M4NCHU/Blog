
import Image from 'next/legacy/image'
import { Post } from "@/util/types"



interface PostAuthorImageProps {
    image: string
    username: string
    name: string
}

const PostAuthorImage:React.FC<PostAuthorImageProps> = ({image, username, name}) => {
    
    
    return (
        <>
        <Image width={48} height={48} alt={`Photo of author: ${image}`} src={image} priority className="w-12 h-12 object-cover rounded-lg opacity-90 hover:opacity-100 cursor-pointer" />
        <div className="absolute -top-10 left-1/2 transform -translate-x-1/2 bg-forth-bg text-primary-font text-sm rounded-lg shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 py-1 px-3 min-w-max">
            {username ? username : name}
        </div>
        </>
        
    )
}

export default PostAuthorImage