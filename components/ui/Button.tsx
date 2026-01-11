import Link from 'next/link';
import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  asLink?: boolean;
  href?: string;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'primary', size = 'md', asLink = false, href, children, ...props }, ref) => {
    const baseStyles = 'inline-flex items-center justify-center font-medium rounded-lg transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';
    
    const variants = {
      primary: 'bg-riara-primary text-white hover:bg-riara-primary-dark focus:ring-riara-primary-light',
      secondary: 'border-2 border-riara-primary text-riara-primary hover:bg-riara-primary hover:text-white focus:ring-riara-primary-light',
      accent: 'bg-riara-accent text-white hover:bg-riara-accent-hover focus:ring-riara-accent',
      outline: 'border-2 border-riara-primary text-riara-primary hover:bg-riara-primary hover:text-white focus:ring-riara-primary-light',
      ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-500',
    };

    const sizes = {
      sm: 'px-3 py-1.5 text-sm',
      md: 'px-4 py-2 text-base',
      lg: 'px-6 py-3 text-lg',
    };

    const classes = cn(baseStyles, variants[variant], sizes[size], className);

    if (asLink && href) {
      return (
        <Link href={href} className={classes}>
          {children}
        </Link>
      );
    }

    return (
      <button ref={ref} className={classes} {...props}>
        {children}
      </button>
    );
  }
);

Button.displayName = 'Button';

export default Button;


