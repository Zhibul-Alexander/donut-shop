'use client';

import { motion } from 'framer-motion';
import { MapPin, Phone, Clock, Instagram, Facebook } from 'lucide-react';
import { contacts, i18n } from '@/site.config';
import { useLocale, t } from '@/hooks/useLocale';

const socialLinks = [
  { name: 'Instagram', icon: Instagram, url: contacts.social.instagram, color: 'from-amber-700 to-amber-500' },
  { name: 'Facebook', icon: Facebook, url: contacts.social.facebook, color: 'from-blue-600 to-blue-400' },
  { name: 'TikTok', icon: '🎵' as const, url: contacts.social.tiktok, color: 'from-black to-gray-800' },
];

export default function Contacts() {
  const { locale } = useLocale();
  const contactInfo = [
    { icon: MapPin, titleKey: 'address' as const, content: contacts.address[locale] },
    { icon: Phone, titleKey: 'phone' as const, content: contacts.phone },
    { icon: Clock, titleKey: 'hours' as const, content: contacts.hours[locale] },
  ];
  return (
    <section id="contacts" className="relative py-20 md:py-32 overflow-hidden">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-4"
          >
            <span className="text-6xl">📍</span>
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-donut-chocolate">
            {t(i18n.contacts.title, locale)}
          </h2>
          <p className="text-xl text-gray-700 max-w-2xl mx-auto">
            {t(i18n.contacts.subtitle, locale)}
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                // Задержка только на появление карточки
                transition={{ delay: index * 0.1 }}
                // Ховер — сразу, без задержки
                whileHover={{
                  scale: 1.02,
                  x: 5,
                  transition: { duration: 0.2, delay: 0 },
                }}
                className="glass-card p-6 rounded-2xl flex items-start gap-4"
              >
                <div className="w-12 h-12 bg-donut-chocolate rounded-xl flex items-center justify-center flex-shrink-0">
                  <info.icon className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-gray-800 mb-1">{t(i18n.contacts[info.titleKey], locale)}</h3>
                  <p className="text-gray-600">{info.content}</p>
                </div>
              </motion.div>
            ))}

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="glass-card p-6 rounded-2xl"
            >
              <h3 className="text-xl font-bold text-gray-800 mb-4">{t(i18n.contacts.social, locale)}</h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.url}
                    whileHover={{
                      scale: 1.1,
                      rotate: 5,
                      transition: { duration: 0.2, delay: 0 },
                    }}
                    whileTap={{ scale: 0.95 }}
                    className={`w-14 h-14 bg-gradient-to-br ${social.color} rounded-xl flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-shadow`}
                  >
                    {typeof social.icon === 'string' ? (
                      <span className="text-2xl">{social.icon}</span>
                    ) : (
                      <social.icon size={24} />
                    )}
                  </motion.a>
                ))}
              </div>
            </motion.div>

            {/* CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5 }}
              className="glass-card p-8 rounded-2xl bg-gradient-to-br from-donut-cream to-donut-peach"
            >
              <h3 className="text-2xl font-bold text-gray-800 mb-2">{t(i18n.contacts.ctaTitle, locale)}</h3>
              <p className="text-gray-700 mb-4">
                {t(i18n.contacts.ctaText, locale)}
              </p>
              <motion.a
                href={contacts.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{
                  scale: 1.05,
                  transition: { duration: 0.2, delay: 0 },
                }}
                whileTap={{ scale: 0.95 }}
                className="block w-full text-center bg-donut-chocolate text-white py-3 rounded-full font-semibold shadow-lg hover:bg-donut-chocolate/90 transition-all"
              >
                {t(i18n.contacts.ctaBtn, locale)}
              </motion.a>
            </motion.div>
          </motion.div>

          {/* Map */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-3xl overflow-hidden h-[600px]"
          >
            {/* Google Maps Embed */}
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2244.4217090524853!2d37.62015!3d55.75583!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNTXCsDQ1JzIxLjAiTiAzN8KwMzcnMTIuNSJF!5e0!3m2!1sru!2sru!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Donut Dreams Location"
              className="w-full h-full"
            />
            {/* 
            Alternative: Custom map placeholder
            <div className="w-full h-full bg-donut-chocolate flex items-center justify-center">
              <div className="text-center">
                <MapPin size={64} className="mx-auto mb-4 text-white" />
                <p className="text-white font-bold text-xl">Google Maps</p>
                <p className="text-white/80">ул. Пончиковая, 42</p>
              </div>
            </div>
            */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
