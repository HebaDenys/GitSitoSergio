import { motion } from 'framer-motion'

const Services = () => {
  const services = [
    {
      icon: "🏠",
      title: "Traslochi Residenziali",
      description: "Spostiamo le tue cose con la massima cura, come se fossero nostre. Offriamo servizio completo per case, appartamenti e ville, con imballaggio professionale e trasporto sicuro.",
      features: [
        "Imballaggio professionale con materiali di qualità",
        "Trasporto con furgoni attrezzati e assicurati",
        "Montaggio e smontaggio mobili",
        "Pulizia finale degli ambienti"
      ]
    },
    {
      icon: "🏢",
      title: "Traslochi Uffici",
      description: "Minimo disordine, massimo rispetto per il tuo lavoro. Specializzati in traslochi aziendali con servizio continuity per non interrompere le attività.",
      features: [
        "Pianificazione dettagliata per evitare interruzioni",
        "Etichettatura precisa di documenti e attrezzature",
        "Trasporto in orari non lavorativi",
        "Riconsegna ordinata degli spazi"
      ]
    },
    {
      icon: "🔧",
      title: "Montaggio Mobili",
      description: "Assembliamo tutto con precisione, pronti all'uso. Servizio specializzato per IKEA, mobili modulari e complementi d'arredo.",
      features: [
        "Montaggio professionale di mobili IKEA",
        "Assemblaggio di librerie e armadi",
        "Installazione di elettrodomestici",
        "Riparazione di mobili danneggiati"
      ]
    },
    {
      icon: "📦",
      title: "Servizi di Imballaggio",
      description: "Protezione totale per i tuoi beni più preziosi. Utilizziamo materiali professionali per garantire la massima sicurezza durante il trasporto.",
      features: [
        "Materiali da imballaggio professionali",
        "Imballaggio su misura per oggetti speciali",
        "Etichettatura chiara e organizzata",
        "Servizio di disimballaggio"
      ]
    }
  ]

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{ paddingTop: '8rem' }}
    >
      <motion.section
        className="fade-up"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          I Nostri Servizi
        </motion.h2>
        <motion.p
          className="section-description"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Scopri tutti i servizi che offriamo per rendere il tuo trasloco un'esperienza serena e senza stress.
        </motion.p>

        <div className="services-grid">
          {services.map((service, index) => (
            <motion.div
              key={index}
              className="service-card slide-in-left"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0,0,0,0.15)" }}
            >
              <div className="service-icon">{service.icon}</div>
              <h3>{service.title}</h3>
              <p>{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </motion.section>
    </motion.div>
  )
}

export default Services