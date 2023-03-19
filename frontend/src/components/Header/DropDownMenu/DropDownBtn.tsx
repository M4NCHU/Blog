import Link from "next/link"

interface DropDownBtnProps {
    text: string
    style?: string
    onClick: void
}

const DropDownBtn:React.FC<DropDownBtnProps> = ({text, onClick, style}) => {
    return (
        <li className="">
            <button className={`px-12 py-2  rounded-lg ${style !== "" && style ? style : "hover:bg-second-bg"}`} onClick={onClick}>
                {text}
            </button>
        </li>
    )
}

export default DropDownBtn