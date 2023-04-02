import Link from 'next/link';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';



interface PaginationBtnProps {
    label: string
    icon?: React.ReactNode;
    iconPos: "left" | "right"
}

const PaginationBtn: React.FC<PaginationBtnProps> = ({ label, icon, iconPos = "left",  ...props }) => {
  

  return (
    <div className="pagination-btn ">
        <Link href="" className="text-third-font bg-primary-bg border border-third-bg hover:bg-second-bg focus:ring-2 focus:ring-third-bg font-medium rounded-lg text-sm px-4 lg:px-5 py-2.5 focus:outline-none flex flex-row justify-center items-center gap-2">
            {iconPos === "left" && icon}
                <span>{label}</span>
            {iconPos === "right" && icon}
        </Link>
    </div>
    
  );
};

export default PaginationBtn;
