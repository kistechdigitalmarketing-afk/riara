'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight, Filter } from 'lucide-react';
import { newsArticles, upcomingEvents } from '@/lib/data';
import { formatDateShort } from '@/lib/utils';
import { NewsCard, EventCard } from '@/components/ui/Card';
import Button from '@/components/ui/Button';

export default function NewsContent() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/news.png"
            alt="News & Events"
            fill
            className="object-cover"
            sizes="100vw"
            priority
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              News & Events
            </h1>
            <p className="text-xl text-white leading-relaxed">
              Stay updated with the latest happenings, announcements, and upcoming events 
              at Riara Schools
            </p>
          </motion.div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Latest News & Announcements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Keep up with the latest news, achievements, and announcements from our school
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {newsArticles.map((article, index) => (
              <motion.div
                key={article.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <NewsCard
                  title={article.title}
                  excerpt={article.excerpt}
                  image={article.image}
                  date={formatDateShort(article.date)}
                  category={article.category}
                  slug={article.slug}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Calendar */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Calendar className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Upcoming Events
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Mark your calendars for these important school events
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
            {upcomingEvents.map((event, index) => (
              <motion.div
                key={event.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <EventCard
                  title={event.title}
                  description={event.description}
                  date={formatDateShort(event.date)}
                  time={event.time}
                  location={event.location}
                  type={event.type}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Photo Gallery Preview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Event Photo Gallery
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Highlights from recent school events and activities
            </p>
          </motion.div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
            {[
              { src: '/images/football.png', alt: 'Sports Day 2026', category: 'Sports' },
              { src: '/images/graduation.png', alt: 'Graduation Ceremony', category: 'Events' },
              { src: '/images/riaralab.png', alt: 'Science Fair', category: 'Academics' },
              { src: 'https://images.unsplash.com/photo-1514525253161-7a46d19cd819?w=400&q=80', alt: 'Music Festival', category: 'Arts' },
              { src: 'https://images.unsplash.com/photo-1521587760476-6c12a4b040da?w=400&q=80', alt: 'Cultural Day', category: 'Events' },
              { src: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?w=400&q=80', alt: 'Debate Competition', category: 'Academics' },
              { src: 'https://images.unsplash.com/photo-1513364776144-60967b0f800f?w=400&q=80', alt: 'Art Exhibition', category: 'Arts' },
              { src: '/images/field.png', alt: 'Field Trip', category: 'Activities' },
            ].map((photo, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                className="relative aspect-square overflow-hidden rounded-lg cursor-pointer group"
              >
                <Image
                  src={photo.src}
                  alt={photo.alt}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-300"
                  sizes="(max-width: 768px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-colors duration-300 flex items-end p-4">
                  <div className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="text-sm font-medium">{photo.alt}</p>
                    <p className="text-xs text-gray-200">{photo.category}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/">
              <Button variant="primary" size="lg">
                View Full Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Achievements & Awards */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Recent Achievements & Awards
            </h2>
            <p className="text-xl text-gray-100 max-w-2xl mx-auto">
              Celebrating excellence and recognizing outstanding achievements of our students
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'National Science Fair', achievement: '1st Place - Chemistry Category', year: '2026' },
              { title: 'Regional Music Festival', achievement: 'Gold Medal - Choral Music', year: '2026' },
              { title: 'Inter-School Debate', achievement: 'Best Speaker Award', year: '2026' },
              { title: 'KCSE Examination', achievement: '95% Pass Rate', year: '2023' },
              { title: 'IGCSE Results', achievement: '92% A* and A Grades', year: '2023' },
              { title: 'Sports Championship', achievement: 'Overall Champions', year: '2026' },
            ].map((achievement, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-lg p-6 text-center"
              >
                <div className="text-2xl font-bold text-primary-200 mb-2">{achievement.year}</div>
                <h3 className="text-lg font-bold mb-2">{achievement.title}</h3>
                <p className="text-gray-100">{achievement.achievement}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Stay Connected
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Subscribe to our newsletter to receive the latest news and event updates
            </p>
            <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email address"
                className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent transition-colors"
                required
              />
              <Button type="submit" variant="primary" size="lg">
                Subscribe
              </Button>
            </form>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
