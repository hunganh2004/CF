
import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'danger';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({ children, variant = 'primary', size = 'md', className, ...props }) => {
  const baseStyles = 'font-bold rounded-lg focus:outline-none focus:ring-2 focus:ring-offset-2 transition-all duration-200 ease-in-out disabled:opacity-50 disabled:cursor-not-allowed';

  const variantStyles = {
    primary: 'bg-sunset-orange-600 text-white hover:bg-sunset-orange-700 focus:ring-sunset-orange-500',
    secondary: 'bg-neutral-gray-200 text-neutral-gray-800 hover:bg-neutral-gray-300 focus:ring-neutral-gray-500 dark:bg-neutral-gray-700 dark:text-neutral-gray-100 dark:hover:bg-neutral-gray-600',
    danger: 'bg-red-600 text-white hover:bg-red-700 focus:ring-red-500',
  };

  const sizeStyles = {
    sm: 'py-1 px-3 text-sm',
    md: 'py-2 px-4 text-base',
    lg: 'py-3 px-6 text-lg',
  };

  const combinedClassName = `${baseStyles} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  return (
    <button className={combinedClassName} {...props}>
      {children}
    </button>
  );
};

export default Button;