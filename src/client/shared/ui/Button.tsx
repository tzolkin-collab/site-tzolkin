import React from 'react';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  const baseStyles = "inline-flex items-center justify-center rounded-lg font-medium transition-all duration-200 disabled:opacity-50 disabled:pointer-events-none cursor-pointer active:scale-95";

  const variants = {
    primary: "bg-primary text-primary-foreground hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/20 focus:ring-primary",
    secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/90 hover:shadow-lg hover:shadow-secondary/20 focus:ring-secondary",
    outline: "border-2 border-border bg-transparent hover:bg-accent hover:text-accent-foreground hover:border-accent",
    ghost: "hover:bg-accent/10 hover:text-accent",
  };

  const sizes = {
    sm: "h-9 text-base",
    md: "h-11 px-6 text-base",
    lg: "h-14 px-8 text-lg",
  };

  return (
    <button
      className={`${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
