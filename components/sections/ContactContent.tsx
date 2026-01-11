'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { MapPin, Phone, Mail, Clock, Facebook, Twitter, Instagram, Linkedin } from 'lucide-react';
import { contactInfo } from '@/lib/data';
import ContactForm from '@/components/forms/ContactForm';
import { Card } from '@/components/ui/Card';

export default function ContactContent() {
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
              Contact Us
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We'd love to hear from you. Get in touch with us for inquiries, 
              admissions, or to schedule a school tour.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <Card hover className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <MapPin className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Address</h3>
                <p className="text-gray-600 text-sm leading-relaxed mb-2">
                  {contactInfo.address.primary}
                </p>
                <p className="text-gray-600 text-sm">
                  {contactInfo.address.secondary}
                </p>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.6 }}
            >
              <Card hover className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <Phone className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Phone</h3>
                <a
                  href={`tel:${contactInfo.phone.primary}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors block mb-1"
                >
                  {contactInfo.phone.primary}
                </a>
                <a
                  href={`tel:${contactInfo.phone.secondary}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors block text-sm"
                >
                  {contactInfo.phone.secondary}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
            >
              <Card hover className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <Mail className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Email</h3>
                <a
                  href={`mailto:${contactInfo.email.general}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors block mb-1 text-sm break-all"
                >
                  {contactInfo.email.general}
                </a>
                <a
                  href={`mailto:${contactInfo.email.admissions}`}
                  className="text-gray-600 hover:text-primary-600 transition-colors block text-sm break-all"
                >
                  {contactInfo.email.admissions}
                </a>
              </Card>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Card hover className="p-6 text-center">
                <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4 text-primary-600">
                  <Clock className="w-8 h-8" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-3">Office Hours</h3>
                <p className="text-gray-600 text-sm mb-1">
                  {contactInfo.officeHours.weekdays}
                </p>
                <p className="text-gray-600 text-sm mb-1">
                  {contactInfo.officeHours.saturday}
                </p>
                <p className="text-gray-600 text-sm">
                  {contactInfo.officeHours.sunday}
                </p>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Form and Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Fill out the form below and we'll get back to you as soon as possible. 
                For urgent inquiries, please call us directly.
              </p>
              <Card className="p-8">
                <ContactForm />
              </Card>
            </motion.div>

            {/* Map */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Visit Us
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                We're located in a convenient location in Nairobi. Schedule a school tour 
                to visit our facilities and experience the vibrant community at Riara Schools.
              </p>
              <Card className="overflow-hidden">
                <div className="relative w-full aspect-[4/3]">
                  {/* Google Maps Embed */}
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.8376!2d36.7754!3d-1.2921!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMcKwMTcnMzEuNiJTIDM2wrA0NiczMS4yIkU!5e0!3m2!1sen!2ske!4v1234567890"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Riara Schools Location"
                    className="absolute inset-0"
                  />
                </div>
                <div className="p-6 bg-white">
                  <div className="flex items-start">
                    <MapPin className="w-6 h-6 text-primary-600 mr-3 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-bold text-gray-900 mb-2">Our Location</h3>
                      <p className="text-gray-600 text-sm mb-1">
                        {contactInfo.address.primary}
                      </p>
                      <p className="text-gray-600 text-sm">
                        {contactInfo.address.secondary}
                      </p>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Department Contacts */}
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
              Department Contacts
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Direct contact information for specific departments
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              { title: 'General Inquiries', email: contactInfo.email.general, phone: contactInfo.phone.primary },
              { title: 'Admissions', email: contactInfo.email.admissions, phone: contactInfo.phone.primary },
              { title: 'Principal\'s Office', email: contactInfo.email.principal, phone: contactInfo.phone.primary },
            ].map((department, index) => (
              <motion.div
                key={department.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
              >
                <Card hover className="p-6 text-center">
                  <h3 className="text-lg font-bold text-gray-900 mb-4">{department.title}</h3>
                  <a
                    href={`mailto:${department.email}`}
                    className="text-primary-600 hover:text-primary-700 transition-colors block mb-2 text-sm break-all"
                  >
                    {department.email}
                  </a>
                  <a
                    href={`tel:${department.phone}`}
                    className="text-gray-600 hover:text-primary-600 transition-colors text-sm"
                  >
                    {department.phone}
                  </a>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="py-20 bg-primary-600 text-white">
        <div className="container mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="max-w-2xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Connect With Us
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Follow us on social media for the latest news, updates, and highlights 
              from Riara Schools
            </p>
            <div className="flex justify-center space-x-4">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-6 h-6" />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-12 h-12 bg-white/20 hover:bg-white/30 rounded-full flex items-center justify-center transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-6 h-6" />
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
