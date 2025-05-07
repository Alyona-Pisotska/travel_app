import React from 'react';
import heartIcon from '../../assets/images/heart.svg';
import './footer.css';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <span className="footer__text">
        from
        <a
          className="footer__link"
          href="https://binary-studio.com"
          target="_blank"
          rel="noreferrer"
        >
          binary studio
        </a>
        with
        <img
          className="footer__icon"
          src={heartIcon}
          alt="heart icon"
        />
      </span>
    </footer>
  );
};

export default Footer;
