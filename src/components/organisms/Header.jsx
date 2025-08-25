import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { NavigationMenu } from '../molecules';
import { Button, Icon } from '../atoms';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

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

  // Scroll to top when navigating to contact or services page
  useEffect(() => {
    // Add a small delay to ensure the page has fully loaded and prevent F5 errors
    const timer = setTimeout(() => {
      try {
        if (location && (location.pathname === '/contattaci' || location.pathname === '/servizi')) {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }
      } catch (error) {
        // Silently handle any errors during page refresh
        console.log('Page initialization in progress...');
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [location?.pathname]);

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
    } else {
      // If section doesn't exist on current page, scroll to top
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleLogoClick = () => {
    if (location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }, 100);
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
    closeMenu();
  };

  const handleNavClick = (e, item) => {
    if (item.to === '/') {
      // Home button - navigate to home and scroll to top
      if (location.pathname !== '/') {
        navigate('/', { replace: false });
        setTimeout(() => {
          window.scrollTo({ top: 0, behavior: 'smooth' });
        }, 100);
      } else {
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
      closeMenu();
    } else if (item.to && item.to.startsWith('#')) {
      e.preventDefault();

      // If we're not on the home page and the target is a section that exists on home page
      const homeSections = ['#chi-siamo', '#servizi', '#testimonianze'];
      if (location.pathname !== '/' && homeSections.includes(item.to)) {
        // Navigate to home page first, then scroll to section
        navigate('/', { replace: false });
        // Use setTimeout to ensure navigation completes before scrolling
        setTimeout(() => {
          scrollToSection(item.to);
        }, 100);
      } else {
        // We're on the home page or the section exists on current page
        scrollToSection(item.to);
      }
    } else {
      closeMenu();
    }
  };

  const navigationItems = [
    { id: 'home', label: 'Home', to: '/' },
    { id: 'services', label: 'Servizi', to: '#servizi' },
    { id: 'about', label: 'Chi Siamo', to: '#chi-siamo' },
    { id: 'testimonials', label: 'Testimonianze', to: '#testimonianze' },
    { id: 'contact', label: 'Contattaci', to: '/contattaci' },
  ];

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="logo">
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleLogoClick}
            style={{ cursor: 'pointer' }}
          >
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
            <span></span>
            <span></span>
            <span></span>
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
