import React, { ButtonHTMLAttributes } from 'react';
import { IconType } from 'react-icons';
import { FaSpinner } from 'react-icons/fa';


interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'warning';
  size?: 'small' | 'medium' | 'large' | "xl";
  icon?: React.ReactNode;
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'medium', icon, ...props }) => {
  const variantClass = `btn-${variant}`;
  const sizeClass = `btn-${size}`;
  const iconClass = icon ? 'btn-icon' : '';

  return (
    <button className={`btn ${variantClass} ${sizeClass} ${iconClass}`} {...props}>
      {icon && <span className="btn-icon-wrapper">{icon}</span>}
      {children}
    </button>
  );
};

export default Button;
