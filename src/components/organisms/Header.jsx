import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { NavigationMenu } from '../molecules';
import { Button, Icon } from '../atoms';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [isMenuOpen]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
    document.body.style.overflow = 'auto';
  };

  const scrollToSection = sectionId => {
    const element = document.querySelector(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleNavClick = (e, item) => {
    if (item.to && item.to.startsWith('#')) {
      e.preventDefault();
      scrollToSection(item.to);
    } else {
      closeMenu();
    }
  };

  const navigationItems = [
    { id: 'services', label: 'Servizi', to: '#servizi' },
    { id: 'about', label: 'Chi Siamo', to: '#chi-siamo' },
    { id: 'testimonials', label: 'Testimonianze', to: '#testimonianze' },
    { id: 'contact', label: 'Contattaci', to: '/contattaci' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="logo">
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            Traslochi Veloci
          </motion.div>
        </div>

        <NavigationMenu
          items={navigationItems}
          className={isMenuOpen ? 'active' : ''}
          onItemClick={handleNavClick}
          variant="horizontal"
        />

        <div className="header-actions">
          <Button
            to="/contattaci"
            variant="primary"
            size="medium"
            onClick={closeMenu}
            className="desktop-cta"
          >
            Richiedi Preventivo
          </Button>

          <button
            className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <Icon name={isMenuOpen ? 'close' : 'menu'} size="medium" />
          </button>
        </div>
      </nav>
    </header>
  );
};

Header.propTypes = {
  // Add any props if needed in the future
};

export default Header;
