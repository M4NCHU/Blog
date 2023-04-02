import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { AiOutlineLoading } from 'react-icons/ai';
import { FaSpinner } from 'react-icons/fa';


interface CloudProps {
  text: string;
  
}

const Cloud: React.FC<CloudProps> = ({ text , ...props }) => {
  

  return (
    <div className="absolute -bottom-8 left-1/2 transform -translate-x-1/2 bg-forth-bg text-primary-font text-sm rounded-lg shadow-lg opacity-0 transition-opacity duration-300 group-hover:opacity-100 py-1 px-3  z-20">
        {text}
    </div>
    
  );
};

export default Cloud;
