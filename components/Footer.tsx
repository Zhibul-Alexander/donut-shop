'use client';

import { motion } from 'framer-motion';
import { Heart, Instagram, Facebook, Mail } from 'lucide-react';
import { scrollToSection } from '@/utils/scroll';
import { useLocale, t } from '@/hooks/useLocale';
import { i18n, contacts } from '@/site.config';

export default function Footer() {
  const { locale } = useLocale();

  return (
    <footer className="relative py-16 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main Footer Content: бренд + описание слева, соцсети справа */}
        <div className="flex flex-col md:flex-row items-start justify-between gap-8 mb-12">
          {/* Brand & description */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-md"
          >
            <div className="flex items-center space-x-2 mb-4">
              <div className="text-4xl">🍩</div>
              <span className="text-2xl font-bold text-donut-chocolate">
                Donut Dreams
              </span>
            </div>
            <p className="text-gray-600">
              {t(i18n.footer.description, locale)}
            </p>
          </motion.div>

          {/* Socials in the right corner */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex gap-4 md:self-start md:justify-end"
          >
            {[
              { icon: Instagram, url: contacts.social.instagram },
              { icon: Facebook, url: contacts.social.facebook },
              { icon: Mail, url: `mailto:${contacts.email}` },
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: 'tween', duration: 0.12, delay: 0, ease: 'easeOut' }}
                className="w-10 h-10 glass-card rounded-lg flex items-center justify-center"
              >
                <social.icon size={20} className="text-donut-chocolate" />
              </motion.a>
            ))}
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-gray-300/50 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-gray-600 text-sm text-center md:text-left">
            © 2026 Donut Dreams. {t(i18n.footer.rights, locale)}
          </p>
          <p className="text-gray-600 text-sm flex items-center gap-2">
            {t(i18n.footer.madeWith, locale)} <Heart size={16} className="text-donut-chocolate fill-current" /> {t(i18n.footer.forLovers, locale)}
          </p>
        </motion.div>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-donut-chocolate/40 blur-3xl" />
      </div>
    </footer>
  );
}
