import Link from 'next/link';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { quickLinks, contactInfo } from '@/lib/data';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-riara-primary-dark text-white/90">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">About Riara Schools</h3>
            <p className="text-sm mb-4 text-white/80">
              Excellence in Education - Nurturing future leaders through quality education,
              character development, and holistic growth since 1984.
            </p>
            <div className="flex space-x-4">
              <a
                href={contactInfo.social.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-riara-accent transition-all duration-300"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.twitter}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-riara-accent transition-all duration-300"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-riara-accent transition-all duration-300"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href={contactInfo.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-riara-accent transition-all duration-300"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/80 hover:text-riara-accent transition-all duration-300"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0 text-riara-accent" />
                <div className="text-white/80">
                  <p>{contactInfo.address.primary}</p>
                  <p>{contactInfo.address.secondary}</p>
                </div>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="w-5 h-5 flex-shrink-0 text-riara-accent" />
                <a
                  href={`tel:${contactInfo.phone.primary}`}
                  className="text-white/80 hover:text-riara-accent transition-all duration-300"
                >
                  {contactInfo.phone.primary}
                </a>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="w-5 h-5 flex-shrink-0 text-riara-accent" />
                <a
                  href={`mailto:${contactInfo.email.general}`}
                  className="text-white/80 hover:text-riara-accent transition-all duration-300"
                >
                  {contactInfo.email.general}
                </a>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-white text-lg font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2 text-sm text-white/80">
              <li>{contactInfo.officeHours.weekdays}</li>
              <li>{contactInfo.officeHours.saturday}</li>
              <li>{contactInfo.officeHours.sunday}</li>
            </ul>
            <div className="mt-4">
              <Link
                href="/admissions"
                className="inline-block px-6 py-2 bg-riara-accent text-white rounded-lg hover:bg-riara-accent-hover transition-all duration-300 font-medium"
              >
                Apply for Admission
              </Link>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/10 mt-8 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-white/70">
              © {currentYear} Riara Schools. All rights reserved.
            </p>
            <div className="flex space-x-6 text-sm">
              <Link href="/privacy" className="text-white/80 hover:text-riara-accent transition-all duration-300">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-white/80 hover:text-riara-accent transition-all duration-300">
                Terms of Service
              </Link>
            </div>
          </div>
          <div className="mt-4 text-right">
            <p className="text-xs text-white/60">
              Created by{' '}
              <a
                href="https://diginowsolutions.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white/80 hover:text-riara-accent transition-all duration-300 underline"
              >
                DigiNowSolutions
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}


