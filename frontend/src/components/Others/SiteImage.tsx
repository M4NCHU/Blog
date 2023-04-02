import Image, { StaticImageData } from 'next/image';
import Link from 'next/link';
import React, { ButtonHTMLAttributes } from 'react';
import Cloud from './cloud';
import Logo from "../../resources/img/logo/diamond.png"
import * as ROUTES from "../../constants/routes"


interface SiteImageProps {
  
  
}

const SiteImage: React.FC<SiteImageProps> = ({ ...props }) => {
  

  return (
    
        <Link href={ROUTES.HOME}>
            <Image src={Logo} width={36} height={36} alt="Logo of Maciej Szwast blog site" className="min-h-[36px] min-w-[36px]"/>
            <Cloud text="Home page" />
        </Link>
    
    
  );
};

export default SiteImage;
