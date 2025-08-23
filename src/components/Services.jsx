import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Traslochi Residenziali",
      description: "Spostiamo le tue cose con la massima cura, come se fossero nostre.",
      delay: 0
    },
    {
      icon: "🏢",
      title: "Traslochi Uffici",
      description: "Minimo disordine, massimo rispetto per il tuo lavoro.",
      delay: 100
    },
    {
      icon: "🔧",
      title: "Montaggio Mobili",
      description: "Assembliamo tutto con precisione, pronti all'uso.",
      delay: 200
    }
  ]

  return (
    <motion.section
      id="servizi"
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
        I Nostri Servizi
      </motion.h2>
      <div className="services-grid">
        {services.map((service, index) => (
          <motion.div
            key={index}
            className={`service-card slide-in-left delay-${service.delay}`}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: service.delay / 1000 }}
            whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
          >
            <div className="service-icon">{service.icon}</div>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  )
}

export default Services