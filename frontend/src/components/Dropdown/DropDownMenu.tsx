interface DropDownMenuElementProps {
    isOpen: boolean,
    children: React.ReactNode,
}


const DropDownMenuElement:React.FC<DropDownMenuElementProps> = ({isOpen, children}) => {
    
    return (
<>
        {isOpen && (
            <div className="drop-down absolute right-1 top-10 z-50">
                <ul className="dropdown-list bg-forth-bg shadow-lg flex flex-col px-2 py-2 border-third-bg rounded-lg relative gap-2">
                    {children}
                </ul>
            </div>
        )}
</>
        
        
    )
}

export default DropDownMenuElement