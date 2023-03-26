import { IconType } from 'react-icons';
import { ReactNode } from 'react';

interface IconProps {
  icon: IconType;
  size?: number;
  color?: string;
  className?: string;
  children?: ReactNode;
}

const Icon = ({ icon: IconComponent, size = 12, color = 'currentColor', className, children }: IconProps) => {
  return (
    <span className={`cursor-pointer p-2 rounded-full hover:bg-primary-bg font-normal ${className}`}>
      <IconComponent color={color} />
      {children}
    </span>
  );
};

export default Icon;
