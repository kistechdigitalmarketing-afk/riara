'use client';

import { motion, useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';
import { GraduationCap, Users, Calendar, BookOpen } from 'lucide-react';

interface Stat {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

const stats: Stat[] = [
  {
    icon: <Users className="w-8 h-8" />,
    value: 1500,
    label: 'Students',
  },
  {
    icon: <GraduationCap className="w-8 h-8" />,
    value: 150,
    label: 'Staff Members',
  },
  {
    icon: <Calendar className="w-8 h-8" />,
    value: 40,
    label: 'Years of Excellence',
    suffix: '+',
  },
  {
    icon: <BookOpen className="w-8 h-8" />,
    value: 12,
    label: 'Programs',
  },
];

function Counter({ value, suffix = '' }: { value: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  useEffect(() => {
    if (isInView) {
      const target = Math.floor(value);
      const duration = 2000;
      const steps = 60;
      const increment = target / steps;
      let current = 0;

      const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
          setCount(target);
          clearInterval(timer);
        } else {
          setCount(Math.floor(current));
        }
      }, duration / steps);

      return () => clearInterval(timer);
    }
  }, [isInView, value]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}{suffix}
    </span>
  );
}

export default function Stats() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {stats.map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="text-center"
            >
              <div className="flex justify-center mb-4 text-riara-primary">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-gray-900 mb-2">
                {isInView && <Counter value={stat.value} suffix={stat.suffix} />}
              </div>
              <p className="text-gray-600 font-medium">{stat.label}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

