import { motion } from 'framer-motion';

const WhyChooseUs = () => {
  const reasons = [
    'Esperienza decennale nel settore',
    'Personale qualificato e affidabile',
    'Cura dei dettagli per ogni oggetto',
    'Prezzi trasparenti e competitivi',
  ];

  return (
    <motion.section
      id="perche-sceglierci"
      className="fade-up"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Perché Sceglierci
      </motion.h2>
      <motion.ul
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        {reasons.map((reason, index) => (
          <motion.li
            key={index}
            className={`slide-in-right delay-${(index + 1) * 100}`}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: (index + 1) * 0.1 }}
          >
            {reason}
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
};

export default WhyChooseUs;
