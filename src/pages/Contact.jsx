import { motion } from 'framer-motion';
import { useState } from 'react';

/* eslint-env browser */

const Contact = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefono: '',
    messaggio: '',
  });

  const handleChange = e => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();

    // Basic validation
    if (
      !formData.nome ||
      !formData.email ||
      !formData.telefono ||
      !formData.messaggio
    ) {
      window.alert('Per favore, compila tutti i campi obbligatori.');
      return;
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      window.alert('Per favore, inserisci un indirizzo email valido.');
      return;
    }

    // Phone validation (Italian format)
    const phoneRegex = /^[+]?[0-9\s\-()]{8,15}$/;
    if (!phoneRegex.test(formData.telefono)) {
      window.alert('Per favore, inserisci un numero di telefono valido.');
      return;
    }

    // Simulate form submission
    window.alert('Grazie per il tuo messaggio! Ti contatteremo presto.');

    // Reset form
    setFormData({
      nome: '',
      email: '',
      telefono: '',
      messaggio: '',
    });
  };

  return (
    <motion.section
      id="contatto"
      className="fade-up"
      style={{ paddingTop: '8rem' }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        Mettiamoci in Contatto
      </motion.h2>
      <div className="contact-container">
        <motion.div
          className="contact-form slide-in-left"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <h3>Inviaci un Messaggio</h3>
          <form id="contactForm" onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="nome">Nome e Cognome</label>
              <input
                type="text"
                id="nome"
                name="nome"
                value={formData.nome}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="telefono">Telefono</label>
              <input
                type="tel"
                id="telefono"
                name="telefono"
                value={formData.telefono}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="messaggio">Messaggio</label>
              <textarea
                id="messaggio"
                name="messaggio"
                rows="5"
                value={formData.messaggio}
                onChange={handleChange}
                required
              ></textarea>
            </div>
            <motion.button
              type="submit"
              className="cta-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Invia Richiesta
            </motion.button>
          </form>
        </motion.div>
        <motion.div
          className="contact-info slide-in-right"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h3>Informazioni di Contatto</h3>
          <div className="info-item">
            <strong>Telefono:</strong> 02 1234 5678
          </div>
          <div className="info-item">
            <strong>Email:</strong> info@traslochiveloci.it
          </div>
          <div className="info-item">
            <strong>Orari:</strong> Lun-Ven 8:00-18:00, Sab 8:00-12:00
          </div>
          <div className="info-item">
            <strong>Indirizzo:</strong> Via Esempio 123, 20100 Milano, Italia
          </div>
          <div className="map-container zoom-in">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2796.1234567890123!2d9.123456789012345!3d45.12345678901234!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDXCsDA3JzM0LjQiTiA5wrAwNyc0NC40IkU!5e0!3m2!1sen!2sit!4v1620000000000!5m2!1sen!2sit"
              width="100%"
              height="300"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              title="Mappa della nostra posizione"
            ></iframe>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Contact;
