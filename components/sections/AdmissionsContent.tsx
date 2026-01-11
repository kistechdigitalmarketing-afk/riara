'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FileText, DollarSign, CheckCircle, HelpCircle, Download, Mail, Phone } from 'lucide-react';
import { admissionFees, admissionFAQs, contactInfo } from '@/lib/data';
import Button from '@/components/ui/Button';
import { Card } from '@/components/ui/Card';

const admissionSteps = [
  {
    step: 1,
    title: 'Submit Application',
    description: 'Complete and submit the admission application form along with required documents and application fee.',
    icon: <FileText className="w-6 h-6" />,
  },
  {
    step: 2,
    title: 'Assessment',
    description: 'Students may be required to take an entrance examination or assessment to evaluate their academic level.',
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    step: 3,
    title: 'Interview',
    description: 'Shortlisted candidates and their parents may be invited for an interview with the admissions committee.',
    icon: <Phone className="w-6 h-6" />,
  },
  {
    step: 4,
    title: 'Acceptance',
    description: 'Successful candidates will receive an acceptance letter with instructions for completing admission.',
    icon: <CheckCircle className="w-6 h-6" />,
  },
  {
    step: 5,
    title: 'Enrollment',
    description: 'Complete enrollment by paying the admission fee and submitting all required documents.',
    icon: <FileText className="w-6 h-6" />,
  },
];

const requiredDocuments = [
  'Completed application form',
  'Birth certificate (copy)',
  'Previous school reports (last 2 years)',
  'Passport-size photographs (4 copies)',
  'Medical examination report',
  'Transfer certificate (for transfers)',
  'Character reference (optional but recommended)',
];

