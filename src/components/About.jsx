import { motion } from 'framer-motion';
import aboutImage from '../assets/images/Chi_Siamo.jpg';

const About = () => {
  return (
    <motion.section
      id="chi-siamo"
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
        Chi Siamo
      </motion.h2>
      <div className="about-content">
        <motion.div
          className="about-text slide-in-left"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <p>
            Da oltre 10 anni, Traslochi Veloci trasforma i traslochi in
            esperienze positive. Il nostro team di esperti sa quanto sia
            importante per te avere accanto persone di fiducia che trattano i
            tuoi beni con cura e rispetto.
          </p>
          <p>
            La nostra missione è rendere ogni trasloco un nuovo inizio sereno.
          </p>
        </motion.div>
        <motion.div
          className="about-image zoom-in"
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <motion.img
            src={aboutImage}
            alt="Il nostro team di esperti traslocatori"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;
