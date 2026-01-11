'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { quickLinks } from '@/lib/data';

interface NavigationProps {
  mobile?: boolean;
}

export default function Navigation({ mobile = false }: NavigationProps) {
  const pathname = usePathname();

  const navClasses = mobile
    ? 'flex flex-col space-y-2'
    : 'flex items-center space-x-1';

  return (
    <nav className={navClasses}>
      {quickLinks.map((link) => {
        const isActive = pathname === link.href || pathname.startsWith(link.href + '/');
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'px-4 py-2 rounded-lg text-sm font-medium transition-all duration-300',
              mobile
                ? 'block text-gray-900 hover:bg-riara-secondary-light hover:text-riara-primary'
                : 'text-gray-900 hover:text-riara-primary',
              isActive
                ? mobile
                  ? 'bg-riara-secondary-light text-riara-primary'
                  : 'text-riara-primary'
                : ''
            )}
          >
            {link.name}
          </Link>
        );
      })}
    </nav>
  );
}


