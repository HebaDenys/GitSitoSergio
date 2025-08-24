import PropTypes from 'prop-types';

const Icon = ({ name, size = 'medium', className = '', onClick, ...props }) => {
  const sizeClasses = {
    small: 'small',
    medium: 'medium',
    large: 'large',
  };

  const iconClasses = `icon ${name} ${sizeClasses[size]} ${className}`.trim();

  // Social media icons
  const iconMap = {
    facebook: '📘',
    instagram: '📷',
    twitter: '🐦',
    linkedin: '💼',
    youtube: '📺',
    phone: '📞',
    email: '✉️',
    location: '📍',
    menu: '☰',
    close: '✕',
    arrow: '→',
  };

  const iconContent = iconMap[name] || '•';

  if (onClick) {
    return (
      <button
        className={iconClasses}
        onClick={onClick}
        aria-label={name}
        {...props}
      >
        {iconContent}
      </button>
    );
  }

  return (
    <span className={iconClasses} role="img" aria-label={name} {...props}>
      {iconContent}
    </span>
  );
};

Icon.propTypes = {
  name: PropTypes.oneOf([
    'facebook',
    'instagram',
    'twitter',
    'linkedin',
    'youtube',
    'phone',
    'email',
    'location',
    'menu',
    'close',
    'arrow',
  ]).isRequired,
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  className: PropTypes.string,
  onClick: PropTypes.func,
};

export default Icon;
