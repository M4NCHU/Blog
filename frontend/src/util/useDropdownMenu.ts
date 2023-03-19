import { useState, useRef, useEffect } from 'react';

interface UseDropdownMenuProps {
  buttonText?: string;
  buttonIcon?: any;
}

const useDropdownMenu = ({ buttonText, buttonIcon }: UseDropdownMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return {
    isOpen,
    handleToggle,
    dropdownRef,
    buttonText,
    buttonIcon,
  };
};

export default useDropdownMenu;
