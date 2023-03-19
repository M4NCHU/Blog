interface DropdownLiElementProps {
    children: React.ReactNode;

}

const DropdownLiElement:React.FC<DropdownLiElementProps> = ({children}) => {
    return (
        <>
        <li className={`text-third-font cursor-pointer flex justify-center rounded-lg text-base text-center` }>
            {children}
        </li>
        </>
    )
}

export default DropdownLiElement