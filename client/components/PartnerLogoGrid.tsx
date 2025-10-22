import { motion } from 'framer-motion';
import { staggerContainer, staggerItem } from '@/lib/animations';

const partners = [
  { name: 'MetLife', logo: 'https://logo.clearbit.com/metlife.com' },
  { name: 'Prudential', logo: 'https://logo.clearbit.com/prudential.com' },
  { name: 'Aetna', logo: 'https://logo.clearbit.com/aetna.com' },
  { name: 'Blue Cross', logo: 'https://logo.clearbit.com/bcbs.com' },
  { name: 'UnitedHealthcare', logo: 'https://logo.clearbit.com/uhc.com' },
  { name: 'Cigna', logo: 'https://logo.clearbit.com/cigna.com' },
  { name: 'Humana', logo: 'https://logo.clearbit.com/humana.com' },
  { name: 'Anthem', logo: 'https://logo.clearbit.com/anthem.com' }
];

export function PartnerLogoGrid() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Trusted Insurance Partners
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We work with America's top-rated insurance carriers to bring you the best coverage options
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {partners.map((partner, i) => (
            <motion.div
              key={i}
              variants={staggerItem}
              whileHover={{ scale: 1.1, zIndex: 10 }}
              transition={{ duration: 0.2 }}
              className="flex items-center justify-center p-6 bg-gray-50 rounded-xl hover:bg-white hover:shadow-lg transition-all"
            >
              <img
                src={partner.logo}
                alt={`${partner.name} logo`}
                className="h-12 w-auto object-contain grayscale hover:grayscale-0 transition-all"
                onError={(e) => {
                  e.currentTarget.src = `https://ui-avatars.com/api/?name=${partner.name}&size=200&background=3b82f6&color=fff`;
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="text-center text-sm text-gray-500 mt-8"
        >
          + 40 more trusted insurance carriers
        </motion.p>
      </div>
    </section>
  );
}
