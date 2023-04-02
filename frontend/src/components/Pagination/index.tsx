import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import { AiOutlineArrowLeft, AiOutlineArrowRight } from 'react-icons/ai';
import PaginationBtn from './PageBtn';



interface PaginationProps {
  
  
}

const Pagination: React.FC<PaginationProps> = ({  ...props }) => {
  

  return (
    <div className="blog-pagination flex flex-row justify-center mt-8 gap-4">
        <PaginationBtn label="prev" icon={<AiOutlineArrowLeft/>} iconPos="left"/>
            <div className="pagination-page flex flex-row items-center text-third-font">
                <p className="m-0">
                    2/76
                </p>
            </div>
        <div className="">
        <PaginationBtn label="next" icon={<AiOutlineArrowRight/>} iconPos="left"/>
    </div>
                    

                </div>
    
  );
};

export default Pagination;
