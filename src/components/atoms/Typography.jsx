import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Typography = ({
  variant = 'p',
  children,
  className = '',
  animate = false,
  animationProps = {},
  ...props
}) => {
  const Component = variant;

  const defaultAnimation = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
  };

  const animation = animate ? { ...defaultAnimation, ...animationProps } : {};

  if (animate) {
    return (
      <motion.div {...animation}>
        <Component className={className} {...props}>
          {children}
        </Component>
      </motion.div>
    );
  }

  return (
    <Component className={className} {...props}>
      {children}
    </Component>
  );
};

Typography.propTypes = {
  variant: PropTypes.oneOf(['h1', 'h2', 'h3', 'h4', 'h5', 'h6', 'p', 'span']),
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  animate: PropTypes.bool,
  animationProps: PropTypes.object,
};

export default Typography;
