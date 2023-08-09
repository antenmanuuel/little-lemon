import {
    faFacebook,
    faTwitter,
    faInstagram,
  } from "@fortawesome/free-brands-svg-icons";
  import {
    faEnvelope,
    faLocationDot,
    faPhone,
  } from "@fortawesome/free-solid-svg-icons";
  import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
  import { Link } from "react-router-dom";
  import "./css/Footer.css";
  import logoWhiteImage from "./assets/logo-white.png";
  import links from "../../utils/links";
  
  const contacts = [
    { icon: faLocationDot, info: "1970 Vine Street, Chicago, IL 60607" },
    { icon: faPhone, info: "(847) 618-4154" },
    { icon: faEnvelope, info: "customer@littlelemon.com" },
  ];
  
  const socials = [
    { icon: faFacebook, name: "facebook" },
    { icon: faTwitter, name: "twitter" },
    { icon: faInstagram, name: "instagram" },
  ];
  
  const navLinks = Array.from(links.values()).filter(
    (link) => link.anchorable
  );

  const Footer = () => {
    return (
      <footer className="site-footer">
        <div className="container grid">
          <img
            className="site-footer-logo"
            src={logoWhiteImage}
            alt="Little Lemon"
          />
          <nav className="site-footer-nav">
            <h4>Sitemap</h4>
            <ul>
              {navLinks.map((navLink, index) => (
                <li key={index}>
                  <Link to={navLink.path}>{navLink.name}</Link>
                </li>
              ))}
            </ul>
          </nav>
          <div className="site-footer-contact">
            <h4>Contact us</h4>
            <address>
              {contacts.map((contact, index) => (
                <p key={index}>
                  <FontAwesomeIcon icon={contact.icon} /> {contact.info}
                </p>
              ))}
            </address>
          </div>
          <div className="site-footer-social">
            <h4>Connect with us</h4>
            {socials.map((social, index) => (
              <a
                key={index}
                href={`https://www.${social.name}.com`}
                target="_blank"
                rel="noreferrer"
              >
                <FontAwesomeIcon icon={social.icon} size="lg" />
              </a>
            ))}
          </div>
        </div>
      </footer>
    );
  };
  
  export default Footer;
  

  