export default function AdmissionsContent() {
  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-KE', {
      style: 'currency',
      currency: 'KES',
      minimumFractionDigits: 0,
    }).format(amount);
  };

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
              Admissions at Riara Schools
            </h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Begin your journey towards excellence in education. Learn about our admission 
              process, requirements, and how to apply.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Admission Process */}
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
              Admission Process
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A step-by-step guide to applying for admission to Riara Schools
            </p>
          </motion.div>

          <div className="max-w-5xl mx-auto">
            <div className="relative">
              <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gray-200 hidden md:block"></div>
              <div className="space-y-8">
                {admissionSteps.map((step, index) => (
                  <motion.div
                    key={step.step}
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.15, duration: 0.6 }}
                    className="relative flex items-start"
                  >
                    <div className="flex-shrink-0 w-16 h-16 bg-primary-600 rounded-full flex items-center justify-center text-white font-bold text-xl mr-6 z-10 relative">
                      {step.icon}
                    </div>
                    <Card hover className="flex-1 p-6">
                      <div className="flex items-center mb-3">
                        <h3 className="text-xl font-bold text-gray-900 mr-3">Step {step.step}</h3>
                        <span className="text-primary-600 font-medium">{step.title}</span>
                      </div>
                      <p className="text-gray-600 leading-relaxed">{step.description}</p>
                    </Card>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Admission Requirements */}
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
              Admission Requirements
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Documents and qualifications required for admission
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            <Card className="p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Required Documents</h3>
              <ul className="space-y-4">
                {requiredDocuments.map((doc, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="flex items-start"
                  >
                    <svg className="w-6 h-6 text-primary-600 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span className="text-gray-700">{doc}</span>
                  </motion.li>
                ))}
              </ul>
              <div className="mt-8 pt-6 border-t border-gray-200">
                <p className="text-sm text-gray-600 mb-4">
                  <strong>Note:</strong> Admission requirements may vary by level. Please contact 
                  the admissions office for specific requirements for your child&apos;s grade level.
                </p>
                <Button
                  asLink
                  href={`mailto:${contactInfo.email.admissions}`}
                  variant="primary"
                  className="w-full md:w-auto"
                >
                  <Mail className="mr-2 w-5 h-5" />
                  Contact Admissions Office
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Fee Structure */}
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
              <DollarSign className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Fee Structure
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Transparent and comprehensive fee structure for all programs
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
              <Card hover className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Application Fees</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Application Fee</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {formatCurrency(admissionFees.application.amount)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {admissionFees.application.description}
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Admission Fees</h3>
                <div className="space-y-3">
                  <div>
                    <p className="text-sm text-gray-600 mb-1">Admission Fee</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {formatCurrency(admissionFees.admission.amount)}
                    </p>
                    <p className="text-xs text-gray-500 mt-1">
                      {admissionFees.admission.description}
                    </p>
                  </div>
                </div>
              </Card>

              <Card hover className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Primary School Tuition</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-600">Per Term</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {formatCurrency(admissionFees.tuition.primary.term1)}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {admissionFees.tuition.primary.description}
                  </p>
                </div>
              </Card>

              <Card hover className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">Secondary School Tuition</h3>
                <div className="space-y-2">
                  <div>
                    <p className="text-sm text-gray-600">Per Term</p>
                    <p className="text-2xl font-bold text-primary-600">
                      {formatCurrency(admissionFees.tuition.secondary.term1)}
                    </p>
                  </div>
                  <p className="text-xs text-gray-500 mt-2">
                    {admissionFees.tuition.secondary.description}
                  </p>
                </div>
              </Card>
            </div>

            <Card className="p-6 bg-primary-50">
              <div className="flex items-start">
                <DollarSign className="w-6 h-6 text-primary-600 mr-4 mt-1 flex-shrink-0" />
                <div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">Boarding Fees (Optional)</h3>
                  <p className="text-2xl font-bold text-primary-600 mb-2">
                    {formatCurrency(admissionFees.boarding.amount)} per term
                  </p>
                  <p className="text-sm text-gray-600">{admissionFees.boarding.description}</p>
                </div>
              </div>
            </Card>

            <div className="mt-6 text-center">
              <p className="text-sm text-gray-600 mb-4">
                Fees are subject to change. Please contact the admissions office for the most 
                current fee structure and payment plans.
              </p>
              <Button
                asLink
                href="/documents/fee-structure.pdf"
                variant="outline"
                className="mr-4"
              >
                <Download className="mr-2 w-5 h-5" />
                Download Fee Structure
              </Button>
              <Button
                asLink
                href={`mailto:${contactInfo.email.admissions}`}
                variant="primary"
              >
                <Mail className="mr-2 w-5 h-5" />
                Request Information
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQs */}
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
              <HelpCircle className="w-8 h-8 text-primary-600 mr-3" />
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
                Frequently Asked Questions
              </h2>
            </div>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Common questions about the admission process
            </p>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-4">
            {admissionFAQs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
              >
                <Card hover className="p-6">
                  <h3 className="text-lg font-bold text-gray-900 mb-3">{faq.question}</h3>
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Application Form Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Application Form
              </h2>
              <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                Download the application form or contact us for more information
              </p>
            </motion.div>

            <Card className="p-8 text-center">
              <FileText className="w-16 h-16 text-primary-600 mx-auto mb-6" />
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                Ready to Apply?
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                Download the admission application form, complete it with all required 
                documents, and submit it to our admissions office. Alternatively, you can 
                contact us for assistance with the application process.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button
                  asLink
                  href="/documents/application-form.pdf"
                  variant="primary"
                  size="lg"
                >
                  <Download className="mr-2 w-5 h-5" />
                  Download Application Form
                </Button>
                <Button
                  asLink
                  href="/contact"
                  variant="outline"
                  size="lg"
                >
                  Contact Admissions
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact Admissions */}
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
              Have Questions About Admissions?
            </h2>
            <p className="text-xl text-gray-100 mb-8">
              Our admissions office is here to help. Contact us for more information 
              about the admission process, requirements, or to schedule a school tour.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asLink
                href={`mailto:${contactInfo.email.admissions}`}
                variant="secondary"
                size="lg"
                className="bg-white text-primary-600 hover:bg-gray-100"
              >
                <Mail className="mr-2 w-5 h-5" />
                Email Admissions
              </Button>
              <Button
                asLink
                href={`tel:${contactInfo.phone.primary}`}
                variant="outline"
                size="lg"
                className="border-white/30 text-white hover:bg-white/10"
              >
                <Phone className="mr-2 w-5 h-5" />
                Call Us
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
