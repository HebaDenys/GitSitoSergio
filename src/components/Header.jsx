import { useState, useEffect } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { motion } from 'framer-motion'

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    const handleResize = () => {
      if (window.innerWidth > 768 && isMenuOpen) {
        setIsMenuOpen(false)
      }
    }

    window.addEventListener('scroll', handleScroll)
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [isMenuOpen])

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
    if (!isMenuOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }

  const closeMenu = () => {
    setIsMenuOpen(false)
    document.body.style.overflow = 'auto'
  }

  const scrollToSection = (sectionId) => {
    if (location.pathname === '/') {
      const element = document.querySelector(sectionId)
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' })
      }
    } else {
      // Navigate to home and scroll to section
      window.location.href = `/#${sectionId.replace('#', '')}`
    }
    closeMenu()
  }

  const handleNavClick = (e, target) => {
    if (target.startsWith('#')) {
      e.preventDefault()
      scrollToSection(target)
    } else {
      closeMenu()
    }
  }

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <nav>
        <div className="logo">Traslochi Veloci</div>
        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, '#servizi')}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Servizi
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, '#chi-siamo')}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Chi Siamo
            </Link>
          </li>
          <li>
            <Link
              to="/"
              onClick={(e) => handleNavClick(e, '#testimonianze')}
              className={location.pathname === '/' ? 'active' : ''}
            >
              Testimonianze
            </Link>
          </li>
          <li>
            <Link
              to="/contattaci"
              onClick={closeMenu}
              className={location.pathname === '/contattaci' ? 'active' : ''}
            >
              Contattaci
            </Link>
          </li>
        </ul>
        <Link
          to="/contattaci"
          className="cta-button desktop-cta"
          onClick={closeMenu}
        >
          Richiedi Preventivo
        </Link>
        <div
          className={`mobile-menu-toggle ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </nav>
    </header>
  )
}

export default Header