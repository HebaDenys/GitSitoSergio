import { motion } from 'framer-motion'
import Hero from '../components/Hero'
import Services from '../components/Services'
import About from '../components/About'
import WhyChooseUs from '../components/WhyChooseUs'
import Testimonials from '../components/Testimonials'

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <Hero />
      <Services />
      <About />
      <WhyChooseUs />
      <Testimonials />
    </motion.div>
  )
}

export default Home