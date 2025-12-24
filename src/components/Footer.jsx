import { FiMail, FiPhoneCall, FiMapPin, FiArrowUpRight } from 'react-icons/fi';
import finanshelsLogo from '../assets/finanshelslogo.svg';

const Footer = () => {
  return (
    <footer className="footer-modern">
      <div className="footer-container-modern">
        <div className="footer-grid">
          <div className="footer-brand-modern">
            <div className="footer-logo-row">
              <img src={finanshelsLogo} alt="Finanshels" className="footer-logo" />
              <span className="footer-badge">UAE • GCC</span>
            </div>
            <p className="footer-tagline">
              Purpose-built bookkeeping, tax, and CFO guidance for founders who want investor-ready books.
            </p>
            <div className="footer-contact-modern">
              <a href="mailto:contact@finanshels.com" className="footer-contact-item">
                <FiMail />
                <span>contact@finanshels.com</span>
              </a>
              <a href="tel:+971585288381" className="footer-contact-item">
                <FiPhoneCall />
                <span>+971 58 528 8381</span>
              </a>
              <div className="footer-contact-item">
                <FiMapPin />
                <span>Dubai • Abu Dhabi</span>
              </div>
            </div>
          </div>

          <div className="footer-links-modern">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <a href="#pricing" className="footer-link">Pricing</a>
              <a href="#reviews" className="footer-link">Reviews</a>
              <a href="#consultation" className="footer-link">Free Consultation</a>
            </div>
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <a href="mailto:hello@finanshels.com" className="footer-link">Contact Us</a>
              <a href="https://www.linkedin.com/company/finanshels" className="footer-link" target="_blank" rel="noreferrer">
                LinkedIn
              </a>
            </div>
          </div>

          <div className="footer-cta-modern">
            <h4 className="footer-heading">Ready to get started?</h4>
            <p className="footer-cta-text">
              Tell us where you operate and we'll match you with the right finance pod in under 24 hours.
            </p>
            <a href="mailto:hello@finanshels.com" className="btn-footer-cta">
              Book Strategy Call <FiArrowUpRight />
            </a>
            <p className="footer-subtext">First month free • 24h response</p>
          </div>
        </div>

        <div className="footer-bottom-modern">
          <p>© {new Date().getFullYear()} Finanshels. Built for modern finance teams.</p>
          <p className="footer-tagline-small">Financial operations without the busywork.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
