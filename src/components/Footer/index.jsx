import { Link } from "react-router-dom";
import { socialLinks } from "static";
import "./style.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__links">
        {socialLinks.map(({ id, icon, path }) => (
          <Link
            className="footer__link"
            to={path}
            target="_blank"
            rel="noreferrer noopener"
            key={id}
          >
            <img src={icon} alt="Social Icon" />
          </Link>
        ))}
      </div>
    </footer>
  );
};

export default Footer;
