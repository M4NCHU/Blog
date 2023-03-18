interface IconButtonProps {
    icon: any
}

const IconButton:React.FC<IconButtonProps> = ({icon}) => {
    return (
        <div className="Header-icon-btn text-primary-font text-xl font-bold mx-1 lg:mx-4 hover:bg-primary-bg p-2.5 rounded-full">
            {icon}
        </div>
    )
}

export default IconButton