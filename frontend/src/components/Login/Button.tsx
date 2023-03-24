import Link from "next/link"
import { Children } from "react"



interface ButtonProps {
    children: React.ReactNode;
    onClick: ()=>{}
}

const LoginButton:React.FC<ButtonProps> = ({children,onClick}) => {
    return (
        <>
            <button onClick={onClick} className="text-primary-font bg-second-bg hover:bg-third-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 mr-2 focus:outline-none flex flex-row justify-center items-center gap-2 w-full">
                {children}
                
            </button>
        </>
       
    )
}

export default LoginButton