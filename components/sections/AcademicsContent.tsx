'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Calendar, Award, FlaskConical, Palette, Music } from 'lucide-react';
import { academicPrograms } from '@/lib/data';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const curriculumInfo = [
  {
    title: 'Cambridge International Curriculum',
    description: 'World-class curriculum recognized globally, preparing students for international universities and careers.',
    features: ['IGCSE and A-Levels', 'Internationally recognized qualifications', 'Pathway to global universities', 'Rigorous academic standards'],
    icon: <GraduationCap className="w-8 h-8" />,
  },
  {
    title: 'CBC (Competency-Based Curriculum)',
    description: 'Aligned with Kenya\'s national curriculum, fostering skills and competencies for the 21st century.',
    features: ['Skills-based learning', 'Project-based activities', 'National curriculum alignment', 'Holistic development'],
    icon: <BookOpen className="w-8 h-8" />,
  },
];

const subjectOfferings = [
  { name: 'English Language & Literature', level: 'All Levels' },
  { name: 'Mathematics', level: 'All Levels' },
  { name: 'Sciences (Physics, Chemistry, Biology)', level: 'Secondary' },
  { name: 'Social Studies / History', level: 'All Levels' },
  { name: 'Geography', level: 'Secondary' },
  { name: 'Business Studies', level: 'Secondary' },
  { name: 'Computer Science / ICT', level: 'Secondary' },
  { name: 'Languages (Kiswahili, French, German)', level: 'All Levels' },
  { name: 'Visual Arts', level: 'All Levels' },
  { name: 'Music', level: 'All Levels' },
  { name: 'Physical Education', level: 'All Levels' },
  { name: 'Religious Education', level: 'All Levels' },
];

export default function AcademicsContent() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="py-20 bg-gradient-to-br from-primary-50 to-secondary-50">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
              Academics at Riara Schools
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Comprehensive educational programs designed to prepare students for success 
              in higher education and beyond
            </p>
          </motion.div>
        </div>
      </section>

      {/* Curriculum Overview */}
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
              Curriculum Overview
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We offer both Cambridge International and CBC curricula, providing students 
              with flexible pathways to success
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {curriculumInfo.map((curriculum, index) => (
              <motion.div
                key={curriculum.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card hover className="p-8 h-full">
                  <div className="flex items-center mb-6 text-primary-600">
                    {curriculum.icon}
                    <h3 className="text-2xl font-bold text-gray-900 ml-4">{curriculum.title}</h3>
                  </div>
                  <p className="text-gray-600 mb-6 leading-relaxed">{curriculum.description}</p>
                  <ul className="space-y-3">
                    {curriculum.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start">
                        <svg className="w-5 h-5 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        <span className="text-gray-600">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs by Level */}
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
              Programs by Level
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Comprehensive educational programs tailored to each stage of development
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {Object.entries(academicPrograms).map(([key, program], index) => (
              <motion.div
                key={key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <Card hover className="p-8 h-full">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mb-6 text-primary-600">
                    <BookOpen className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">{program.title}</h3>
                  <p className="text-sm text-primary-600 font-medium mb-4">Ages: {program.ageRange}</p>
                  <p className="text-gray-600 mb-6 leading-relaxed">{program.description}</p>
                  <div className="mb-6">
                    <h4 className="font-bold text-gray-900 mb-3">Key Subjects:</h4>
                    <ul className="space-y-2">
                      {program.subjects.slice(0, 5).map((subject, idx) => (
                        <li key={idx} className="flex items-start text-sm text-gray-600">
                          <svg className="w-4 h-4 text-primary-600 mr-2 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clipRule="evenodd" />
                          </svg>
                          {subject}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <Button asLink href="/admissions" variant="primary" className="w-full">
                    Learn More
                  </Button>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Subject Offerings */}
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
              Subject Offerings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A comprehensive range of subjects designed to nurture well-rounded individuals
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {subjectOfferings.map((subject, index) => (
              <motion.div
                key={subject.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
              >
                <Card hover className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{subject.name}</h3>
                  <p className="text-sm text-primary-600">{subject.level}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Academic Calendar */}
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
                Academic Calendar
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Important dates and events for the academic year
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <Card className="p-8">
              <div className="space-y-6">
                {[
                  { term: 'Term 1', period: 'January - April', events: ['Opening Day', 'Mid-Term Break', 'End of Term' ] },
                  { term: 'Term 2', period: 'May - August', events: ['Opening Day', 'Mid-Term Break', 'End of Term Examinations' ] },
                  { term: 'Term 3', period: 'September - November', events: ['Opening Day', 'Mid-Term Break', 'Final Examinations', 'Graduation Ceremony' ] },
                ].map((term, index) => (
                  <motion.div
                    key={term.term}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2, duration: 0.6 }}
                    className="border-b border-gray-200 last:border-0 pb-6 last:pb-0"
                  >
                    <div className="flex items-start justify-between mb-4">
                      <div>
                        <h3 className="text-xl font-bold text-gray-900 mb-1">{term.term}</h3>
                        <p className="text-primary-600 font-medium">{term.period}</p>
                      </div>
                    </div>
                    <ul className="space-y-2">
                      {term.events.map((event, idx) => (
                        <li key={idx} className="flex items-center text-gray-600">
                          <svg className="w-4 h-4 text-primary-600 mr-2 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                          </svg>
                          {event}
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Examination Results & Achievements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12"
          >
            <div className="flex items-center justify-center mb-4">
              <Award className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Examination Results & Achievements
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Consistent excellence in national and international examinations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'KCSE Results', description: 'Consistent performance above national average with many students joining top universities', value: '95%+' },
              { title: 'IGCSE Results', description: 'Excellent pass rates with many students achieving A* and A grades', value: '90%+' },
              { title: 'University Placements', description: 'Our graduates are placed in top universities locally and internationally', value: '98%' },
            ].map((achievement, index) => (
              <motion.div
                key={achievement.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
              >
                <Card hover className="p-8 text-center">
                  <div className="text-4xl font-bold text-primary-600 mb-4">{achievement.value}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{achievement.title}</h3>
                  <p className="text-gray-600">{achievement.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Begin Your Academic Journey?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Learn more about our admissions process and how to apply
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asLink
                href="/admissions"
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                Admissions Information
              </Button>
              <Button
                asLink
                href="/contact"
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
