'use client';

import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';
import { useLocale, t } from '@/hooks/useLocale';
import { i18n, contacts } from '@/site.config';

export default function Footer() {
  const { locale } = useLocale();
  const currentYear = new Date().getFullYear();
  const footerLinks = [
    {
      title: t(i18n.footer.links.navigation, locale),
      links: [
        { label: t(i18n.nav.home, locale), id: 'home' },
        { label: t(i18n.nav.donuts, locale), id: 'products' },
        { label: t(i18n.nav.about, locale), id: 'about' },
        { label: t(i18n.nav.delivery, locale), id: 'delivery' },
      ],
    },
    {
      title: t(i18n.footer.links.information, locale),
      links: [
        { label: t(i18n.contacts.title, locale), id: 'contacts' },
        { label: t(i18n.footer.links.payment, locale), id: 'contacts' },
        { label: t(i18n.footer.links.careers, locale), id: 'contacts' },
        { label: t(i18n.footer.links.partners, locale), id: 'contacts' },
      ],
    },
    {
      title: t(i18n.footer.links.support, locale),
      links: [
        { label: t(i18n.footer.links.faq, locale), id: 'contacts' },
        { label: t(i18n.footer.links.privacy, locale), id: 'contacts' },
        { label: t(i18n.footer.links.terms, locale), id: 'contacts' },
        { label: t(i18n.footer.links.refund, locale), id: 'contacts' },
      ],
    },
  ];

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="mb-6"
            >
              <div className="flex items-center space-x-2 mb-4">
                <div className="text-4xl">🍩</div>
                <span className="text-2xl font-bold bg-gradient-to-r from-donut-berry to-donut-chocolate bg-clip-text text-transparent">
                  Donut Dreams
                </span>
              </div>
              <p className="text-gray-600 mb-6 max-w-sm">
                {t(i18n.footer.description, locale)}
              </p>
              <div className="flex gap-4">
                {[
                  { icon: Instagram, url: contacts.social.instagram },
                  { icon: Facebook, url: contacts.social.facebook },
                  { icon: Mail, url: `mailto:${contacts.email}` },
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-10 h-10 glass-card rounded-lg flex items-center justify-center hover:bg-white/60 transition-all"
                  >
                    <social.icon size={20} className="text-donut-berry" />
                  </motion.a>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Links */}
          {footerLinks.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: sectionIndex * 0.1 }}
            >
              <h4 className="font-bold text-gray-800 mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <button
                      onClick={() => scrollToSection(link.id)}
                      className="text-gray-600 hover:text-donut-berry transition-colors text-left"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-300/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm text-center md:text-left">
            © {currentYear} Donut Dreams. {t(i18n.footer.rights, locale)}
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            {t(i18n.footer.madeWith, locale)} <Heart size={16} className="text-donut-berry fill-current" /> {t(i18n.footer.forLovers, locale)}
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-gradient-to-br from-donut-berry to-donut-pink blur-3xl" />
      </div>
    </footer>
  );
}
