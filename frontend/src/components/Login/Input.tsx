import Link from "next/link"



interface InputProps {
    label?: string
    placeholder?: string
    type: string
}

const LoginInput:React.FC<InputProps> = ({label, placeholder, type}) => {
    return (
        <input placeholder={placeholder} type={type} className={`text-primary-font bg-transparent border border-third-bg focus:ring-2 focus:ring-third-bg font-medium rounded-md text-sm px-4 pr-2 py-2.5 focus:outline-none w-full`}/>
            
        
       
    )
}

export default LoginInput