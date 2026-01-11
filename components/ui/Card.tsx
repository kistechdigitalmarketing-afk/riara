import { cn } from '@/lib/utils';
import { ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
}

export function Card({ children, className, hover = false }: CardProps) {
  return (
    <div
      className={cn(
        'bg-white rounded-lg border border-gray-200 overflow-hidden transition-all duration-300',
        hover && 'hover:shadow-lg hover:border-riara-primary',
        className
      )}
    >
      {children}
    </div>
  );
}

interface NewsCardProps {
  title: string;
  excerpt: string;
  image: string;
  date: string;
  category: string;
  slug: string;
}

export function NewsCard({ title, excerpt, image, date, category, slug }: NewsCardProps) {
  return (
    <Card hover>
      <Link href={`/news/${slug}`}>
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={image}
            alt={title}
            fill
            className="object-cover hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1 bg-riara-primary text-white text-xs font-medium rounded-full">
              {category}
            </span>
          </div>
        </div>
        <div className="p-6">
          <p className="text-sm text-gray-500 mb-2">{date}</p>
          <h3 className="text-xl font-bold text-gray-900 mb-2 line-clamp-2">{title}</h3>
          <p className="text-gray-600 line-clamp-3">{excerpt}</p>
        </div>
      </Link>
    </Card>
  );
}

interface EventCardProps {
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  type: string;
}

export function EventCard({ title, description, date, time, location, type }: EventCardProps) {
  return (
    <Card hover className="p-6">
      <div className="flex items-start justify-between mb-4">
        <span className="px-3 py-1 bg-riara-secondary text-riara-primary-dark text-xs font-medium rounded-full">
          {type}
        </span>
        <div className="text-right">
          <p className="text-sm font-semibold text-riara-primary">{date}</p>
          <p className="text-xs text-gray-500">{time}</p>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4 line-clamp-2">{description}</p>
      <div className="flex items-center text-sm text-gray-500">
        <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
        <span>{location}</span>
      </div>
    </Card>
  );
}

interface ProgramCardProps {
  title: string;
  description: string;
  icon: string;
}

export function ProgramCard({ title, description, icon }: ProgramCardProps) {
  // Simple icon mapping - in a real app, you'd use a proper icon component
  const IconComponent = () => {
    switch (icon) {
      case 'GraduationCap':
        return <span className="text-4xl">🎓</span>;
      case 'BookOpen':
        return <span className="text-4xl">📚</span>;
      case 'FlaskConical':
        return <span className="text-4xl">🔬</span>;
      case 'Palette':
        return <span className="text-4xl">🎨</span>;
      default:
        return <span className="text-4xl">✨</span>;
    }
  };

  return (
    <Card hover className="p-6 text-center">
      <div className="mb-4 flex justify-center">
        <div className="w-16 h-16 bg-riara-secondary rounded-full flex items-center justify-center">
          <div className="text-riara-primary">
            <IconComponent />
          </div>
        </div>
      </div>
      <h3 className="text-xl font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </Card>
  );
}


