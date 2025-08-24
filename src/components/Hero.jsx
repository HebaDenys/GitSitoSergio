import { motion } from 'framer-motion';
import { HeroContent } from './molecules';
import heroImage from '../assets/images/Immagine_Hero.jpg';

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="fade-in"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <HeroContent
        title="Il Tuo Trasloco in Mani Esperte"
        description="Con cura, professionalità e attenzione per i tuoi ricordi più preziosi."
        ctaText="Inizia Ora"
        ctaTo="/contattaci"
      />
      <div className="hero-image zoom-in">
        <motion.img
          src={heroImage}
          alt="Traslochi Veloci - Il tuo trasloco in mani esperte"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
        />
      </div>
    </motion.section>
  );
};

export default Hero;
