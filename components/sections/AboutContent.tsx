'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Award, Target, Eye, Users, Shield, Heart, Lightbulb } from 'lucide-react';
import { coreValues, leadershipTeam, facilities } from '@/lib/data';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const iconMap: Record<string, React.ReactNode> = {
  Award: <Award className="w-8 h-8" />,
  Shield: <Shield className="w-8 h-8" />,
  Heart: <Heart className="w-8 h-8" />,
  Lightbulb: <Lightbulb className="w-8 h-8" />,
  Users: <Users className="w-8 h-8" />,
};

export default function AboutContent() {
  return (
    <div className="pt-24">
      {/* Hero Section */}
      <section className="relative py-20">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/riaraabout.png"
            alt="Riara Schools"
            fill
            className="object-cover"
            priority
            sizes="100vw"
          />
          <div className="absolute inset-0 bg-black/30" />
        </div>
        
        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">
              About Riara Schools
            </h1>
            <p className="text-xl text-white/90 leading-relaxed">
              Excellence in Education Since 1984 - Nurturing future leaders through quality 
              education, character development, and holistic growth.
            </p>
          </motion.div>
        </div>
      </section>

      {/* School History */}
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
                  src="/images/building.png"
                  alt="School History"
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
                Our History
              </h2>
              <div className="space-y-4 text-gray-600 leading-relaxed">
                <p>
                  Established in 1984, Riara Schools has been at the forefront of educational 
                  excellence in Kenya for over four decades. What began as a small institution 
                  with a vision to provide quality education has grown into a leading school 
                  that shapes the future of thousands of students.
                </p>
                <p>
                  Throughout our journey, we have remained committed to our founding principles 
                  of academic excellence, character development, and holistic growth. Our 
                  institution has consistently produced graduates who excel not only 
                  academically but also as responsible citizens and leaders in their respective fields.
                </p>
                <p>
                  Today, Riara Schools stands as a testament to our unwavering dedication to 
                  nurturing young minds and preparing them for the challenges and opportunities 
                  of the 21st century.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mr-4">
                    <Target className="w-8 h-8 text-primary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To provide holistic education that nurtures academic excellence, develops 
                  character, and empowers students to become responsible citizens and leaders 
                  who contribute positively to society.
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              <Card className="p-8 h-full">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-secondary-100 rounded-full flex items-center justify-center mr-4">
                    <Eye className="w-8 h-8 text-secondary-600" />
                  </div>
                  <h2 className="text-2xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-gray-600 leading-relaxed">
                  To be a leading educational institution that sets the standard for excellence 
                  in education, producing graduates who are globally competitive, 
                  ethically grounded, and committed to making a positive impact in their 
                  communities and the world.
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Core Values */}
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
              Our Core Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The fundamental principles that guide everything we do at Riara Schools
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {coreValues.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card hover className="p-6 text-center h-full">
                  <div className="flex justify-center mb-4 text-primary-600">
                    {iconMap[value.icon] || <Award className="w-8 h-8" />}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{value.title}</h3>
                  <p className="text-gray-600">{value.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Leadership Team */}
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
              Our Leadership Team
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Experienced educators and administrators dedicated to student success
            </p>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8">
            {leadershipTeam.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-1.33rem)]"
              >
                <Card hover className="overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={member.image}
                      alt={member.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
                    <p className="text-primary-600 font-medium mb-3">{member.role}</p>
                    <p className="text-gray-600 text-sm">{member.bio}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Facilities Overview */}
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
              Our Facilities
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              State-of-the-art facilities designed to support learning and growth
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {facilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card hover className="overflow-hidden">
                  <div className="relative w-full aspect-[4/3]">
                    <Image
                      src={facility.image}
                      alt={facility.name}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{facility.name}</h3>
                    <p className="text-gray-600">{facility.description}</p>
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Accreditations */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Accreditations & Affiliations
            </h2>
            <p className="text-xl text-gray-100 mb-8 leading-relaxed">
              Riara Schools is accredited by the Kenya Ministry of Education and is affiliated 
              with Cambridge Assessment International Education. We are also members of various 
              educational associations that promote excellence in education.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
              {['Ministry of Education', 'Cambridge International', 'KNEC', 'KESSHA'].map((org, index) => (
                <motion.div
                  key={org}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="p-4 bg-white/10 rounded-lg backdrop-blur-sm"
                >
                  <p className="font-medium text-sm">{org}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Join the Riara Family
            </h2>
            <p className="text-lg text-gray-600 mb-8">
              Experience excellence in education. Learn more about our admissions process 
              and how to apply.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button asLink href="/admissions" variant="primary" size="lg">
                Admissions Information
              </Button>
              <Button asLink href="/contact" variant="outline" size="lg">
                Contact Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
