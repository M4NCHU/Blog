interface HeaderButtonProps {
    text: string
    icon: any
    onClick?: ()=>void
}

const HeaderButton:React.FC<HeaderButtonProps> = ({text, icon, onClick}) => {
    return (
        <button className="Header-button text-dark bg-primary-warning hover:bg-second-warning focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 focus:outline-none flex flex-row justify-center items-center gap-2" onClick={onClick}>
            {icon}
            {text}
        </button>
    )
}

export default HeaderButton