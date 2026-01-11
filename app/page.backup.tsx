// Backup of the current page
'use client';

import Hero from '@/components/sections/Hero';
import Stats from '@/components/sections/Stats';
import Testimonials from '@/components/sections/Testimonials';
import Gallery from '@/components/sections/Gallery';
import { NewsCard, EventCard, ProgramCard } from '@/components/ui/Card';
import { newsArticles, upcomingEvents, featuredPrograms } from '@/lib/data';
import { formatDateShort } from '@/lib/utils';
import Link from 'next/link';
import Button from '@/components/ui/Button';
import { motion } from 'framer-motion';
import { ArrowRight, Calendar } from 'lucide-react';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <Hero />
      
      {/* Welcome Message from Principal */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative w-full aspect-[4/3] rounded-lg overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1509062522246-3755977927d7?w=800&q=80"
                  alt="Principal's Message"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Welcome Message from Our Principal
              </h2>
              <p className="text-lg text-gray-600 mb-4 leading-relaxed">
                On behalf of the entire Riara Schools community, I extend a warm welcome to you. 
                For over 40 years, we have been committed to providing excellence in education, 
                nurturing young minds, and shaping future leaders.
              </p>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Our holistic approach to education combines rigorous academics with character 
                development, co-curricular activities, and a supportive learning environment. 
                We believe in empowering every student to reach their full potential.
              </p>
              <p className="text-gray-700 font-semibold mb-4">
                — Dr. Jane Kamau, Principal
              </p>
              <Button asLink href="/about" variant="primary">
                Learn More About Us
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </section>

      <Stats />

      {/* Featured Programs */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Our Featured Programs
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational programs designed to prepare students for success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredPrograms.map((program, index) => (
              <motion.div
                key={program.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <ProgramCard {...program} />
              </motion.div>
            ))}
          </div>

          <div className="text-center">
            <Button asLink href="/academics" variant="outline" size="lg">
              Explore All Programs
            </Button>
          </div>
        </div>
      </section>

      {/* Latest News */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Latest News & Announcements
              </h2>
              <p className="text-lg text-gray-600">
                Stay updated with the latest happenings at Riara Schools
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Button
                asLink
                href="/news"
                variant="ghost"
                className="hidden md:flex items-center"
              >
                View All News
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {newsArticles.slice(0, 3).map((article, index) => (
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

          <div className="text-center md:hidden">
            <Button asLink href="/news" variant="primary">
              View All News
            </Button>
          </div>
        </div>
      </section>

      {/* Upcoming Events */}
      <section className="py-20 bg-primary-50">
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
            {upcomingEvents.slice(0, 4).map((event, index) => (
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

          <div className="text-center">
            <Button asLink href="/news" variant="primary" size="lg">
              View Full Calendar
            </Button>
          </div>
        </div>
      </section>

      <Gallery />
      <Testimonials />

      {/* Call to Action - Admissions */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Join the Riara Family?
            </h2>
            <p className="text-xl mb-8 text-gray-100">
              Begin your journey towards excellence in education. Admissions are open for the 
              upcoming academic year.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asLink
                href="/admissions"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Apply for Admission
              </Button>
              <Button
                asLink
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact Admissions Office
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}

