import { motion } from 'framer-motion';
import PropTypes from 'prop-types';
import { Typography, Button } from '../atoms';

const HeroContent = ({
  title,
  description,
  ctaText,
  ctaTo,
  ctaHref,
  onCtaClick,
  className = '',
}) => {
  return (
    <motion.div
      className={`hero-content ${className}`.trim()}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
    >
      <Typography
        variant="h1"
        animate={true}
        animationProps={{
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.2 },
        }}
        className="hero-title"
      >
        {title}
      </Typography>

      <Typography
        variant="p"
        animate={true}
        animationProps={{
          initial: { opacity: 0, y: 30 },
          animate: { opacity: 1, y: 0 },
          transition: { duration: 0.8, delay: 0.4 },
        }}
        className="hero-description"
      >
        {description}
      </Typography>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="hero-cta"
      >
        {ctaText && (
          <Button to={ctaTo} href={ctaHref} onClick={onCtaClick}>
            {ctaText}
          </Button>
        )}
      </motion.div>
    </motion.div>
  );
};

HeroContent.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  ctaText: PropTypes.string,
  ctaTo: PropTypes.string,
  ctaHref: PropTypes.string,
  onCtaClick: PropTypes.func,
  className: PropTypes.string,
};

export default HeroContent;
