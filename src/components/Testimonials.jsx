import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      name: 'Maria R.',
      location: 'Milano',
      avatar:
        'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=80&h=80&fit=crop&crop=face&auto=format',
      text: 'Traslochi Veloci ha reso il nostro trasloco meno stressante. Tutto è arrivato integro e in tempo!',
    },
    {
      name: 'Luca B.',
      location: 'Roma',
      avatar:
        'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&h=80&fit=crop&crop=face&auto=format',
      text: 'Professionisti seri e gentili. Consiglio vivamente!',
    },
  ];

  return (
    <motion.section
      id="testimonianze"
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
        Cosa Dicono i Nostri Clienti
      </motion.h2>
      <div className="testimonials">
        {testimonials.map((testimonial, index) => (
          <motion.div
            key={index}
            className={`testimonial scale-in delay-${index * 100}`}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            whileHover={{ y: -5, boxShadow: '0 15px 35px rgba(0,0,0,0.15)' }}
          >
            <div className="testimonial-avatar">
              <img src={testimonial.avatar} alt={testimonial.name} />
            </div>
            <blockquote>{testimonial.text}</blockquote>
            <cite>
              - {testimonial.name}, {testimonial.location}
            </cite>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
};

export default Testimonials;
