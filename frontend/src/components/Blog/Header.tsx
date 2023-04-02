


interface HeaderProps {
    text: string
}

const BlogHeader:React.FC<HeaderProps> = ({text}) => {
    return (
            
        <h1 className="text-lg text-third-font uppercase">{text}</h1>
        
    )
}

export default BlogHeader