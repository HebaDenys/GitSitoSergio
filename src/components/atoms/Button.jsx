import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const Button = ({
  children,
  to,
  href,
  variant = 'primary',
  size = 'medium',
  onClick,
  disabled = false,
  className = '',
  ...props
}) => {
  const baseClasses = 'cta-button';
  const variantClasses = {
    primary: 'primary',
    secondary: 'secondary',
    outline: 'outline',
  };
  const sizeClasses = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  const buttonClasses =
    `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();

  const buttonContent = (
    <motion.button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      whileHover={{ scale: disabled ? 1 : 1.05 }}
      whileTap={{ scale: disabled ? 1 : 0.95 }}
      {...props}
    >
      {children}
    </motion.button>
  );

  if (to) {
    return (
      <Link to={to} className={buttonClasses}>
        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {children}
        </motion.span>
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={buttonClasses}>
        <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
          {children}
        </motion.span>
      </a>
    );
  }

  return buttonContent;
};

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string,
  variant: PropTypes.oneOf(['primary', 'secondary', 'outline']),
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  className: PropTypes.string,
};

export default Button;
