import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import heroImage from '../assets/images/Immagine_Hero.jpg'

const Hero = () => {
  return (
    <motion.section
      id="hero"
      className="fade-in"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <div className="hero-content">
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Il Tuo Trasloco in Mani Esperte
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Con cura, professionalità e attenzione per i tuoi ricordi più preziosi.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <Link to="/contattaci" className="cta-button">
            Inizia Ora
          </Link>
        </motion.div>
      </div>
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
  )
}

export default Hero