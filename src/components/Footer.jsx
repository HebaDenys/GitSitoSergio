const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <div className="footer-content">
        <p>&copy; {currentYear} Traslochi Veloci. Tutti i diritti riservati.</p>
        <p>Telefono: 02 1234 5678 | Email: info@traslochiveloci.it</p>
        <div className="social-links">
          <a href="#" aria-label="Facebook">
            Facebook
          </a>
          <a href="#" aria-label="Instagram">
            Instagram
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
