import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import PropTypes from 'prop-types';

const NavigationMenu = ({
  items = [],
  className = '',
  onItemClick,
  variant = 'horizontal',
}) => {
  const location = useLocation();

  const handleNavClick = (e, item) => {
    if (item.onClick) {
      item.onClick(e, item);
    }
    if (onItemClick) {
      onItemClick(e, item);
    }
  };

  const menuClasses = `nav-menu ${variant} ${className}`.trim();

  return (
    <motion.ul
      className={menuClasses}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {items.map((item, index) => (
        <motion.li
          key={item.id || item.label}
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
        >
          {item.to ? (
            <Link
              to={item.to}
              onClick={e => handleNavClick(e, item)}
              className={location.pathname === item.to ? 'active' : ''}
            >
              {item.label}
            </Link>
          ) : item.href ? (
            <a
              href={item.href}
              onClick={e => handleNavClick(e, item)}
              className={item.className || ''}
            >
              {item.label}
            </a>
          ) : (
            <button
              onClick={e => handleNavClick(e, item)}
              className={item.className || ''}
            >
              {item.label}
            </button>
          )}
        </motion.li>
      ))}
    </motion.ul>
  );
};

NavigationMenu.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      label: PropTypes.string.isRequired,
      to: PropTypes.string,
      href: PropTypes.string,
      onClick: PropTypes.func,
      className: PropTypes.string,
    })
  ).isRequired,
  className: PropTypes.string,
  onItemClick: PropTypes.func,
  variant: PropTypes.oneOf(['horizontal', 'vertical']),
};

export default NavigationMenu;
