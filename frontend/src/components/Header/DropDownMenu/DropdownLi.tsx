interface DropdownLiProps {
    children: React.ReactNode;

}

const DropdownLi:React.FC<DropdownLiProps> = ({children}) => {
    return (
        <>
        <li className={`text-third-font cursor-pointer flex justify-center rounded-lg text-base text-center` }>
            {children}
        </li>
        </>
    )
}

export default DropdownLi