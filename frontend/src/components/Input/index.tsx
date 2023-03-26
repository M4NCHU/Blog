import { InputHTMLAttributes } from "react";

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string
  styles?: string
}



const Input:React.FC<InputProps> = ({label, styles, ...props}) => {
    
    return (
      <div className="">
        {label && <label htmlFor={props.id}>{label}</label>}
        <input {...props} className={`focus:ring-2 focus:ring-third-bg font-medium rounded-md text-sm px-4 pr-2 py-2.5 focus:outline-none w-full ${styles}`}   />
      </div>
      
    )
}

export default Input